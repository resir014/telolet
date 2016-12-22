/* jshint esversion:5, browser:true, asi:true */
;(function () {
  'use strict'

  // keep a global reference of our current Jekyll baseurl here.
  var baseurl = '/telolet'

  // drop yo telolets here
  var audioFiles = [
    '/public/audio/telolet1.ogg',
    '/public/audio/telolet2.ogg',
    '/public/audio/telolet3.ogg',
    '/public/audio/telolet4.ogg',
    '/public/audio/telolet5.ogg',
    '/public/audio/telolet6.ogg',
    '/public/audio/telolet7.ogg',
    '/public/audio/telolet8.ogg',
    '/public/audio/telolet9.ogg',
    '/public/audio/telolet10.ogg',
    '/public/audio/telolet11.ogg',
    '/public/audio/telolet12.ogg',
    '/public/audio/telolet13.ogg',
    '/public/audio/telolet14.ogg',
    '/public/audio/telolet15.ogg',
    '/public/audio/telolet16.ogg',
    '/public/audio/telolet17.ogg',
    '/public/audio/telolet18.ogg',
    '/public/audio/telolet19.ogg',
    '/public/audio/telolet20.ogg',
  ]

  // we're gonna use this to keep an array of preloaded audio
  var loaded = []

  function preloadAudio (url) {
    var audio = new Audio()

    // once this file loads, it will call loadedAudio()
    // the file will be kept by the browser as cache
    audio.addEventListener('canplaythrough', loadedAudio(url), false)
    audio.src = url
  }


  function loadedAudio (url) {
    console.log('dbg: pushing audio file ' + url)
    loaded.push(url)
  }

  function init () {
    var button = document.getElementById('telolet')
    var buttonLocked = false

    button.addEventListener('click', function () {
      if (buttonLocked) return false

      buttonLocked = true

      var audio = document.getElementById('telolet-audio')
      audio.src = randomize(loaded)
      audio.play()

      audio.addEventListener('ended', function () {
        buttonLocked = false
      })
    })
  }

  function randomize (array) {
    return array[Math.floor(Math.random() * array.length)]
  }

  // preload audio
  for (var i in audioFiles) {
    if (baseurl) {
      preloadAudio(baseurl + audioFiles[i])
    } else {
      preloadAudio(audioFiles[i])
    }
  }

  window.onload = function () {
    // remove splash screen
    document.getElementById('loading-mask').style.display = 'none'

    // check if audio is properly preloaded
    if (loaded.length !== 0) {
      console.log('dbg: ' + loaded.length + ' audio preloaded.')
      init()
    } else {
      alert('Failed preloading audio. Please refresh.')
    }
  }

  // alert('om telolet om')
})()
