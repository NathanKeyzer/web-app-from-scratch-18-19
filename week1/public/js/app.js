import render from './modules/render.js';
import api from './modules/api.js';
import router from './modules/router.js';

(() => {
  'use strict';
  // Start Promise
  window.addEventListener('hashchange', init);

  //begin van routie

  function init() {
    api.getData(router().link).then(data => {
      if (router().page === 'top') {
        render.topTracks(data);
      } else if (router().page === 'recent') {
        render.songList(data);
      }
      render.currentUser(data);
    });
  }

  // setInterval(function() {
  //   api.getData(url).then(data => {
  //     render.songList(data);
  //   });
  // }, 2000);
  // api.getData(url).then((data) => {
  //   render.singleSong(data.song[0])
  // })
  init();
})();
