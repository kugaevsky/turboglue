$(document).ready ->
  if window.location.host == "turbofilm.tv"
    $showTitle = $('.mains').find('a.en').text()
    $showUrl = $showTitle.toLowerCase().replace(' (us)','').
                                        replace('the ','').
                                        replace(' a ','').
                                        replace(' and','').
                                        replace(/[\.\'\:]/g,'').
                                        replace(' & ','_').
                                        replace(/[\s\-]/g,'_')
    $glueLink = $("<span style='padding-left:10px'>
                    <a  class='glue-checkin-widget'
                        href='http://getglue.com/tv_shows/#{$showUrl}'
                        data-type='horizontal'
                        data-message='I\'m watching #{$showTitle} on @turbofilm'>
                      #{$showTitle}
                    </a>
                  </span>")

    $('.mains').append $glueLink

    s = document.createElement('script')
    s.src = '//widgets.getglue.com/checkin.js'

    n = document.getElementsByTagName('script')[0]
    n.parentNode.insertBefore(s,n)
