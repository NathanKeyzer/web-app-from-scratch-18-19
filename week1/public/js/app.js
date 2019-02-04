var element = document.querySelector('main')
var request = new XMLHttpRequest();
var apiLink = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nathankeyzer&api_key=558413ce30002869acf1d2e2d9c2047b&format=json&page=1';


request.open('GET', apiLink , true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
  data.recenttracks.track.forEach(song =>{
    // console.log(song.name);
var template =`
  <section>
  <a href="${song.url}"> <img src="${song.image[1]['#text']}"></a>
  <h2>${song.name}</h2>
  <p>${song.artist['#text']}</p>

  </section
    `;
    element.innerHTML += template;
  });
  }

// Send request
request.send();

// element.innerHTML += song.name + song.artist['#text'];
