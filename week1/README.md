# Week 1 - Hello API 🐒

Doel: Data ophalen uit een API en renderen in een overzichtspagina.

[Opdrachten](https://drive.google.com/open?id=1OVhWQNaCgSluYviTKKWcApkyPd23xow1PiExb8GYANM)

[Slides](https://drive.google.com/open?id=1Rjl9xqXoKniQSRJPdkU1O5YwWC33SJK8KiV0a-H_xZU)

## My web App

- linkToLiveDemo ? review(assignment) : assignGrade(1);
- Wat doet jou app, wat is het doel? (passing butter)
- Welke actoren zitten er in jouw applicatie? (actor diagram)
- Welke API wordt gebruikt en wat zijn de beperkingen? (rate limit)
- Hoe flowed interactie door de applicatie? (interaction diagram)
- Welke design patterns en best practices
- Wat zou je nog willen toevoegen (feature wishlist / backlog)

# Table of content

- [First week](firstweek)
- [What is the API](whatistheapi)

# First week

This week assignment was to find a proper API that supports a https connection.

I searched in the library that was given to us: https://www.programmableweb.com/apis/directory I have decided to work with the Last.fm API. With this API i am able to show recent tracks i listened to on spotify.

## Function of the API

My JSON [API](https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nathankeyzer&api_key=558413ce30002869acf1d2e2d9c2047b&format=json&page=1) is showing the recentracks a user listened to on spotify. The user can find also interesting information about the artist via a link.

```javascript
var element = document.querySelector('main');
var request = new XMLHttpRequest();
var apiLink =
  'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nathankeyzer&api_key=558413ce30002869acf1d2e2d9c2047b&format=json&page=1';
```

## Actor diagram

wat zit er allemaalin mijn app

## interaction diagram

welke route legt mijn app af

## Interaction

## Design

## What is the API

hier omschrijf ik wat de app doet

> With this API i have a limit that is only can show track what i'm listening right know and in the past.

## Feature wishlist

- [ ] Users can see their recentracks.

```

```
