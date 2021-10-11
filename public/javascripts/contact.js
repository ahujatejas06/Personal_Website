$(document).ready(function () {
  if ($(this).width() < 800) {
    $(".grid").css("display","block")
    $(".grid").css("margin-top", "50px")
    $(".grid > .text > h1,.handles > h1").css("font-size", "35px")
  }
});
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
function send_data()
{
  console.log("button pressed")
  const email = $("#email").val().trim();
  const first_name = $("#first_name").val().trim();
  const last_name = $("#last_name").val().trim();
  const subject = $("#subject").val().trim();
  const message = $("#text").val().trim();
  const data = {first_name,last_name,subject,email,message};
  $.post("/message_send", data,"");
}
