/ ==UserScript==
// @name         Upgrade Level Hide
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Allo (2316070)
// @match        https://www.torn.com/index.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
   var upgradeBox = document.getElementById('body').getAttribute("data-country");;
   if (upgradeBox == "torn") {
        $(".info-msg.border-round").hide();
        $(".page-head-delimiter.m-top10.m-bottom10").hide();
    }
})();
