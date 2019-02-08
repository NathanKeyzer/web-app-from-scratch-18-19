'use strict'
var element = document.querySelector('main')
var request = new XMLHttpRequest();
var apiLink = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nathankeyzer&api_key=558413ce30002869acf1d2e2d9c2047b&format=json&page=1';


request.open('GET', apiLink , true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  localStorage.setItem('data', JSON.stringify(data))
  data.recenttracks.track.forEach(song =>{
    // console.log(song.name);
var template =`
  <section>
  <a href="${song.url}" target="blank"> <img src="${song.image[2]['#text']}"></a>
    <div>
      <h2>${song.name}</h2>
      <p>${song.artist['#text']}</p>
      <p>${song.date ? song.date['#text'] : 'Now Playing'}</p>
    </div>
  </section
    `;
    element.innerHTML += template;
  });
  }

// Send request
request.send();
// <h3>${recenttracks['@attr'].user}</h3> om de current user te tonen
// element.innerHTML += song.name + song.artist['#text'];
