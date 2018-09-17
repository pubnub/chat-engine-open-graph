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
                return response.json();
              });
              payload.data.text = payload.data.text.replace(regex, '');
              payload.data.img = data.hybridGraph.image;
              payload.data.url = data.hybridGraph.url;
              payload.data.title = data.hybridGraph.title;
              payload.data.desc = data.hybridGraph.description;
            }
            next(null, payload);
          }
        }
      }
    }
}