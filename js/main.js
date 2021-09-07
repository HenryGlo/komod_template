// Preloader
$( window ).on( "load", function() {
  $('.preloader-container').fadeOut('slow')
})

//JustifiedGallery

var w = $(window).width();
var rowH = 220
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