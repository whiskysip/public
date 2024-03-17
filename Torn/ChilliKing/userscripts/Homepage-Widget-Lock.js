// ==UserScript==
// @name         Homepage Widget Lock
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Prevents the widgets so they can't be moved by accident by removing the move button
// @author       ChilliKing
// @match        https://www.torn.com/index.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Set this variable to true to enable the removal of accordion-header-move elements
    var removeAccordions = true;

    window.addEventListener('load', function() {
        if (removeAccordions) {
            var elements = document.querySelectorAll('.accordion-header-move');
            elements.forEach(function(element) {
                element.parentNode.removeChild(element);
            });
        }
    });
})();
