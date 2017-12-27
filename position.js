// ==UserScript==
// @name         position
// @namespace    https://www.TYColin.github.io
// @version      0.1
// @description  douban bot
// @author       Konjac
// @include      /(^https:\/\/www\.douban\.com\/group\/topic\/\d+\/$)/
// @require      http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.8.0.js
// @grant        window.close
// ==/UserScript==

(function() {
    'use strict';
$(document).ready(function(){
   var href = $("div.paginator>a:last").attr("href");
   window.location.href = href;
});
})();