// ==UserScript==
// @name        Pervent disablescrolling()
// @namespace   Violentmonkey Scripts
// @match       https://anime3rb.com/*
// @grant       none
// @version     1.0
// @author      -
// @description pervents the site from locking the scroll function when showing their anti-ad-blocker banner
// ==/UserScript==


(function () {
  'use strict';

  setInterval(function () {
    let overflow = document.documentElement.style.overflow;
    let paddingRight = document.documentElement.style.paddingRight;
    let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (overflow == "hidden") {
      document.documentElement.style.overflow = "";
    }
    if (paddingRight != "") {
      document.documentElement.style.paddingRight = "";
    }
  }, 10)
})()
