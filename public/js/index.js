/* jshint esversion:5, browser:true, asi:true */
;(function () {
  'use strict'

  // splash screen
  window.onload = function () {
    document.getElementById('loading-mask').style.display = 'none';
  }

  var button = document.getElementById('telolet')
  var audioArray = document.querySelectorAll('#telolet-audio')
  var buttonLocked = false;

  button.addEventListener('click', function () {
    if (buttonLocked) return false

    buttonLocked = true;

    var audio = randomize(audioArray)
    audio.play()

    audio.addEventListener('ended', function () {
      buttonLocked = false;
    })
  })

  function randomize (array) {
    return array[~~(Math.random() * array.length)]
  }

  // alert('om telolet om')
})()
