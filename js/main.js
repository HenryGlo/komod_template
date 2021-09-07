// Preloader
$( window ).on( "load", function() {
  $('.preloader-container').fadeOut('slow')
})

//JustifiedGallery
$("#mygallery").justifiedGallery({
  lastRow : 'nojustify',
  rowHeight: 150,
  maxRowHeight: 200,
  margins: 15,
  cssAnimation: true,
  randomize: true,
  border: 30
});