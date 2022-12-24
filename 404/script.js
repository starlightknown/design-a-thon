var $tv = $('.tv')
  ,$screen = $('.screen-content')
  ,$btn = $('.js-shtd-btn')
  ,videoHtml = '<iframe src="video.mp4" width="640" height="360" frameborder="0"></iframe>';

$btn.on('click', function(){
  if ($tv.hasClass('_off')) {
    $tv.removeClass('_off');
    $screen.html(videoHtml)
  } else {
    $tv.addClass('_off');
    $screen.empty();
  }
})