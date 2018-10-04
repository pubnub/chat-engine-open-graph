/**
* @overview ChatEngine Open Graph unfurls URLs sent in chat messages and transforms them into more interactive pieces of media. More info [here](https://www.pubnub.com/blog/open-graph-plugin-chatengine-unfurl-urls-chat-apps/).
* @module chat-engine-open-graph
* @requires {@link ChatEngine}
*/


/**
@function
@example

// copy and paste Open Graph API key here
const apiKey = "xxxxxxxxxxxxxxx";

// You have to inject a function to the attribute api which
// receive as a parameter the URL detected inside of message and arrange
// it into a query parameter to the API endpoint of the server side.

ChatEngine.global.plugin(ChatEngineCore.plugin['chat-engine-open-graph']({
  api: (url) => `https://opengraph.io/api/1.1/site/${encodeURI(url)}?app_id=${apiKey}`
}));

or

const opengraph = require('chat-engine-open-graph');

ChatEngine.global.plugin(opengraph({ api: (url) => `https://opengraph.io/api/1.1/site/${encodeURI(url)}?app_id=${apiKey}` }));

*/

module.exports = (config) => {

    const { api = (url) => `http://localhost:3001/?q=${url}` } = config;

    const regex = /(http|https)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/;

    return {
      middleware: {
        on: {
          message: async function (payload, next) {
            let r = payload.data.text.match(regex);
            if (r && r.length > 0) {
              const data = await fetch(api(r[0])).then((response) => {
                  if(response.ok) {
                      return response.json();
                  } else {
                      return Promise.reject({
                          status: response.status,
                          statusText: response.statusText
                        })
                  }
              }).catch((error)=>{ console.log("Error: ", error) });

              if(data.hybridGraph != null){
                  payload.data.text = payload.data.text.replace(regex, '');
                  payload.data.img = data.hybridGraph.image;
                  payload.data.url = data.hybridGraph.url;
                  payload.data.title = data.hybridGraph.title;
                  payload.data.desc = data.hybridGraph.description;
              }
            }
            next(null, payload);
          }
        }
      }
    }
  }
