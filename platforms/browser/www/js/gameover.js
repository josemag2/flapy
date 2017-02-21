var Game_Over = {

  preload: function(){

      juego.stage.backgroundColor = '#69E6E4';
      juego.load.image('boton', 'img/btn.png');
  },
  create: function(){
     var boton = this.add.button(juego.width/2,
      juego.height/2, 'boton', this.iniciarJuego, this);
      boton.anchor.setTo(0.5);//para posicionar el boton en el centro

      var txtPuntosEtiqueta = juego.add.text(juego.width/2 -50,
      juego.height/2 -85, "Puntos: ", {font: "bold 24px sans-serif", fill:"black", align:"center"});
      txtPuntosEtiqueta.anchor.setTo(0.5);
      if(puntos == -1){
        puntos = 0;
      }

      var txtPuntosNumero = juego.add.text(juego.width/2 +50,
      juego.height/2 -85, puntos.toString(), {font: "bold 30px sans-serif", fill:"black", align:"center"});
      txtPuntosNumero.anchor.setTo(0.5);

      var txtFin = juego.add.text(juego.width/2 ,
      juego.height/2 -125, "Juego Terminado", {font: "bold 30px sans-serif", fill:"black", align:"center"});
      txtFin.anchor.setTo(0.5);
  },
  iniciarJuego: function(){
    this.state.start("Juego");
  }
};
