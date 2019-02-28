(() => {
  'use strict';
  // Start Promise
  const url =
    'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nathankeyzer&api_key=558413ce30002869acf1d2e2d9c2047b&format=json&page=1';
  const topTracks =
    'https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=nathankeyzer&api_key=558413ce30002869acf1d2e2d9c2047b&format=json';
  const element = document.querySelector('main');
  const user = document.querySelector('h1');
  const nav = document.querySelectorAll('header a');
  window.addEventListener('hashchange', init);

  const api = {
    getData: url => {
      return new Promise(function(resolve, reject) {
        const request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = () => {
          if (request.status >= 200 && request.status < 400) {
            // Success!
            const data = JSON.parse(request.responseText);
            resolve(data);
          } else {
            // We reached our target server, but it returned an error
            reject(error);
          }
        };

        request.onerror = () => {
          // There was a connection error of some sort
        };

        request.send();
      });
    },
    parseData: () => {}
  };

  const render = {
    songList: data => {
      element.innerHTML = '';
      console.log('render.songList gebruikt: ' + data);
      data.recenttracks.track.forEach(song => {
        let template = `
      <section>
      <a href="${song.url}" target="blank"> <img src="${
          song.image[3]['#text'] ? song.image[3]['#text'] : 'public/img/300.png'
        }"></a>
        <div>
          <h2>${song.name}</h2>
          <p>${song.artist['#text']}</p>
          <p>${song.date ? song.date['#text'] : 'Now Playing'}</p>
        </div>
      </section>
        `;
        element.innerHTML += template;
      });
      console.log(data);
    },
    currentUser: data => {
      let tracks;
      if (data.recenttracks) {
        tracks = 'recenttracks';
      } else {
        tracks = 'toptracks';
      }
      if (data[tracks]['@attr'].user) {
        nav[0].href = '#user/' + data[tracks]['@attr'].user + '/top';
        nav[0].classList.toggle('active');
        nav[1].href = '#user/' + data[tracks]['@attr'].user + '/recent';
        nav[1].classList.toggle('active');
        user.innerHTML = 'Current user: ' + data[tracks]['@attr'].user;
      }
    },
    topTracks: data => {
      element.innerHTML = '';
      console.log('render.songList gebruikt: ' + data);
      data.toptracks.track.forEach(song => {
        let template = `
      <section>
      <a href="" target="blank"> <img src="${
        song.image[3]['#text'] ? song.image[3]['#text'] : 'public/img/300.png'
      }"></a>
        <div>
          <h2>${song.name}</h2>
          <p>${song.artist.name}</p>
          <p> ${song.playcount}</P>

        </div>
      </section>
        `;
        element.innerHTML += template;
      });
      console.log(data);
    },
    loading: () => {
      element.innerHTML = `
			<div class="spinner">
			  <div class="double-bounce1"></div>
			  <div class="double-bounce2"></div>
			</div>`;
    },
    singleSong: data => {}
  };

  //begin van routie
  function router() {
    let route = window.location.hash;
    switch (route.split('/')[2]) {
      case 'top':
        render.loading();
        return {
          link:
            'https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=' +
            route.split('/')[1] +
            '&api_key=558413ce30002869acf1d2e2d9c2047b&format=json',
          page: 'top'
        };
        break;
      case 'recent':
        render.loading();
        return {
          link:
            'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' +
            route.split('/')[1] +
            '&api_key=558413ce30002869acf1d2e2d9c2047b&format=json&page=1',
          page: 'recent'
        };
        break;
      default:
        console.log('grsndmf');
        render.loading();
        return {
          link:
            'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nathankeyzer&api_key=558413ce30002869acf1d2e2d9c2047b&format=json&page=1',
          page: 'recent'
        };
        break;
    }
  }

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
