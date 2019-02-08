# Week 1 - Hello API 🐒

Doel: Data ophalen uit een API en renderen in een overzichtspagina.

# Table of content
* [First week](firstweek)
* [What is the API](what is the api)


# First week
This week assignment was to find a proper API that supports a https connection.

I searched in the library that was given to us: https://www.programmableweb.com/apis/directory I have decided to work with the Last.fm API. With this API i can show the recently songs i listened on spotify.


## Function of the API
My JSON [API](https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nathankeyzer&api_key=558413ce30002869acf1d2e2d9c2047b&format=json&page=1) is showing the recenttracks a user listened to on spotify. The user can find also interesting information about the artist on a detail page.

```javascript
var element = document.querySelector('main')
var request = new XMLHttpRequest();
var apiLink = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nathankeyzer&api_key=558413ce30002869acf1d2e2d9c2047b&format=json&page=1';
```


## Interaction
Soon

## Design
Soon

## What is the API

>With this API i have a limit that is only can show track what i'm listening right know and in the past.

## Feature wishlist
- [x] List of recenttracks
- [x] Now playing
- [ ] Users can see their recentracks.
- [ ] Animation of the now playing Tracks
