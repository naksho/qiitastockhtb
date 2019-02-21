// ==UserScript==
// @name         qiita stock list hatena bookmark
// @namespace    https://qiita.com
// @version      1.0.0
// @description  This script will visually warn you when sending mail to other than the regulated domain in Gmail.
// @author       Sho Nakajima
// @include      /^https:\/\/qiita\.com\/stock/
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @downloadURL  
// @updateURL    
// @supportURL   
// ==/UserScript==
// 
const hatebapi = "https://b.hatena.ne.jp/entry/jsonlite/";
const qiitalist = "https://qiita.com";

const stocks = document.querySelectorAll(".u-link-no-underline");

for ( let element of stocks) {
  $.ajax({
    url : hatebapi,
    data : {url : encodeURI(qiitalist + element.getAttribute("href"))},
    dataType : "jsonp",
    success : function(data) {
      $(element).parent().append(
        " "
        + "<a href='"
        + data.entry_url
        + "' "
        + "target='_blank'"
        + ">"
        + "<span style='font-weight:bold; color:#f88; font-size:11px;'>"
        + data.count
        + "users</span>"
        + "</a>"
      );
    }
  });
};
