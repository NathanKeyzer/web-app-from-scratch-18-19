import render from './modules/render.js';
import api from './modules/api.js';
import routie from './modules/router.js';

routie({
    'recent': function() {
          render.loading();

          fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nathankeyzer&api_key=558413ce30002869acf1d2e2d9c2047b&format=json&page=1')
             .then(function(response) {
                return response.json();
              })
              .then(function(json) {
                render.songList(json)
                render.currentUser(json)
              });
    },
    'top': function() {
        render.loading();

        fetch('https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=nathankeyzer&api_key=558413ce30002869acf1d2e2d9c2047b&format=json')
           .then(function(response) {
              return response.json();
            })
            .then(function(json) {
              render.topTracks(json)
            });
    },
    'detail': function(){
        render.loading();

        fetch('http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=558413ce30002869acf1d2e2d9c2047b&artist=' + artist +' &track='+ track +'&format=json')
           .then(function(response) {
              return response.json();
            })
            .then(function(json) {
              render.topTracks(json)
            });

    },
    'detail/:artist/:track': function(artist, track){
        console.log(artist + " "+ track);
        fetch('http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=558413ce30002869acf1d2e2d9c2047b&artist=' + artist + '&track=' + track + '&format=json')
        .then (function(response){
            return response.json();
        })
        .then(function(json){
            render.detailSong(json)
        });
    }
});
// (() => {
//   'use strict';
//   // Start Promise
//   window.addEventListener('hashchange', init);
//
//   //begin van routie
//
//   function init() {
//     api.getData(routie().link).then(data => {
//       if (routie().page === 'top') {
//         render.topTracks(data);
//     } else if (routie().page === 'recent') {
//         render.songList(data);
//       }
//       render.currentUser(data);
//     });
//   }
//   init();
// })();
