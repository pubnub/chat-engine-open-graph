(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';(function(){var a=require('../package.json');window.ChatEngineCore.plugin[a.name]=require('../src/plugin.js')})();

},{"../package.json":2,"../src/plugin.js":3}],2:[function(require,module,exports){
module.exports={
  "name": "chat-engine-open-graph",
  "version": "0.0.4",
  "main": "src/plugin.js",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/pubnub/chat-engine-open-graph.git"
  },
  "keywords": [
    "pubnub",
    "chat-engine",
    "open-graph",
    "realtime"
  ],
  "author": "Manuel Fernando",
  "bugs": {
    "url": "https://github.com/pubnub/chat-engine-open-graph/issues"
  },
  "homepage": "https://github.com/pubnub/chat-engine-open-graph#readme",
  "browserify": {
    "transform": [
      [
        "babelify",
        {
          "presets": [
            "es2015",
            "minify"
          ]
        }
      ]
    ]
  },
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-minify": "^0.4.3",
    "babel-preset-es2015": "^6.24.1",
    "babelify": "^8.0.0"
  }
}

},{}],3:[function(require,module,exports){
"use strict";module.exports=function(a){var b=a.api,c=b===void 0?function(a){return"http://localhost:3001/?q="+a}:b,d=/(http|https)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/;return{middleware:{on:{message:async function f(a,b){var e=a.data.text.match(d);if(e&&0<e.length){var g=await fetch(c(e[0])).then(function(a){return a.ok?a.json():Promise.reject({status:a.status,statusText:a.statusText})}).catch(function(a){console.log("Error: ",a)});null!=g.hybridGraph&&(a.data.text=a.data.text.replace(d,""),a.data.img=g.hybridGraph.image,a.data.url=g.hybridGraph.url,a.data.title=g.hybridGraph.title,a.data.desc=g.hybridGraph.description)}b(null,a)}}}}};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2NoYXQtZW5naW5lLXBsdWdpbi9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiLnRtcC93cmFwLmpzIiwicGFja2FnZS5qc29uIiwic3JjL3BsdWdpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTthQ0FBLENBQUMsVUFBVyxDQUVSLEdBQU0sR0FBTSxRQUFRLGlCQUFSLENBQVosQ0FDQSxPQUFPLGNBQVAsQ0FBc0IsTUFBdEIsQ0FBNkIsRUFBSSxJQUFqQyxFQUF5QyxRQUFRLGtCQUFSLENBRTVDLENBTEQsRzs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O2FDdkNBLE9BQU8sT0FBUCxDQUFpQixTQUFDLENBQUQsQ0FBWSxPQUVvQyxDQUZwQyxDQUVqQixHQUZpQixDQUVqQixDQUZpQixZQUVYLFNBQUMsQ0FBRCxvQ0FBcUMsQ0FBckMsQ0FGVyxHQUluQixFQUFRLDJEQUpXLENBTXpCLE1BQU8sQ0FDTCxXQUFZLENBQ1YsR0FBSSxDQUNGLFFBQVMsaUJBQWdCLENBQWhCLENBQXlCLENBQXpCLENBQStCLENBQ3RDLEdBQUksR0FBSSxFQUFRLElBQVIsQ0FBYSxJQUFiLENBQWtCLEtBQWxCLENBQXdCLENBQXhCLENBQVIsQ0FDQSxHQUFJLEdBQWdCLENBQVgsR0FBRSxNQUFYLENBQXVCLENBQ3JCLEdBQU0sR0FBTyxLQUFNLE9BQU0sRUFBSSxFQUFFLENBQUYsQ0FBSixDQUFOLEVBQWlCLElBQWpCLENBQXNCLFNBQUMsQ0FBRCxDQUFjLE9BQ2hELEdBQVMsRUFEdUMsQ0FFeEMsRUFBUyxJQUFULEVBRndDLENBSXhDLFFBQVEsTUFBUixDQUFlLENBQ2xCLE9BQVEsRUFBUyxNQURDLENBRWxCLFdBQVksRUFBUyxVQUZILENBQWYsQ0FLZCxDQVRrQixFQVNoQixLQVRnQixDQVNWLFNBQUMsQ0FBRCxDQUFTLENBQUUsUUFBUSxHQUFSLENBQVksU0FBWixDQUF1QixDQUF2QixDQUErQixDQVRoQyxDQUFuQixDQVd1QixJQUFwQixJQUFLLFdBWmEsR0FhakIsRUFBUSxJQUFSLENBQWEsSUFBYixDQUFvQixFQUFRLElBQVIsQ0FBYSxJQUFiLENBQWtCLE9BQWxCLENBQTBCLENBQTFCLENBQWlDLEVBQWpDLENBYkgsQ0FjakIsRUFBUSxJQUFSLENBQWEsR0FBYixDQUFtQixFQUFLLFdBQUwsQ0FBaUIsS0FkbkIsQ0FlakIsRUFBUSxJQUFSLENBQWEsR0FBYixDQUFtQixFQUFLLFdBQUwsQ0FBaUIsR0FmbkIsQ0FnQmpCLEVBQVEsSUFBUixDQUFhLEtBQWIsQ0FBcUIsRUFBSyxXQUFMLENBQWlCLEtBaEJyQixDQWlCakIsRUFBUSxJQUFSLENBQWEsSUFBYixDQUFvQixFQUFLLFdBQUwsQ0FBaUIsV0FqQnBCLENBbUJ0QixDQUNELEVBQUssSUFBTCxDQUFXLENBQVgsQ0FDRCxDQXhCQyxDQURNLENBRFAsQ0E4QlIsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIihmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IHBrZyA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpO1xuICAgIHdpbmRvdy5DaGF0RW5naW5lQ29yZS5wbHVnaW5bcGtnLm5hbWVdID0gcmVxdWlyZSgnLi4vc3JjL3BsdWdpbi5qcycpO1xuXG59KSgpO1xuIiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIm5hbWVcIjogXCJjaGF0LWVuZ2luZS1vcGVuLWdyYXBoXCIsXG4gIFwidmVyc2lvblwiOiBcIjAuMC40XCIsXG4gIFwibWFpblwiOiBcInNyYy9wbHVnaW4uanNcIixcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImdpdCtodHRwczovL2dpdGh1Yi5jb20vcHVibnViL2NoYXQtZW5naW5lLW9wZW4tZ3JhcGguZ2l0XCJcbiAgfSxcbiAgXCJrZXl3b3Jkc1wiOiBbXG4gICAgXCJwdWJudWJcIixcbiAgICBcImNoYXQtZW5naW5lXCIsXG4gICAgXCJvcGVuLWdyYXBoXCIsXG4gICAgXCJyZWFsdGltZVwiXG4gIF0sXG4gIFwiYXV0aG9yXCI6IFwiTWFudWVsIEZlcm5hbmRvXCIsXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vcHVibnViL2NoYXQtZW5naW5lLW9wZW4tZ3JhcGgvaXNzdWVzXCJcbiAgfSxcbiAgXCJob21lcGFnZVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9wdWJudWIvY2hhdC1lbmdpbmUtb3Blbi1ncmFwaCNyZWFkbWVcIixcbiAgXCJicm93c2VyaWZ5XCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBbXG4gICAgICBbXG4gICAgICAgIFwiYmFiZWxpZnlcIixcbiAgICAgICAge1xuICAgICAgICAgIFwicHJlc2V0c1wiOiBbXG4gICAgICAgICAgICBcImVzMjAxNVwiLFxuICAgICAgICAgICAgXCJtaW5pZnlcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIF1cbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiYmFiZWwtY29yZVwiOiBcIl42LjI2LjNcIixcbiAgICBcImJhYmVsLW1pbmlmeVwiOiBcIl4wLjQuM1wiLFxuICAgIFwiYmFiZWwtcHJlc2V0LWVzMjAxNVwiOiBcIl42LjI0LjFcIixcbiAgICBcImJhYmVsaWZ5XCI6IFwiXjguMC4wXCJcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoY29uZmlnKSA9PiB7XG5cbiAgICBjb25zdCB7IGFwaSA9ICh1cmwpID0+IGBodHRwOi8vbG9jYWxob3N0OjMwMDEvP3E9JHt1cmx9YCB9ID0gY29uZmlnO1xuICBcbiAgICBjb25zdCByZWdleCA9IC8oaHR0cHxodHRwcylcXDpcXC9cXC9bYS16QS1aMC05XFwtXFwuXStcXC5bYS16QS1aXXsyLDN9KFxcL1xcUyopPy87XG4gIFxuICAgIHJldHVybiB7XG4gICAgICBtaWRkbGV3YXJlOiB7XG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgbWVzc2FnZTogYXN5bmMgZnVuY3Rpb24gKHBheWxvYWQsIG5leHQpIHtcbiAgICAgICAgICAgIGxldCByID0gcGF5bG9hZC5kYXRhLnRleHQubWF0Y2gocmVnZXgpO1xuICAgICAgICAgICAgaWYgKHIgJiYgci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChhcGkoclswXSkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiByZXNwb25zZS5zdGF0dXNUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpPT57IGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnJvcikgfSk7XG4gIFxuICAgICAgICAgICAgICBpZihkYXRhLmh5YnJpZEdyYXBoICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgcGF5bG9hZC5kYXRhLnRleHQgPSBwYXlsb2FkLmRhdGEudGV4dC5yZXBsYWNlKHJlZ2V4LCAnJyk7XG4gICAgICAgICAgICAgICAgICBwYXlsb2FkLmRhdGEuaW1nID0gZGF0YS5oeWJyaWRHcmFwaC5pbWFnZTtcbiAgICAgICAgICAgICAgICAgIHBheWxvYWQuZGF0YS51cmwgPSBkYXRhLmh5YnJpZEdyYXBoLnVybDtcbiAgICAgICAgICAgICAgICAgIHBheWxvYWQuZGF0YS50aXRsZSA9IGRhdGEuaHlicmlkR3JhcGgudGl0bGU7XG4gICAgICAgICAgICAgICAgICBwYXlsb2FkLmRhdGEuZGVzYyA9IGRhdGEuaHlicmlkR3JhcGguZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5leHQobnVsbCwgcGF5bG9hZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gICJdfQ==
