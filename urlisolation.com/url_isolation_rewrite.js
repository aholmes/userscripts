// ==UserScript==
// @name         URL Isolation rewrite
// @namespace    URLIsolation
// @version      2024-09-27
// @description  Rewrite urlisolation.com browser URLs
// @author       Aaron Holmes, Nick Wiltsie
// @match        *://urlisolation.com/browser*
// @icon         https://urlisolation.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    function getParameterByName(name, url=window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
        var results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    function htmlDecode(input) {
        var doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
    }

    var encodedUrl = getParameterByName('url');
    if (encodedUrl) {
        try {
            var decodedUrl = htmlDecode(encodedUrl);
            // window.location.assign because who needs urlisolation.com in their history?
            window.location.assign(decodedUrl);
        } catch (e) {
            console.error('Failed to decode URL');
        }
    } else {
        console.error('URL parameter not found');
    }
})();
