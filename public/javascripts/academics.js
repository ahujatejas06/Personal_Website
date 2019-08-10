$('.navTrigger').click(function () {
    $(this).toggleClass('click');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    
    if($("#mainListDiv").hasClass("show_list")) {
        $("body").addClass("lock-position");
        $("#mainListDiv").fadeIn();
      } else {
        $("body").removeClass("lock-position");
        $("#mainListDiv").fadeOut();
      }
    let height = $('.main').height() - $('.nav').height() - 35;
    if($(document).scrollTop() <= height) {
      if($("#mainListDiv").hasClass("show_list")) {
        $('.nav').addClass('affix');
      } else {
        $('.nav').removeClass('affix');
      }
    } 
});
$(document).ready(function(){
  setPercent();
  });
$(window).scroll(function() {
            let height = $('.main').height() - $('.nav').height() - 35;
                if ($(document).scrollTop() > height) {
                    $('.nav').addClass('affix');
                } else {
                    $('.nav').removeClass('affix');
                  }
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
function setPercent () {
  $('div.background').each(function() {
      let color = $(this).data('color');
      $(this).css('background',color);
  });
}
