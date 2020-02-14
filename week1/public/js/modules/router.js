import render from './render.js';
import routie from './routie.js';



//
// function router() {
//   let route = window.location.hash;
//   switch (route.split('/')[2]) {
//     case 'top':
//       render.loading();
//       return {
//         link:
//           'https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=' +
//           route.split('/')[1] +
//           '&api_key=558413ce30002869acf1d2e2d9c2047b&format=json',
//         page: 'top'
//       };
//       break;
//     case 'recent':
//       render.loading();
//       return {
//         link:
//           'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' +
//           route.split('/')[1] +
//           '&api_key=558413ce30002869acf1d2e2d9c2047b&format=json&page=1',
//         page: 'recent'
//       };
//       break;
//     default:
//       render.loading();
//       return {
//         link:
//           'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nathankeyzer&api_key=558413ce30002869acf1d2e2d9c2047b&format=json&page=1',
//         page: 'recent'
//       };
//       break;
//       case 'detail':
//         render.loading();
//         return {
//           link:
//           'http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=558413ce30002869acf1d2e2d9c2047b&artist=drake&track=over&format=json',
//           page: 'detail'
//         };
//   }
// }

export default routie;
