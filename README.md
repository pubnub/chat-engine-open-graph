# Open Graph Plugin for Chat Engine

Identify if **message.data.text** contains an URL, send it to your server or a third party service and get the data 
collected into **message.data.metadata** which you can use in order to transform a plain message in a thumbnail.

### Quick Start

```shell
npm install chat-engine-open-graph
```

1. Have a ChatEngine server running already, instantiate a client and connect it
```js

const ChatEngine = ChatEngineCore.create({
    publishKey: 'pub-key-here',
    subscribeKey: 'sub-key-here'
});


ChatEngine.connect('Username');
ChatEngine.on('$ready', () = { ... });
```

2. Grab your API key from Opengraph.io . It should look a litte something like this:

```js
const apiKey = "xxxxxxxxxxxxxxx";
```

3. Attach this plugin to the channel you want, in this case global

You have to inject a function to the attribute **api** which receive as a parameter the URL detected inside of message 
and arrange it into a query parameter to the API endpoint of the server side.

```js
ChatEngine.global.plugin(ChatEngineCore.plugin['chat-engine-open-graph']({
  api: (url) => `https://opengraph.io/api/1.1/site/${encodeURI(url)}?app_id=${apiKey}`
}));

or

const opengraph = require('chat-engine-open-graph');

ChatEngine.global.plugin(opengraph({ api: (url) => `https://opengraph.io/api/1.1/site/${encodeURI(url)}?app_id=${apiKey}` }));
```

## Support

- If you **need help**, have a **general question** a **feature request** or to file a **bug**, contact <support@pubnub.com>