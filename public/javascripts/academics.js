$('.navTrigger').click(function () {
    $(this).toggleClass('click');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});