// ==UserScript==
// @name         qiita stock list hatena bookmark
// @namespace    https://qiita.com
// @version      1.1.0
// @description  Qiitaのストック一覧にはてブ数を表示します。
// @author       naksho
// @include      /^https:\/\/qiita\.com\/stock/
// @require      https://cdnjs.cloudflare.com/ajax/libs/fetch-jsonp/1.1.3/fetch-jsonp.min.js
// @downloadURL  
// @updateURL    
// @supportURL   
// ==/UserScript==
// 
const hatebapi = "https://b.hatena.ne.jp/entry.count";
const qiitalist = "https://qiita.com";
const hatebentry = "https://b.hatena.ne.jp/entry/";

const stocks = document.querySelectorAll(".u-link-no-underline");

for ( let element of stocks) {
  let params = new URLSearchParams();
  params.set('url', encodeURI(qiitalist + element.getAttribute("href")));
  fetchJsonp(hatebapi + '?' + params.toString())
  .then(function(response) {
    return response.json();
  })
  .then(function(responseText) {
    element.insertAdjacentHTML('afterend',
    " "
    + "<a href='"
    + encodeURI(hatebentry + qiitalist + element.getAttribute("href"))
    + "' "
    + "target='_blank'"
    + ">"
    + "<span style='font-weight:bold; color:#f88; font-size:11px; text-decoration: underline; background-color: #fee;'>"
    + responseText
    + "users</span>"
    + "</a>"
    );
  });
};
