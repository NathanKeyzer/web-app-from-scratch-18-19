const render = {
  element: document.querySelector('main'),
  user: document.querySelector('h1'),
  nav: document.querySelectorAll('header a'),
  songList: data => {
    render.element.innerHTML = '';
    console.log('render.songList gebruikt: ' + data);
    data.recenttracks.track.forEach(song => {
      let template = `
    <section>
    <a href="${song.url}" target="blank"> <img src="${
        song.image[2]['#text'] ? song.image[2]['#text'] : 'public/img/174.png'
      }"></a>
      <div>
        <h2>${song.name}</h2>
        <p>${song.artist['#text']}</p>
        <p>${song.date ? song.date['#text'] : 'Now Playing'}</p>
      </div>
    </section>
      `;
      render.element.innerHTML += template;
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
      render.nav[0].href = '#user/' + data[tracks]['@attr'].user + '/top';
      render.nav[1].href = '#user/' + data[tracks]['@attr'].user + '/recent';
      render.user.innerHTML = 'Current user: ' + data[tracks]['@attr'].user;
    }
  },
  topTracks: data => {
    render.element.innerHTML = '';
    console.log('render.songList gebruikt: ' + data);
    data.toptracks.track.forEach(song => {
      let template = `
    <section>
    <a href="" target="blank"> <img src="${
      song.image[2]['#text'] ? song.image[2]['#text'] : 'public/img/174.png'
    }"></a>
      <div>
        <h2>${song.name}</h2>
        <p>${song.artist.name}</p>
        <p> ${song.playcount}</P>

      </div>
    </section>
      `;
      render.element.innerHTML += template;
    });
    console.log(data);
  },
  loading: () => {
    render.element.innerHTML = `
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>`;
  },
  singleSong: data => {}
};

export default render;
