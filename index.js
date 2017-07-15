$(document).ready(function( ){
  $('li').css('background-color' ,'white').filter(':even').css('background-color' ,'green');

  $('img').hide().delay(1200).fadeIn(800);
});

//Dont excecute till the DOM is ready
$(function(){
  $( "#li" ).click(function() {
    // alert( "Handler for .click() called." );
    // //this is a keyword reference back to the object
    // $(this).css("background-color", "red").html("click");

    $(this).toggleClass('red-Background');
  });
})
