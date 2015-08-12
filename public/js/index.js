$(function(){
  var handler = function() {
    alert( "The quick brown fox jumps over the lazy dog." );
  };
  $( "#boton" ).bind( "click", handler );
  //$( "#boton" ).unbind( "click", handler );
});
