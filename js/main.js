// Preloader
$( window ).on( "load", function() {
  $('.preloader-container').fadeOut('slow')
})

//JustifiedGallery

var w = $(window).width();
var rowH = 250
if( w < 1000 ) {
  rowH = 100;
}

$("#mygallery").justifiedGallery({
  lastRow : 'nojustify',
  rowHeight: rowH,
  maxRowHeight: 1000,
  margins: 15,
  cssAnimation: true,
  randomize: true,
  border: 30
});


// Magnific PopUp
$('#mygallery').each(function() { // the containers for all your galleries
  $(this).magnificPopup({
      delegate: 'a', // the selector for gallery item
      type: 'image',
      gallery: {
        enabled:true
      }
  });
});