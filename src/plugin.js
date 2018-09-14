module.exports = (config) => {

  const { api = (url) => `http://localhost:3001/?q=${url}` } = config;

  const regex = /(http|https)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/;

  return {
    middleware: {
      on: {
        message: function (payload, next) {
          let r = payload.data.text.match(regex);
          if (r && r.length > 0) {
            request(api(r[0]), 'GET', {
              'Access-Control-Allow-Origin': '*'
            }).then((res) => {
                payload.data.text = payload.data.text.replace(regex, '');
                payload.data.metadata = res.hybridGraph;
            }).catch((error) => {
              // console.error(error);
            });
          }
          next(null, payload);
        }
      }
    }
  }
}

/**
 * Helper function to make an HTTP request wrapped in an ES6 Promise.
 *
 * @param {String} url URL of the resource that is being requested.
 * @param {String} method POST, GET, PUT, etc.
 * @param {Object} options JSON Object with HTTP request options, "header"
 *     Object of possible headers to set, and a body Object of a request body.
 *
 * @return {Promise} Resolves a parsed JSON Object or String response text if
 *     the response code is in the 200 range. Rejects with response status text
 *     when the response code is outside of the 200 range.
 */
function request(url, method, options) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        let contentTypeIsSet = false;
        options = options || {};
        xhr.open(method, url);

        for (let header in options.headers) {
            if ({}.hasOwnProperty.call(options.headers, header)) {
                header = header.toLowerCase();
                contentTypeIsSet = header === 'content-type' ? true : contentTypeIsSet;
                xhr.setRequestHeader(header, options.headers[header]);
            }
        }

        if (!contentTypeIsSet) {
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                let response;
                try {
                    response = JSON.parse(xhr.response);
                } catch (e) {
                    response = xhr.response;
                }
                resolve(response);
            } else {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText,
                });
            }
        };

        xhr.send(JSON.stringify(options.body));
    });
}
