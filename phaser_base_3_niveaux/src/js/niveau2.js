export default class niveau2 extends Phaser.Scene {
  constructor() {
    super({
      key: "niveau2"
    });
  }
  
  preload() {
    this.load.image("phaser_métro", "src/assets/métro/Fondmetro.png");
    this.load.tilemapTiledJSON("carte", "src/assets/map 2.tmj");
    
    this.load.image("phaser_rat", "src/assets/rat (2).png");
    this.load.image("phaser_rat2", "src/assets/rat (2).png");
    this.load.image("phaser_rat3", "src/assets/rat (2).png");
    this.load.image("phaser_caca", "src/assets/caca.png");
    this.load.image("phaser_caca2", "src/assets/caca.png");
    this.load.image("phaser_caca3", "src/assets/caca.png");
    this.load.image("phaser_spider1", "src/assets/spider.png");
    this.load.image("phaser_spider2", "src/assets/spider.png");
    this.load.image("phaser_spider3", "src/assets/spider.png");
    this.load.image("phaser_M", "src/assets/M.png");
    this.load.image("img_porte2", "src/assets/door2.png");
  
    
  }

  create() {
    const carteDuNiveau = this.add.tilemap("carte");
    
    const ts1 = carteDuNiveau.addTilesetImage("Métro2", "phaser_métro");

    const fond = carteDuNiveau.createLayer("fond", [ts1]);
    const métro = carteDuNiveau.createLayer("métro", [ts1]);
    métro.setCollisionByProperty({ estSolide: true });

    this.player = this.physics.add.sprite(100, 450, "img_perso").setDepth(2);
    this.player.refreshBody();
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.clavier = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(this.player, métro);
    this.cameras.main.startFollow(this.player);
    // redimentionnement du monde avec les dimensions calculées via tiled
    this.physics.world.setBounds(0, 0, 6000, 600);
    //  ajout du champs de la caméra de taille identique à celle du monde
    this.cameras.main.setBounds(0, 0, 6000, 600);
  

    // Uncomment the following lines to enable the door
    this.porte_retour = this.physics.add.staticSprite(100, 450, "img_porte2");
    // this.physics.add.collider(this.player, this.porte_retour);

    
    this.phaser_rat = this.physics.add.sprite(200, 200, "phaser_rat");
    this.phaser_rat.setCollideWorldBounds(true);
    this.physics.add.collider(this.phaser_rat, métro);
    this.phaser_rat.setVelocityX(-50);   
    // Vous pouvez ajouter d'autres configurations et animations ici
    this.physics.add.collider(this.player,this.phaser_rat,this.retourAuDebut,null,this);

    this.phaser_rat2 = this.physics.add.sprite(800, 200, "phaser_rat2");
    this.phaser_rat2.setCollideWorldBounds(true);
    this.physics.add.collider(this.phaser_rat2, métro);
    this.phaser_rat2.setVelocityX(-50);
    // Vous pouvez ajouter d'autres configurations et animations ici
    this.physics.add.collider(this.player,this.phaser_rat2,this.retourAuDebut2,null,this);    

    this.phaser_rat3 = this.physics.add.sprite(1500, 200, "phaser_rat3");
    this.phaser_rat3.setCollideWorldBounds(true);
    this.physics.add.collider(this.phaser_rat3, métro);
    this.phaser_rat3.setVelocityX(-50); 
    // Vous pouvez ajouter d'autres configurations et animations ici
    this.physics.add.collider(this.player,this.phaser_rat3,this.retourAuDebut3,null,this);



    this.phaser_caca = this.physics.add.sprite(300, 300, "phaser_caca");
    this.phaser_caca.setCollideWorldBounds(true);
    this.physics.add.collider(this.phaser_caca, métro);
    // Vous pouvez ajouter d'autres configurations et animations ici
    this.physics.add.collider(this.player,this.phaser_caca,this.retourAuDebut4,null,this);

    this.phaser_caca2 = this.physics.add.sprite(2000, 150, "phaser_caca2");
    this.phaser_caca2.setCollideWorldBounds(true);
    this.physics.add.collider(this.phaser_caca2, métro);
    // Vous pouvez ajouter d'autres configurations et animations ici
    this.physics.add.collider(this.player,this.phaser_caca2,this.retourAuDebut5,null,this);

    this.phaser_caca3 = this.physics.add.sprite(3040, 150, "phaser_caca3");
    this.phaser_caca3.setCollideWorldBounds(true);
    this.physics.add.collider(this.phaser_caca3, métro);
    // Vous pouvez ajouter d'autres configurations et animations ici
    this.physics.add.collider(this.player,this.phaser_caca3,this.retourAuDebut6,null,this);

    this.phaser_spider1 = this.physics.add.sprite(2740, 150, "phaser_spider1");
    this.phaser_spider1.setCollideWorldBounds(true);
    this.physics.add.collider(this.phaser_spider1, métro);
    // Vous pouvez ajouter d'autres configurations et animations ici
    this.physics.add.collider(this.player,this.phaser_spider1,this.retourAuDebut7,null,this);

    this.phaser_spider2 = this.physics.add.sprite(2900, 150, "phaser_spider2");
    this.phaser_spider2.setCollideWorldBounds(true);
    this.physics.add.collider(this.phaser_spider2, métro);
    // Vous pouvez ajouter d'autres configurations et animations ici
    this.physics.add.collider(this.player,this.phaser_spider2,this.retourAuDebut8,null,this);

    this.phaser_spider3 = this.physics.add.sprite(4500, 150, "phaser_spider3");
    this.phaser_spider3.setCollideWorldBounds(true);
    this.physics.add.collider(this.phaser_spider3, métro);
    // Vous pouvez ajouter d'autres configurations et animations ici
    this.physics.add.collider(this.player,this.phaser_spider3,this.retourAuDebut9,null,this);

    this.phaser_M = this.physics.add.sprite(4850, 150, "phaser_M");
    this.phaser_M.setCollideWorldBounds(true);
    this.physics.add.collider(this.phaser_M, métro);
    // Vous pouvez ajouter d'autres configurations et animations ici
    this.physics.add.collider(this.player,this.phaser_M,this.retourAuDebut10,null,this);

    this.time.addEvent({
      delay: 1000, // Délai de 1000 millisecondes (1 seconde)
      loop: true, // Boucle activée
      callback: this.changeSide, // Fonction à appeler à chaque itération
      callbackScope: this // Portée de la fonction de rappel
    });
    this.time.addEvent({
      delay: 1000, // Délai de 1000 millisecondes (1 seconde)
      loop: true, // Boucle activée
      callback: this.changeSide2, // Fonction à appeler à chaque itération
      callbackScope: this // Portée de la fonction de rappel
    });
    this.time.addEvent({
      delay: 1000, // Délai de 1000 millisecondes (1 seconde)
      loop: true, // Boucle activée
      callback: this.changeSide3, // Fonction à appeler à chaque itération
      callbackScope: this // Portée de la fonction de rappel
    });
  

    
  }

  update() {
    if (this.clavier.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("anim_tourne_gauche", true);
    } else if (this.clavier.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("anim_tourne_droite", true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play("anim_face");
    }
    

    
    if (this.clavier.up.isDown && this.player.body.onFloor()) {
        this.player.setVelocityY(-330);
      
  }
  if (Phaser.Input.Keyboard.JustDown(this.clavier.space) == true) {
    if (this.physics.overlap(this.player, this.porte_retour)) {
      this.scene.switch("selection");
      }
  } 
  }   
retourAuDebut(){
  this.player.setPosition(100,450);
  this.phaser_rat.setVelocityY(-100);
  this.phaser_rat.setVelocityX(-100);
}
retourAuDebut2(){
  this.player.setPosition(100,450);
  this.phaser_rat2.setVelocityY(-100);
  this.phaser_rat2.setVelocityX(-100); 
}
retourAuDebut3(){
  this.player.setPosition(100,450);
  this.phaser_rat3.setVelocityY(-100);
  this.phaser_rat3.setVelocityX(-100); 
}
retourAuDebut4(){
  this.player.setPosition(100,450);
  this.phaser_caca.setVelocityY(0);
  this.phaser_caca.setVelocityX(0);  
}
retourAuDebut5(){
  this.player.setPosition(100,450);
  this.phaser_caca2.setVelocityY(0);
  this.phaser_caca2.setVelocityX(0); 
}
retourAuDebut6(){
  this.player.setPosition(100,450);
  this.phaser_caca3.setVelocityY(0);
  this.phaser_caca3.setVelocityX(0); 
}
retourAuDebut7(){
  this.player.setPosition(100,450);
  this.phaser_spider1.setVelocityY(0);
  this.phaser_spider1.setVelocityX(0); 
}
retourAuDebut8(){
  this.player.setPosition(100,450);
  this.phaser_spider2.setVelocityY(0);
  this.phaser_spider2.setVelocityX(0); 
}
retourAuDebut9(){
  this.player.setPosition(100,450);
  this.phaser_spider3.setVelocityY(0);
  this.phaser_spider3.setVelocityX(0); 
}

retourAuDebut10(){
  this.player.setPosition(100,450);
  this.phaser_M.setVelocityY(0);
  this.phaser_M.setVelocityX(0); 
}

changeSide() {
  console.log("changerSide")
  // Changer le côté du rat, par exemple, en inversant sa vélocité
  this.phaser_rat.setVelocityX(-this.phaser_rat.body.velocity.x);
  }
  changeSide2() {
    console.log("changerSide2")
    // Changer le côté du rat, par exemple, en inversant sa vélocité
    this.phaser_rat2.setVelocityX(-this.phaser_rat2.body.velocity.x);

}
changeSide3() {
  console.log("changerSide3")
  // Changer le côté du rat, par exemple, en inversant sa vélocité
  this.phaser_rat3.setVelocityX(-this.phaser_rat3.body.velocity.x);

}
}