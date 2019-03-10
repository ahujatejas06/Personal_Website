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
    
});
