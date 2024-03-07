var porte_retour1;
var porte_passage2;
import * as fct from "/src/js/fonctions.js";

export default class niveau1 extends Phaser.Scene {
  // constructeur de la classe
  

  constructor() {
    super({
      key: "niveau1" //  ici on précise le nom de la classe en tant qu'identifiant
      
    });
    this.vitesse = 150;
    
  
    this.groupes = [];

    var config = {
      type: Phaser.AUTO,
      width: 800, // largeur en pixels
      height: 600, // hauteur en pixels
       scale: {
            // Or set parent divId here
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
       },
      physics: {
        // définition des parametres physiques
        default: "arcade", // mode arcade : le plus simple : des rectangles pour gérer les collisions. Pas de pentes
        arcade: {
          // parametres du mode arcade
          gravity: {
            z: 0 // gravité verticale : acceleration ddes corps en pixels par seconde
          },
          debug: true // permet de voir les hitbox et les vecteurs d'acceleration quand mis à true
        }
      },
      
    };
    
    
  }
  preload() {
    this.load.spritesheet("img_perso", "src/assets/perso.png", {
      frameWidth: 38,
      frameHeight: 40
    });
    
    this.load.image("mapT", "src/assets/mapT.png"); 
    this.load.image("voiture1", "src/assets/voiture.png");
    this.load.image("voiture2", "src/assets/voiture2.png");
    this.load.image("voiture3", "src/assets/voiture3.png");
    this.load.image("bus", "src/assets/bus.png");
    
    
    this.load.image("porteniv1", "src/assets/door2.png");

    this.load.image("porteniv12", "src/assets/door2.png");
    
  
    
  }

  create() {
    this.anims.create({
      key: "anim_tourne_gauche", // key est le nom de l'animation : doit etre unique poru la scene.
      frames: this.anims.generateFrameNumbers("img_perso", {
        start: 6,
        end: 8
      }), // on prend toutes les frames de img perso numerotées de 0 à 3
      frameRate: 7, // vitesse de défilement des frames
      repeat: -1 // nombre de répétitions de l'animation. -1 = infini
    });

    // creation de l'animation "anim_tourne_face" qui sera jouée sur le player lorsque ce dernier n'avance pas.
    this.anims.create({
      key: "anim_face",
      frames: [{ key: "img_perso", frame: 1 }],
      frameRate: 20
    });

    // creation de l'animation "anim_tourne_droite" qui sera jouée sur le player lorsque ce dernier tourne à droite
    this.anims.create({
      key: "anim_tourne_droite",
      frames: this.anims.generateFrameNumbers("img_perso", {
        start: 12,
        end: 14
      }),
      frameRate: 7,
      repeat: -1
    });
    this.groupe1 = this.physics.add.group();
    
    
    this.groupe2 = this.physics.add.group();
    this.groupe3 = this.physics.add.group();
    this.groupe4 = this.physics.add.group();
    this.groupe5 = this.physics.add.group();
    this.groupe6 = this.physics.add.group();
    this.groupe7 = this.physics.add.group();
    this.groupe8 = this.physics.add.group();
    this.groupe9 = this.physics.add.group();
    this.groupe10 = this.physics.add.group();
    this.groupe11= this.physics.add.group();
    this.groupe12= this.physics.add.group();
    this.groupe13 = this.physics.add.group();
    this.groupe14= this.physics.add.group();
    this.groupe15= this.physics.add.group();

    
    
    

  
    
    this.clavier = this.input.keyboard.createCursorKeys();
    this.add.image(1200, 600, "mapT");
    //this.porte_retour = this.physics.add.staticSprite(100, 550, "img_porte1");
    //this.porte_passage2 = this.physics.add.staticSprite(100, 450, "porteniv12");

    porte_retour1 = this.physics.add.staticSprite(50, 550, "porteniv1");
    porte_passage2 = this.physics.add.staticSprite(2350, 550, "porteniv12");
    
    
    this.player1 = this.physics.add.sprite(100, 450, "img_perso");
    this.player1.body.allowGravity = false;
    this.player1.setSize(30,35);

    this.physics.world.setBounds(0, 0,2400, 1200);
    this.player1.refreshBody();
    this.player1.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.player1);
    this.cameras.main.setBounds(0, 0, 2400,1200);

    this.genererGrp(1,-1,150,this.groupe1);
    this.genererGrp(1,1,250,this.groupe2);
    this.genererGrp(1,-1,450,this.groupe3);
    this.genererGrp(1,1,550,this.groupe4);
    this.genererGrp(1,1,650,this.groupe5);
    this.genererGrp(1,-1,750,this.groupe6);
    this.genererGrp(1,1,1050,this.groupe7);
    this.genererGrp(1,-1,1150,this.groupe8);
    this.genererGrp(1,1,1350,this.groupe9);
    this.genererGrp(1,-1,1450,this.groupe10);
    this.genererGrp(1,1,1650,this.groupe11);
    this.genererGrp(1,-1,1750,this.groupe12);
    this.genererGrp(1,-1,1850,this.groupe13);
    this.genererGrp(1,1,2050,this.groupe14);
    this.genererGrp(1,-1,2150,this.groupe15)
    
    }

  update() {
   this.repetition(this.groupe1,1,-1);
    this.repetition(this.groupe2,1,1);
    this.repetition(this.groupe3,1,-1);
    this.repetition(this.groupe4,1,-1);
    this.repetition(this.groupe5,1,1);
    this.repetition(this.groupe6,1,-1)
    this.repetition(this.groupe7,1,1)
    this.repetition(this.groupe8,1,-1)
    this.repetition(this.groupe9,1,1)
    
    this.repetition(this.groupe10,1,-1);
    this.repetition(this.groupe11,1,1);
    this.repetition(this.groupe12,1,-1);
    this.repetition(this.groupe13,1,-1);
    this.repetition(this.groupe14,1,1);
    this.repetition(this.groupe15,1,-1);
    
     

    
    
    
    
   
    
    
    if (this.clavier.left.isDown) {
      this.player1.setVelocityX(-this.vitesse);
      this.player1.anims.play("anim_tourne_gauche", true);
    } else if (this.clavier.right.isDown) {
      this.player1.setVelocityX(this.vitesse);
      this.player1.anims.play("anim_tourne_droite", true);
    } else if (this.clavier.up.isDown) {
      this.player1.setVelocityY(-this.vitesse);
      this.player1.anims.play("anim_tourne_droite", true);
    } else if (this.clavier.down.isDown) {
      this.player1.setVelocityY(this.vitesse);
      this.player1.anims.play("anim_tourne_droite", true);
    }else {
    
    this.player1.setVelocityY(0);
    this.player1.setVelocityX(0);
    this.player1.anims.play("anim_face");
  }
  if (Phaser.Input.Keyboard.JustDown(this.clavier.space) == true) {
    if (this.physics.overlap(this.player1, porte_retour1)){
      this.scene.switch("selection");
    }
    if (this.physics.overlap(this.player1, porte_passage2)){
      this.scene.switch("niveau2");
    }
    this.vitesse+=50;
    this.timer = this.time.addEvent({
      delay: 500, // délai en millisecondes
      callback: this.stopacceleration, // fonction à appeler lorsque le timer s'achève
      callbackScope: this, // portée dans laquelle la fonction est appelée (ici, la scène)
      loop: false // définir sur true pour répéter le timer
  });
  }
  
    
  }

    
    
 
  

  retourAuDebut(groupe,niv,sens) {
    groupe.setVelocityX(0);
    groupe.setVelocityY((70+33*niv)*sens);
    
    this.player1.setPosition(20, 450); 
    
    
  }
  retourAuDebutS(){
    this.player1.setPosition(20, 450); 
  }
  

  genererGrp(niv, sens,voieX,groupe){

   
    
    var taille;
    if (sens===-1){ taille = 1200; }else{  taille = 0}

    

  
   

    while(taille<1300 && taille>-100){
    const random1 = Phaser.Math.Between(1, 3);
      var img_voiture;
      
      
      if (random1===1){
        img_voiture="voiture1";
      }
      else if (random1===2){
        img_voiture="voiture2";
      }
      else {
        img_voiture="voiture3";
      }
      

      

      const random = Phaser.Math.Between(-1, niv);
      
      
     if (random===-1){
        taille+=sens*200;
      }
      
      else if (0<=random && random<=1){
        
        groupe.create(voieX, taille+116, img_voiture);
        
        taille+=sens*135;
      }
      else if (random>=2 ){
        groupe.create(voieX, taille+95, "bus");
        taille+=sens*220;
      }
      console.log(taille);
    }
  
   
    groupe.children.iterate((obstacle) => {
      obstacle.body.allowGravity = false ;
      obstacle.body.setSize(60,120);
     });

    groupe.setVelocityY((77+niv*33)* sens);
      this.physics.add.collider(this.player1, groupe, () => {
     this.retourAuDebut(groupe,niv,sens);
    });

  if (sens === 1){
    groupe.children.iterate((obstacle) => {
      obstacle.flipY=true;
     });

  }

  
}


repetition(groupe,sens,niv){
  groupe.children.iterate((obstacle) => {
    if (obstacle.y<-300){
      obstacle.y=1300;
    }else if (obstacle.y>1500){
      obstacle.y=-100;
    }
   });

}



stopacceleration(){
  this.vitesse-=50;
}

}
