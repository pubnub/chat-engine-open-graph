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

2. Install the server for fetching and read the meta tags for facebook open-graph and twitter cards

```js
const express = require('express');
const cors = require('cors');
const Metaphor = require('metaphor');

const app = express();
const engine = new Metaphor.Engine();

app.use(cors());

app.get('/', function(req, res){
  console.log('\n' + req.query.q);
  engine.describe(req.query.q, function (description){
    res.json(description);
    res.end();
  });
});

app.listen(3000);
console.log('server running...');
```

3. Attach this plugin to the channel you want, in this case global

You have to inject a function to the attribute **api** which receive as a parameter the URL detected inside of message 
and arrange it into a query parameter to the API endpoint of the server side.

```js
ChatEngine.global.plugin(ChatEngineCore.plugin['chat-engine-open-graph']({
  api: (url) => `http://localhost:3000/?q=${url}`
}));

or

const opengraph = require('chat-engine-open-graph');

ChatEngine.global.plugin(opengraph({ api: (url) => `http://localhost:3000/?q=${url}` }));
```

4. Customize the http(s) request to server

```js
const request = require('superagent');
const agent = request.agent();

agent.set({'My-Header': 'foo'});

ChatEngine.global.plugin(opengraph({ api: (url) => `http://localhost:3000/?q=${url}`, agent }));

```


