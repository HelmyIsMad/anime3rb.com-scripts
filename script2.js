// ==UserScript==
// @name         Block Fullscreen Exit & Modal (anime3rb.com)
// @version      1.0
// @description  Prevents the site from forcing fullscreen exit every 3 minutes when using an add blocker
// @author       HelmyIsMad
// @match        https://anime3rb.com/*
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  // Lock down exitFullscreen so the site can't call or override it
  Object.defineProperty(Document.prototype, 'exitFullscreen', {
    value: function () {
      console.log('[VM] Blocked forced exitFullscreen()');
      // no-op
    },
    writable: false,
    configurable: false
  });
})();
