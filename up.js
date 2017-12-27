// ==UserScript==
// @name         up
// @namespace    https://www.TYColin.github.io
// @version      0.1
// @description  douban bot
// @author       Konjac
// @include      /(^https:\/\/www\.douban\.com\/group\/topic\/\d+\/\?start=\d+$)/
// @include      /(^https:\/\/www\.douban\.com\/group\/topic\/\d+\/add_comment#last$)/
// @grant        window.close
// ==/UserScript==

(function() {
    'use strict';
       function random_int (min, max) {
           min = Math.ceil(min);
           max = Math.floor(max);
           return Math.floor(Math.random() * (max - min)) + min;
       }
       var bodyScrollHeight = document.body.scrollHeight;
         window.scroll(0,bodyScrollHeight);

       var words = ['豆', '求豆'];

       var textarea = document.querySelector('textarea[id=last]');

           textarea.innerHTML = words[random_int(0, words.length)];
       var has_captcha = document.getElementById('captcha_image');
    if (has_captcha) {
        setTimeout( function(){
            try{
                var t = document.getElementById('captcha_field');
                t.focus();
                t.select();
            } catch(e){}
        }, 200);
    }else{
        var submit_button = document.querySelector('input[name=submit_btn]');
        submit_button.click();
    }

})();