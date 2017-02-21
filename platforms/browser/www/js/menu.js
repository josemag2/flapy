var Menu = {

    preload: function(){

        juego.stage.backgroundColor = '#69E6E4';
        juego.load.image('boton', 'img/btn.png');
    },
    create: function(){
       var boton = this.add.button(juego.width/2,
        juego.height/2, 'boton', this.iniciarJuego, this);
        boton.anchor.setTo(0.5);//para posicionar el boton en el centro

        var txtInicial = juego.add.text(juego.width/2,
        juego.height/2 -85, "Iniciar Juego", {font: "bold 24px sans-serif", fill:"black", align:"center"});
        txtInicial.anchor.setTo(0.5);
        var txtTitulo = juego.add.text(juego.width/2,
        juego.height/2 -125, "Flappy", {font: "bold 30px sans-serif", fill:"black", align:"center"});
        txtTitulo.anchor.setTo(0.5);
    },
    iniciarJuego: function(){
      this.state.start("Juego");
    }
};
