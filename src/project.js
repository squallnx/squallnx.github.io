window.__require=function t(e,i,o){function r(c,a){if(!i[c]){if(!e[c]){var s=c.split("/");if(s=s[s.length-1],!e[s]){var u="function"==typeof __require&&__require;if(!a&&u)return u(s,!0);if(n)return n(s,!0);throw new Error("Cannot find module '"+c+"'")}}var l=i[c]={exports:{}};e[c][0].call(l.exports,function(t){return r(e[c][1][t]||t)},l,l.exports,t,e,i,o)}return i[c].exports}for(var n="function"==typeof __require&&__require,c=0;c<o.length;c++)r(o[c]);return r}({Play:[function(t,e,i){"use strict";cc._RF.push(e,"dbefdQH8UdPW7o4ts7FypzS","Play");var o=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function o(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,i,o){var r,n=arguments.length,c=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(n<3?r(c):n>3?r(e,i,c):r(e,i))||c);return n>3&&c&&Object.defineProperty(e,i,c),c};Object.defineProperty(i,"__esModule",{value:!0});var n=cc._decorator,c=n.ccclass,a=(n.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e=r([c],e)}(cc.Component));i.default=a,cc._RF.pop()},{}],VoiceInput:[function(t,e,i){"use strict";cc._RF.push(e,"dbb41MdLPpJwYrPAAz3XDNi","VoiceInput");var o=this&&this.__extends||function(){var t=function(e,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(e,i)};return function(e,i){function o(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}(),r=this&&this.__decorate||function(t,e,i,o){var r,n=arguments.length,c=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(n<3?r(c):n>3?r(e,i,c):r(e,i))||c);return n>3&&c&&Object.defineProperty(e,i,c),c};Object.defineProperty(i,"__esModule",{value:!0});var n=cc._decorator,c=n.ccclass,a=n.property,s=t("./volume-meter"),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.info=null,e.testVolume=null,e.audioContext=null,e.mediaStreamSource=null,e.meter=null,e.gotMicPermission=!1,e.warningMsg="",e}return o(e,t),e.prototype.update=function(){this.label.string="Volume: "+this.GetVolume().toFixed(6),this.info.string=this.audioContext?this.audioContext.state:this.warningMsg},e.prototype.GetMicPermission=function(){void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(t){var e=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return e?new Promise(function(i,o){e.call(navigator,t,i,o)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))});try{navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(this.OnGetStreamSuccess.bind(this)).catch(this.OnGetStreamFail.bind(this))}catch(t){this.warningMsg="Fail getting user media "+t}},e.prototype.GetVolume=function(){return this.GotMicPermission()?(t=this.testVolume?this.testVolume:this.meter.volume,t=Math.min(1,t)):0;var t},e.prototype.OnGetStreamSuccess=function(t){try{alert(13);var e=window.AudioContext||window.webkitAudioContext;this.gotMicPermission=!0,this.audioContext=new e,this.mediaStreamSource=this.audioContext.createMediaStreamSource(t),this.meter=s.createAudioMeter(this.audioContext),this.mediaStreamSource.connect(this.meter),this.audioContext&&this.audioContext.resume()}catch(t){alert(t)}},e.prototype.OnGetStreamFail=function(t){this.warningMsg="Fail getting user media "+t},e.prototype.GotMicPermission=function(){return this.gotMicPermission},e.prototype.GetWarningMessage=function(){return this.warningMsg},r([a(cc.Label)],e.prototype,"label",void 0),r([a(cc.Label)],e.prototype,"info",void 0),e=r([c],e)}(cc.Component);i.default=u,cc._RF.pop()},{"./volume-meter":"volume-meter"}],"volume-meter":[function(t,e,i){"use strict";function o(t){for(var e,i=t.inputBuffer.getChannelData(0),o=i.length,r=0,n=0;n<o;n++)e=i[n],Math.abs(e)>=this.clipLevel&&(this.clipping=!0,this.lastClip=window.performance.now()),r+=e*e;var c=Math.sqrt(r/o);this.volume=Math.max(c,this.volume*this.averaging)}cc._RF.push(e,"45331RMBjhJh4Eca2/SK5jI","volume-meter"),Object.defineProperty(i,"__esModule",{value:!0}),i.createAudioMeter=function(t,e,i,r){var n=t.createScriptProcessor(512);return n.onaudioprocess=o,n.clipping=!1,n.lastClip=0,n.volume=0,n.clipLevel=e||.98,n.averaging=i||.95,n.clipLag=r||750,n.connect(t.destination),n.checkClipping=function(){return!!this.clipping&&(this.lastClip+this.clipLag<window.performance.now()&&(this.clipping=!1),this.clipping)},n.shutdown=function(){this.disconnect(),this.onaudioprocess=null},n},cc._RF.pop()},{}]},{},["Play","VoiceInput","volume-meter"]);