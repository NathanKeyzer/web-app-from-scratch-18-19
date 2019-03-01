# Webapp from scratch

## My web App

[Application link](https://nathankeyzer.github.io/web-app-from-scratch-18-19/week1/)

![Application](https://github.com/NathanKeyzer/web-app-from-scratch-18-19/blob/master/week1/public/img/application.png?raw=true)

# Table of content

- [Application](application)
- [Actor Diagram](actordiagram)
- [API](whatistheapi)
- [Router](router)

# Application

This is an application that uses the api of [Last.fm](https://www.last.fm/api). With this API you can show songs and artist which listened on Spotify. I chose to work with this api because i listen music everyday. To listen to this music i use Spotify that is connected to my last.fm account. I really like the idea to make my own showcase design of my own music data.

## Actor diagram

![Actor Diagram](https://github.com/NathanKeyzer/web-app-from-scratch-18-19/blob/master/week1/public/img/actordiagram.png?raw=true)

## What is the API

Working with Promise.

```javascript
const api = {
  getData: url => {
    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.onload = () => {
        if (request.status >= 200 && request.status < 400) {
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else {
          reject(error);
        }
      };
      request.onerror = () => {};
      request.send();
    });
  }
};
export default api;
```

## Router

Working with a router, object literals and modules was a really good learning process this made me think about how to structure my code. Especially working with the object literals pattern. So i could build a nice structure for my code.

With this router i can work with two API's, Recenttracks and Toptracks.

```javascript
import render from './render.js';

function router() {
  let route = window.location.hash;
  switch (route.split('/')[2]) {
    case 'top':
      render.loading();
      return {
        link:
          'https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=' +
          route.split('/')[1] +
          '&api_key=YOUR_API_KEY&format=json',
        page: 'top'
      };
      break;
    case 'recent':
      render.loading();
      return {
        link:
          'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' +
          route.split('/')[1] +
          '&api_key=YOUR_API_KEY&format=json&page=1',
        page: 'recent'
      };
      break;
    default:
      render.loading();
      return {
        link:
          'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=YOUR_USERNAME&api_key=YOUR_API_KEY&format=json&page=1',
        page: 'recent'
      };
      break;
  }
}
export default router;
```

## Interaction diagram

![Interaction Diagram](https://github.com/NathanKeyzer/web-app-from-scratch-18-19/blob/master/week1/public/img/interaction.png?raw=true)

## Feature wishlist

- [x] Users can see their recentTracks
- [x] Users can see their topTracks
- [x] Promises
- [x] Object literals
- [x] Router
- [x] Modules
- [ ] Users can see their topAlbums
- [ ] User search via input

[MIT](LICENCE) © [Nathan Keyzer](https://nathankeyzer.nl)
