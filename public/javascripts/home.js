$('.navTrigger').click(function () {
    $(this).toggleClass('click');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$(document).ready(function(){

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
  $('#toggle').on('click', function(){
    $('.bar').toggleClass('toggle-open');
    $('.overlay').toggleClass('overlay-active');
    $('.close').addClass('close-active');
  });
  
  $('.overlay-menu-exit').on('click', function(){
    $('.overlay').toggleClass('overlay-active');
    $('.bar').toggleClass('toggle-open');
    $('.close').removeClass('close-active');
  });
  setPercent();
});
 $(".navlinks").on({
                    mouseenter: function () {
                      $('.active').addClass('unactive');
                      $('.active').removeClass('active');
                    },
                    mouseleave: function () {
                      $('.unactive').addClass('active');
                      $('.unactive').removeClass('unactive');
                    }
                });

            $('#button').click(function() {

            });
              $(window).scroll(function() {
                let fade = 1-$(document).scrollTop()*2/$('.main').height();
                let height = $('.main').height() - $('.nav').height() - 35;
                if ($(document).scrollTop() > height) {
                    $('.nav').addClass('affix');
                } else {
                    $('.nav').removeClass('affix');
                  }
                $('.main-header').css('opacity', fade);
                $('.main-social-ul').css('opacity', fade);
                
                        });
function setPercent () {
  if($('.human-languages').width() < 350) {
      let widthhuman = $(".human-languages").width();
      $(".computer-languages").css("width", widthhuman);
    }
  $('.kuchhbhi').each(function() {
      let value = $(this).data('setpercent');
      let color = $(this).data('color');
      $(this).css('width',value);
      $(this).css('background',color);
  });
}
