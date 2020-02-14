const render = {
  element: document.querySelector('main'),
  user: document.querySelector('h1'),
  nav: document.querySelectorAll('header a'),
  songList: data => {
    render.element.innerHTML = '';

    data.recenttracks.track.forEach(song => {
      let template = `
    <section class="nowPlaying">
    <a href="#detail/${song.artist['#text']}/${song.name}"> <img src="${
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
  },
  currentUser: data => {
    let tracks;
    if (data.recenttracks) {
      tracks = 'recenttracks';
    } else {
      tracks = 'toptracks';
    }
    console.log(data);
    if (data[tracks]['@attr'].user) {
      render.nav[0].href = `#top?user=${data[tracks]['@attr'].user}`;
      render.nav[1].href = `#recent?user=${data[tracks]['@attr'].user}`;
      render.user.innerHTML = 'Current user: ' + data[tracks]['@attr'].user;
    }
  },
  topTracks: data => {
    render.element.innerHTML = '';

    data.toptracks.track.forEach(song => {
      let template = `
    <section>
    <a href="${song.url}" target="blank"> <img src="${
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
  },
  loading: () => {
    render.element.innerHTML = `
    <div class="spinner">
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>`;
  },
  detailSong: data => {

    console.log(data);
    render.element.innerHTML = '';
     // const check = data.track.album.image[3]
     const check = data.track.album ? data.track.album : null
     console.log(check);

      let template = `
      <section class="detail">
      <img src="${
         check !== null ? data.track.album.image[3]['#text'] : 'public/img/300.png'
      }">
        <div>
          <h2>${data.track.name}</h2>
          <p>${data.track.artist.name}</p>
        </div>
      </section>
        `;
      render.element.innerHTML += template;

  }
};

export default render;
