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
$(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('.nav').addClass('affix');
                //console.log("Navbar black ho gya. YAY!!!!!!");
            } else {
                $('.nav').removeClass('affix');
            }
        });
        $(document).on('ready', function() {

     $(".center").slick({

     dots: true,
     infinite: true,
     centerMode: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     arrows: false,
     verticalSwiping:false,
     autoplay:true,
     autoplaySpeed:4000,
     focusOnSelect:true,
     pauseOnHover:true,

     responsive: [{

     breakpoint: 1024,
     settings: {
          slidesToShow: 2,
          infinite: true
     }

}, {

     breakpoint: 600,
     settings: {
          slidesToShow: 1,
          dots: true
     }

}, {

     breakpoint: 300,
     settings: "unslick" //destroy slick

}]

});

});
