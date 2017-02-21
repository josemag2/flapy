var bg;
var tubos;
var pajaro;
var salto;
var timer;
var puntos;
var textP;

var Juego = {
    preload: function(){
        juego.load.image('bg', 'img/bg.jpeg' );
        juego.load.spritesheet('pajaros', 'img/pajaro.png', 43, 30);
        juego.load.image('tubo', 'img/tubo.png');
        juego.forceSingleUpdate = true;//suavidad para el juego
    },
    create: function(){
        bg = juego.add.tileSprite(0, 0, 370, 550, 'bg');
        juego.physics.startSystem(Phaser.Physics.ARCADE); //inica fisicar Arcade

              tubos = juego.add.group();
              tubos.enableBody = true;
              tubos.createMultiple(20, 'tubo');

              pajaro = juego.add.sprite(100, 245, 'pajaros');
              pajaro.frame = 1;
              pajaro.anchor.setTo(0, 0.5);
              pajaro.scale.setTo(0.9,0.9);
              pajaro.animations.add('vuelo', [0,1,2], 10, true);
              //Fissicas para el Pajaro
                  juego.physics.arcade.enable(pajaro);
                  pajaro.body.gravity.y= 1200;
                  //para saltar con teclado
              salto = juego.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
              salto.onDown.add(this.saltar, this);
              //Para saltar con raton o tactil
              juego.input.onUp.add(this.saltar, this);

              timer = juego.time.events.loop(1500, this.crearColumna, this);

              puntos = -1;
              textP = juego.add.text(20, 20, "0", {font: "30px Arial", fill: "#FFF"});
    },
    update: function(){
        if(pajaro.inWorld == false){
              this.state.start("Game_Over");
        }else if(pajaro.position.y >460){
              pajaro.alive = false; //Presonaje Muerto
              tubos.forEachAlive(function(t){
                  t.body.velocity.x = 0;
              }, this);

        }else{
          bg.tilePosition.x -=1;
        }
        juego.physics.arcade.overlap(pajaro, tubos, this.tocoTubo, null, this);

        pajaro.animations.play('vuelo');
        if(pajaro.angle <20){
          pajaro.angle += 1;
        }

    },
    saltar: function(){
      pajaro.body.velocity.y = -350;
      juego.add.tween(pajaro).to({angle:-20}, 100).start();
    },
    crearColumna: function(){
     var hueco = Math.floor(Math.random()*5)+1;
        for(var i = 0; i < 8; i++){
         if(i != hueco && i != hueco+1){
                this.crearUnTubo(370, i*55+20);
          }
        }
        puntos +=1;
        textP.text= puntos;
    },
    crearUnTubo: function(x, y){
        var tubo = tubos.getFirstDead();
        // para poner en cola cuando desaparezaca
        tubo.reset(x, y);
        tubo.body.velocity.x = -180;
        tubo.checkWorldBounds = true;
        tubo.outOfBoundsKill = true; // cuando el tubo sale por la pantalla lo elimina
    },
    tocoTubo: function() {


      if(pajaro.alive == false)
        return;
        pajaro.alive = false;
        juego.time.events.remove(timer);
        tubos.forEachAlive(function(t){
            t.body.velocity.x = 0;
       }, this);

    }
};
