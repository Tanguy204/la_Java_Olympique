var
 plateforme_mobile;
var
 tween_mouvement;
var
 levier;
var
 flamme;
var
 clavier;
var
 player;
var
 groupeTouriste ;
var
 vitesseTouriste;
var
 time1 ;
var
 groupeBullets;
export
default
class niveau3
extends Phaser.Scene {


 
constructor() {


   
super({


      key:
"niveau3"


    });


  }


 


  preload() {
   
this.load.image("img_plateforme",
"src/assets/platform.png");


   
this.load.spritesheet("persoSimple",
"src/assets/persoSimple.png", {
      frameWidth:
40,
      frameHeight:
40
    });
   
this.load.spritesheet("persoBazooka",
"src/assets/persoBazooka.png", {
      frameWidth:
40,
      frameHeight:
40
    });
   
this.load.spritesheet("persoTir",
"src/assets/persoBazookaTir.png", {
      frameWidth:
40,
      frameHeight:
40
    });
   
this.load.spritesheet("persoDos",
"src/assets/persoDos.png", {
      frameWidth:
40,
      frameHeight:
40
    });
   
 
   
this.load.image("baguette",
"src/assets/baguette.png");
   
this.load.image("phaser_n3",
"src/assets/img map 3.png");


   
this.load.tilemapTiledJSON("carte3",
"src/assets/map 3.tmj");


   
   
this.load.image("img_plateforme_mobile",
"src/assets/plateforme.png");
 
   
this.load.image("flamme",
"src/assets/flamme.png");
 
 


   
this.load.image("img_porte3",
"src/assets/door3.png");
   
this.load.image("img_levier",
"src/assets/levier.png");


   
this.load.spritesheet("touristeG",
"src/assets/touristeG.png", {
      frameWidth:
35,
      frameHeight:
37
    });
   
this.load.spritesheet("touristeD",
"src/assets/touristeD.png", {
      frameWidth:
34,
      frameHeight:
37
    });


  }


 


  create() {


   
 


   
const carteDuNiveau3 =
this.add.tilemap("carte3");


   


   
const ts2 = carteDuNiveau3.addTilesetImage("jeux de tuiles","phaser_n3");


 


   
const fond2 = carteDuNiveau3.createLayer("fond2",
 [ts2]);


   
const solide = carteDuNiveau3.createLayer("solide",
 [ts2]);


    solide.setCollisionByProperty({ estSolide:
true });


    plateforme_mobile =
this.physics.add.sprite(
     
730,
     
1725,
     
"img_plateforme_mobile"
    );
 
   
 
    plateforme_mobile.body.allowGravity =
false;
    plateforme_mobile.body.immovable =
true;




    tween_mouvement =
this.tweens.add({
      targets: [plateforme_mobile],  
      //on applique le tween sur 
      platefprme_mobilepaused:true,
// de base le tween est en pause
      ease:"Linear",  
      //concerne la vitesse de mouvement : linéaire ici 
      duration:2000,  
      //durée de l'animation pour monter 
      yoyo:true,  
// mode yoyo : une fois terminé on "rembobine" le déplacement
 
      y:"-=300",  
// on va déplacer la plateforme de 300 pixel vers le haut par rapport a sa position
      delay:0,    
// délai avant le début du tween une fois ce dernier activé
      hold:
1000,  
// délai avant le yoyo : temps qeu al plate-forme reste en haut
      repeatDelay:
1000,
// deléi avant la répétition : temps que la plate-forme reste en bas
      repeat: -1
// répétition infinie
 
    });
    flamme =
this.physics.add.staticSprite(1850,150,"flamme");
   
 




    levier =
this.physics.add.staticSprite(1070,
1930,
"img_levier");
    levier.active =
false;
 


    player =
this.physics.add.sprite(1850,
150,
"img_perso").setDepth(2);
    player.direction =
'left';
    player.setSize(30,35);


    player.refreshBody();


    player.setBounce(0.2);


    player.setCollideWorldBounds(true);


    clavier =
this.input.keyboard.createCursorKeys();
   
this.boutonFeu =
this.input.keyboard.addKey('A');
 


   
this.physics.add.collider(player, solide);
   
this.physics.add.collider(player, plateforme_mobile);
   
 


   
this.cameras.main.startFollow(player);


   
// redimentionnement du monde avec les dimensions calculées via tiled


   
this.physics.world.setBounds(0,
0,
2000,
2000);


   
//  ajout du champs de la caméra de taille identique à celle du monde


   
this.cameras.main.setBounds(0,
0,
2000,
2000);


 


 


   
// Uncomment the following lines to enable the door


   
this.porte_retour =
this.physics.add.staticSprite(100,
450,
"img_porte2");


   
// this.physics.add.collider(player, this.porte_retour);
   
this.anims.create({
      key:
"animTouristeG",
// key est le nom de l'animation : doit etre unique poru la scene.
      frames:
this.anims.generateFrameNumbers("touristeG",
 {
        start:
0,
        end:
3
      }),
// on prend toutes les frames de img perso numerotées de 0 à 3
      frameRate:
10,
// vitesse de défilement des frames
      repeat: -1
// nombre de répétitions de l'animation. -1 = infini
    });
   
this.anims.create({
      key:
"animTouristeD",
// key est le nom de l'animation : doit etre unique poru la scene.
      frames:
this.anims.generateFrameNumbers("touristeD",
 {
        start:
0,
        end:
3
      }),
// on prend toutes les frames de img perso numerotées de 0 à 3
      frameRate:
10,
// vitesse de défilement des frames
      repeat: -1
// nombre de répétitions de l'animation. -1 = infini
    });
   
this.anims.create({
      key:
"animBazookaG",
// key est le nom de l'animation : doit etre unique poru la scene.
      frames:
this.anims.generateFrameNumbers("persoBazooka",
 {
        start:
0,
        end:
2
      }),
// on prend toutes les frames de img perso numerotées de 0 à 3
      frameRate:
10,
// vitesse de défilement des frames
      repeat: -1
// nombre de répétitions de l'animation. -1 = infini
    });


   
this.anims.create({
      key:
"animBazookaD",
// key est le nom de l'animation : doit etre unique poru la scene.
      frames:
this.anims.generateFrameNumbers("persoBazooka",
 {
        start:
4,
        end:
6
      }),
// on prend toutes les frames de img perso numerotées de 0 à 3
      frameRate:
10,
// vitesse de défilement des frames
      repeat: -1
// nombre de répétitions de l'animation. -1 = infini
    });
   
this.anims.create({
      key:
"animBazookaFace",
      frames: [{ key:
"persoBazooka", frame:
3}],
      frameRate:
20
    });
   
this.anims.create({
      key:
"animTirD",
// key est le nom de l'animation : doit etre unique poru la scene.
      frames:
this.anims.generateFrameNumbers("persoTir",
 {
        start:
2,
        end:
3
      }),
// on prend toutes les frames de img perso numerotées de 0 à 3
      frameRate:
10,
// vitesse de défilement des frames
      repeat:
15
// nombre de répétitions de l'animation. -1 = infini
    });
   
this.anims.create({
      key:
"animTirG",
// key est le nom de l'animation : doit etre unique poru la scene.
      frames:
this.anims.generateFrameNumbers("persoTir",
 {
        start:
0,
        end:
1
      }),
// on prend toutes les frames de img perso numerotées de 0 à 3
      frameRate:
10,
// vitesse de défilement des frames
      repeat:
3
// nombre de répétitions de l'animation. -1 = infini
    });
    vitesseTouriste=40;
    groupeBullets =
this.physics.add.group();


   
const tab_points = carteDuNiveau3.getObjectLayer("calques_tourristes");
   
    groupeTouriste =
this.physics.add.group();
   
this.physics.add.collider(groupeTouriste,
 solide);
// on fait une boucle foreach, qui parcours chaque élements du tableau tab_points  
tab_points.objects.forEach(point=> {
   
if (point.name ==
"tour") {
     
var nouvel_ennemi =
this.physics.add.sprite(point.x, point.y,
"img_ennemi");
      nouvel_ennemi.vivant =
true;
     
this.physics.add.collider(groupeBullets,
 nouvel_ennemi, () => {
        nouvel_ennemi.x=1900;
        nouvel_ennemi.y=1900;


       });
      groupeTouriste.add(nouvel_ennemi);
    }
});
 


time1 =
this.time;
groupeTouriste.children.iterate(function
 iterateur(un_ennemi) {
  un_ennemi.setVelocityX(-50);
});
  groupeTouriste.children.iterate(function
 iterateur(un_ennemi) {
    time1.addEvent({
      delay:
2500,
// ms
      loop:
true,
      callback:
function() {
       
 
          repeatTouriste(un_ennemi);
         
 
       
 
      },
      callbackScope:
this,
  });
       
 
});
 


  }


 


  update() {

    if (Phaser.Input.Keyboard.JustDown(clavier.space) == true) {
        if (this.physics.overlap(player, flamme)) {
            this.scene.switch("bravo");
        }
    }
   
this.physics.world.on("worldbounds",
function(body) {
     
// on récupère l'objet surveillé
     
var objet = body.gameObject;
     
// s'il s'agit d'une balle
     
if (groupeBullets.contains(objet)) {
         
// on le détruit
          objet.destroy();
      }
  });
 

 
 
   
if (
      Phaser.Input.Keyboard.JustDown(clavier.space) ==true &&
    this.physics.overlap(player, levier) ==true) {
     
// si le levier etait activé, on le désactive et stoppe la plateforme
     
if (levier.active ==
true) {
        levier.active =
false;
// on désactive le levier
        levier.flipX =
false;
// permet d'inverser l'image
        tween_mouvement.pause();  
        //on stoppe le tween
      }
     
// sinon :  on l'active et stoppe la plateforme
     
else {
        levier.active =
true;
// on active le levier
 
        levier.flipX =
true;
// on tourne l'image du levier
        tween_mouvement.resume();  
        //on relance le tween
      }
    }
 




   
if (clavier.left.isDown) {
    player.setVelocityX(-160);
      player.direction ='left';
      player.anims.play("animBazookaG",true);


    }
else if (clavier.right.isDown) {


      player.setVelocityX(160);
      player.direction ='right';
      player.anims.play("animBazookaD",true);


    }else {


      player.setVelocityX(0);


      player.anims.play("animBazookaFace");


    }


   


 


   


   
if (clavier.up.isDown && player.body.onFloor()){


        player.setVelocityY(-260);


     


  }


 
if (Phaser.Input.Keyboard.JustDown(clavier.space)== true) {


   
if (this.physics.overlap(player,this.porte_retour)) {


     
this.scene.switch("selection");


      }


  }
 
if ( Phaser.Input.Keyboard.JustDown(this.boutonFeu)){
    tirer(player);
 }  


} 


 
 
}


function repeatTouriste(un_ennemi){
 
if (un_ennemi.body.velocity.x<0){
    un_ennemi.direction =
"gauche";
    un_ennemi.play("animTouristeD",
true);
   
 
  }
 
else {
    un_ennemi.direction =
"droite";
    un_ennemi.play("animTouristeG",
true);
   
 
   
 
  }






    un_ennemi.setVelocityX(-un_ennemi.body.velocity.x);      
 
 }




 function
 tirer(player) {
 
var coefDir;
if
 (player.direction == 'left') {
 
  coefDir = -1;
 
  player.anims.play("animTirG");
}
else {
 
  coefDir =
1;
  player.anims.play("animTirD");
 }
 
// on crée la balle a coté du joueur
 
var bullet = groupeBullets.create(player.x
 + (25 * coefDir), player.y -
4,
"baguette");
 
// parametres physiques de la balle.
  bullet.setCollideWorldBounds(false);
  bullet.body.onWorldBounds =
true;
 
  bullet.body.allowGravity =false;
  bullet.setVelocity(1000
 * coefDir, 0);
// vitesse en x et en y
  }

