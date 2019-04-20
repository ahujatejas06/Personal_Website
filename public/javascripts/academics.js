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
    let height = $('.coverbg').height() - $('.nav').height() - 35;
    if($(document).scrollTop() <= height) {
      if($("#mainListDiv").hasClass("show_list")) {
        $('.nav').addClass('affix');
      } else {
        $('.nav').removeClass('affix');
      }
    } 
});