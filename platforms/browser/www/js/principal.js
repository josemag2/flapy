alto  = document.documentElement.clientHeight;
ancho = document.documentElement.clientWidth;

var juego= new Phaser.Game(370, 550, Phaser.CANVAS, 'bloque_juego');//Comienzo del juego
  //estados del Juego
juego.state.add('Menu', Menu);
juego.state.add('Juego', Juego);
juego.state.add('Game_Over', Game_Over);



  juego.state.start('Menu');
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
}, false);
  }
