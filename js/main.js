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

//JustifiedGallery
$("#mygallery").justifiedGallery({
  lastRow : 'nojustify',
  margins : 3,
  rowHeight:160
});