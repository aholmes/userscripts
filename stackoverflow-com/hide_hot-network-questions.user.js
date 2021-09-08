// ==UserScript==
// @name         Hide Stack Overflow "Hot Network Questions"
// @namespace    Stack Overflow
// @version      0.2
// @description  Hides the "Hot Network Questions" panel on stackoverflow.com
// @author       Aaron Holmes
// @match        *://*stackoverflow.com*/*
// @icon         https://www.google.com/s2/favicons?domain=stackoverflow.com
// @grant        none
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';

    let style;
    (function createGlobalStyle() {
        let parent = document.head;
        if (!parent) { parent = document.body; }
        if (!parent) { parent = document.getElementsByTagName('html')[0]; }

        style = document.createElement('style');
        style.type = 'text/css';
        parent.appendChild(style);
    })();

    function addGlobalStyle(css) {
        style.innerHTML += css;
    }

    addGlobalStyle('#hot-network-questions { display: none; }')
})();
