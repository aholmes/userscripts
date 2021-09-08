// ==UserScript==
// @name         Hide Stack Overflow "Hot Network Questions"
// @namespace    Stack Overflow
// @version      0.1
// @description  Hides the "Hot Network Questions" panel on stackoverflow.com
// @author       Aaron Holmes
// @match        *://*stackoverflow.com*/*
// @icon         https://www.google.com/s2/favicons?domain=stackoverflow.com
// @grant        none
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';

    function addGlobalStyle(css) {
        let parent = document.head;
        if (!parent) { parent = document.body; }
        if (!parent) { parent = document.getElementsByTagName('html')[0]; }

        let style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        parent.appendChild(style);
    }

    addGlobalStyle('#hot-network-questions { display: none; }')
})();
