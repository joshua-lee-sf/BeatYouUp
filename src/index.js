import { drawSelector} from './scripts/canvas';
import {fetchJamendoSound, fetchYoutubeSound, fetchFreeSound} from './scripts/audio';

let audioAPISelector = document.getElementById('music-api-selector')
let generateRandomSound = document.getElementById('random-api-sound-generator')
let audioElement = document.getElementById('audio-element')
audioElement.volume = 0;
let visualizerShape = document.getElementById('shape-selector')




//bring into index.js
audioAPISelector.addEventListener('input', function(){
  if (audioAPISelector.value === 'jamendoAPI') { 
    generateRandomSound.addEventListener('click', fetchJamendoSound);
  } else if (audioAPISelector.value === 'youtube-audio-library') {
    generateRandomSound.addEventListener('click', fetchYoutubeSound)
  } else {
    generateRandomSound.addEventListener('click', fetchFreeSound)
  }
})


// visualizerShape.addEventListener('input', function(){
//   if (visualizerShape.value === 'rectangle') {
//     audioElement.addEventListener('play', visualizer(rectangularDrawer));
//   } else {
//     audioElement.addEventListener('play', visualizer(circularDrawer));
//   }
// })


audioElement.addEventListener('play', drawSelector);