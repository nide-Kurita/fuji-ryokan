import $ from 'jquery';
import Navigation from './_modules/navigation';
import Desvg from 'desvg';
import FadeAnime from './_modules/fade_anime';

$(() => {
  // new Navigation();
  if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }
  window.addEventListener('load', function(){
    deSVG('.svg', true);
  });

  new FadeAnime();
  new Navigation();
  // window.addEventListener('DOMContentLoaded', function () {
  //   var glot = new Glottologist();
  //   glot.import("glot.data.json").then(() => {
  //     glot.render();
  //   });
  // });
  var glot = new Glottologist();
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "file:///C:/example/html/glot-dict.json.js";
  script.onload = function () {
    Object.keys(GLOT_DICT).forEach(function (key, idx) {
      glot.assign(key, this[key]);
    }, GLOT_DICT);
    glot.render();
  };
  document.body.appendChild(script);

})
