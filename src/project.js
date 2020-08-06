window.__require=function t(e,r,i){function n(c,a){if(!r[c]){if(!e[c]){var s=c.split("/");if(s=s[s.length-1],!e[s]){var u="function"==typeof __require&&__require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+c+"'")}}var l=r[c]={exports:{}};e[c][0].call(l.exports,function(t){return n(e[c][1][t]||t)},l,l.exports,t,e,r,i)}return r[c].exports}for(var o="function"==typeof __require&&__require,c=0;c<i.length;c++)n(i[c]);return n}({Play:[function(t,e,r){"use strict";cc._RF.push(e,"dbefdQH8UdPW7o4ts7FypzS","Play");var i=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),n=this&&this.__decorate||function(t,e,r,i){var n,o=arguments.length,c=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(r,"__esModule",{value:!0});var o=cc._decorator,c=o.ccclass,a=(o.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e=n([c],e)}(cc.Component));r.default=a,cc._RF.pop()},{}],VoiceInput:[function(t,e,r){"use strict";cc._RF.push(e,"dbb41MdLPpJwYrPAAz3XDNi","VoiceInput");var i=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function i(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),n=this&&this.__decorate||function(t,e,r,i){var n,o=arguments.length,c=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c};Object.defineProperty(r,"__esModule",{value:!0});var o=cc._decorator,c=o.ccclass,a=o.property,s=t("./volume-meter"),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.info=null,e.testVolume=null,e.audioContext=null,e.mediaStreamSource=null,e.meter=null,e.gotMicPermission=!1,e.warningMsg="",e}return i(e,t),e.prototype.update=function(){this.label.string="Volume: "+this.GetVolume().toFixed(6),this.info.string=this.warningMsg},e.prototype.GetMicPermission=function(){void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(t){var e=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return e?new Promise(function(r,i){e.call(navigator,t,r,i)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))});try{navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(this.OnGetStreamSuccess.bind(this)).catch(this.OnGetStreamFail.bind(this))}catch(t){this.warningMsg="Fail getting user media "+t}},e.prototype.GetVolume=function(){return this.GotMicPermission()?(t=this.testVolume?this.testVolume:this.meter.volume,t=Math.min(1,t)):0;var t},e.prototype.OnGetStreamSuccess=function(t){try{alert(1),this.gotMicPermission=!0,this.audioContext=new AudioContext,alert(2),this.mediaStreamSource=this.audioContext.createMediaStreamSource(t),alert(3),this.meter=s.createAudioMeter(this.audioContext),this.mediaStreamSource.connect(this.meter),alert(4)}catch(t){alert(t)}},e.prototype.OnGetStreamFail=function(t){this.warningMsg="Fail getting user media "+t},e.prototype.GotMicPermission=function(){return this.gotMicPermission},e.prototype.GetWarningMessage=function(){return this.warningMsg},n([a(cc.Label)],e.prototype,"label",void 0),n([a(cc.Label)],e.prototype,"info",void 0),e=n([c],e)}(cc.Component);r.default=u,cc._RF.pop()},{"./volume-meter":"volume-meter"}],"volume-meter":[function(t,e,r){"use strict";function i(t){for(var e,r=t.inputBuffer.getChannelData(0),i=r.length,n=0,o=0;o<i;o++)e=r[o],Math.abs(e)>=this.clipLevel&&(this.clipping=!0,this.lastClip=window.performance.now()),n+=e*e;var c=Math.sqrt(n/i);this.volume=Math.max(c,this.volume*this.averaging)}cc._RF.push(e,"45331RMBjhJh4Eca2/SK5jI","volume-meter"),Object.defineProperty(r,"__esModule",{value:!0}),r.createAudioMeter=function(t,e,r,n){var o=t.createScriptProcessor(512);return o.onaudioprocess=i,o.clipping=!1,o.lastClip=0,o.volume=0,o.clipLevel=e||.98,o.averaging=r||.95,o.clipLag=n||750,o.connect(t.destination),o.checkClipping=function(){return!!this.clipping&&(this.lastClip+this.clipLag<window.performance.now()&&(this.clipping=!1),this.clipping)},o.shutdown=function(){this.disconnect(),this.onaudioprocess=null},o},cc._RF.pop()},{}]},{},["Play","VoiceInput","volume-meter"]);