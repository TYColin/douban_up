// ==UserScript==
// @name         trigger
// @namespace    https://www.TYColin.github.io
// @version      0.1
// @description  douban bot
// @author       Konjac
// @match        https://www.douban.com/people/*****/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // function random_int (min, max) {
    // min = Math.ceil(min);
    // max = Math.floor(max);
    // return Math.floor(Math.random() * (max - min)) + min;
    // }

        var urls = [
"https://www.douban.com/group/topic/******/",
"https://www.douban.com/group/topic/******/",
"https://www.douban.com/group/topic/******/"
];
    	for (var i =0; i < urls.length; i++) {
        	(function(num){
        		var timer = setTimeout(function(){
					window.open(urls[num]);
        		},10*1000*(i+1));

        	})(i);
        }
	// function refresh(){
	// 	window.location.reload();
	// }
})();