const request = require('superagent');

module.exports = (config) => {

  const { api = (url) => `http://localhost:3001/?q=${url}`, agent = request.agent() } = config;

  const regex = /(http|https)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/;

  return {
    middleware: {
      on: {
        message: (payload, next) => {
          const r = payload.data.text.match(regex);
          if (r.length > 0) {
            agent.get(api(encodeURI(r[0]))).end((err, res) => {
              if (!err) {
                payload.data.text = payload.data.text.replace(regex, '');
                payload.data.metadata = res.body;
              }
            });
          }
          next(null, payload);
        }
      }
    }
  }
}
