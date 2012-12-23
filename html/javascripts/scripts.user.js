// ==UserScript==
// @name Turboglue
// @description Add GetGlue check-ins to Turbofilm online tv shows.
// @author nick@kugaevsky.ru
// @license MIT
// @version 1.2.0
// @include http://turbofilm.tv/Watch/*
// @match http://turbofilm.tv/Watch/*
// ==/UserScript==;

(function() {
  $(document).ready(function() {
    var $glueLink, $showTitle, $showUrl, n, s;
    if (window.location.host === "turbofilm.tv") {
      $showTitle = $('.mains').find('a.en').text();
      $showUrl = $showTitle.toLowerCase().replace(' (us)', '').replace(' m.d.', '').replace('the ', '').replace(' a ', '').replace(' and', '_').replace(/[\.\'\:]/g, '').replace(' & ', '_').replace(/[\s\-]/g, '_');
      $glueLink = $("<span style='position: absolute;left: 37px;top: 145px;'>                    <a  class='glue-checkin-widget'                        href='http://getglue.com/tv_shows/" + $showUrl + "'                        data-type='horizontal'                        data-message='I\'m watching " + $showTitle + " on @turbofilm'>                      " + $showTitle + "                    </a>                  </span>");
      $('.mains').append($glueLink);
      s = document.createElement('script');
      s.src = '//widgets.getglue.com/checkin.js';
      n = document.getElementsByTagName('script')[0];
      return n.parentNode.insertBefore(s, n);
    }
  });

}).call(this);
