// ==UserScript==
// @name        shift + n shortcut for anime3rb.com
// @namespace   Violentmonkey Scripts
// @match       https://videos.vid3rb.com/player/*
// @grant       none
// @version     1.0
// @author      HelmyIsMad
// @description press shift + n to go to next video and press ] or [ to skip 90 seconds forwart or back in order
// ==/UserScript==

(function waitForButton() {
    const btn = document.querySelector("button.vjs-control.vjs-button.play-next-button");
    if (btn) {
        document.addEventListener('keydown', function(e) {
            if (e.shiftKey && e.key.toLowerCase() === 'n') {
                btn.click();
            }
        });
        console.log("🎉 Next Episode Shortcut is ready! Press Shift + N");
    } else {
      console.log("Trying again");
        setTimeout(waitForButton, 500); // Try again in 0.5 seconds
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === ']') {
          const video = document.querySelector('video');
          if (video) video.currentTime += 90;
      }
      else if (e.key === '[') {
          const video = document.querySelector('video');
          if (video) video.currentTime -= 90;
      }
     });

})();
