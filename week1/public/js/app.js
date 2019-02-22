(()=> {
'use strict'
// Start Promise
const url = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nathankeyzer&api_key=558413ce30002869acf1d2e2d9c2047b&format=json&page=1';
const topTracks ='https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=nathankeyzer&api_key=558413ce30002869acf1d2e2d9c2047b&format=json';
const apiUrlnummer2 = ''//api nummer 2 kan worden toegevoegd
const element = document.querySelector('main')
const user = document.querySelector('h1')

const api = {
  getData: (url) => {
      return new Promise(function(resolve, reject){
          const request = new XMLHttpRequest();
          request.open('GET', url, true)
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
  parseData: () => {

    }

}

const render = {
  songList: data => {
    console.log("render.songList gebruikt: " + data);
    data.recenttracks.track.forEach(song =>{
    let template =`
      <section>
      <a href="${song.url}" target="blank"> <img src="${song.image[3]['#text'] ? song.image[3]['#text'] : 'public/img/300.png'}"></a>
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
  currentUser: (data)=>{
    user.innerHTML += data.recenttracks['@attr'].user
    console.log(data.recenttracks['@attr'].user);
  },
  singleSong: data => {

  }
  }

//begin van routie

api.getData(url).then((data) => {
  render.songList(data)
  render.currentUser(data)
})

// api.getData(url).then((data) => {
//   render.singleSong(data.song[0])
// })


})()
