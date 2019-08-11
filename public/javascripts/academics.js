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
  // setWidth();
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
// function setWidth () {
//   let number = $('div.layout').data('number');
//   let width = $(document).width();
//   let row;
//   if (width >= 900 && width <=1499)
//   {
//     row = 2;
//   }
//   else if (width >= 1500 && width <=1999)
//   {
//     row = 3;
//   }
//   else if (width >= 2000 && width <=2299)
//   {
//     row = 4;
//   }
//   else if (width >= 2300)
//   {
//     row = 5;
//   }
//   else {
//     row = 1;
//   }
//   if (number % row != 0)
//   {
//     ratio = number%row;
//     for (let i = 0; i < ratio; ++i)
//     {
//       $('div.block::nth-child(' +row-i+'i').css("height", "10px");


//     }
//   }
// }
