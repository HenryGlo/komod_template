// MFP Init
$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

$(document).ready(function() {
  $(".dropdown-toggle").dropdown();
});


// Preloader
$( window ).on( "load", function() {
  $('.preloader-container').fadeOut('slow')
})