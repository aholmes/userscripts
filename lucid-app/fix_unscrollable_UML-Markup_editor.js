// ==UserScript==
// @name         Fix Lucidchart unscrollable UML Markup editor
// @namespace    Lucid App
// @version      0.1
// @description  Fixes the UML Markup editor in lucid.app; it does not scroll when content extends beyond (roughly) the height of the window
// @author       Aaron Holmes
// @match        *://*lucid.app*/*
// @icon         https://www.google.com/s2/favicons?domain=lucid.app
// @grant        none
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

    // Textarea expansion solution from here https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas/

    let textareaContainerRule = `
    lucid-scrollable #scroll-content .body {
        overflow: auto;
        display: grid;
        grid-area: 1 / 1 / 2 / 2;
    }`;

    let textareaContainerAfterRule = `
    lucid-scrollable #scroll-content .body::after {
        content: attr(data-replicated-value) " "
    }`;

    let textareaRule = `
    lucid-scrollable #scroll-content .body textarea {
        height: auto;
        min-height: 100%;
        grid-area: 1 / 1 / 2 / 2;
    }`;

    addGlobalStyle(textareaContainerRule);
    addGlobalStyle(textareaContainerAfterRule);
    addGlobalStyle(textareaRule);
})();
