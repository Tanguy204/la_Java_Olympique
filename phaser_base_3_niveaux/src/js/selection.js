import * as fct from "/src/js/fonctions.js";

/***********************************************************************/
/** VARIABLES GLOBALES 
/***********************************************************************/

var player; // désigne le sprite du joueur
var clavier; // pour la gestion du clavier
var groupe_plateformes;

// définition de la classe "selection"
export default class selection extends Phaser.Scene {
  constructor() {
    super({ key: "selection" }); // mettre le meme nom que le nom de la classe
  }

  /***********************************************************************/
  /** FONCTION PRELOAD 
/***********************************************************************/

  /** La fonction preload est appelée une et une seule fois,
   * lors du chargement de la scene dans le jeu.
   * On y trouve surtout le chargement des assets (images, son ..)
   */
  preload() {
    // tous les assets du jeu sont placés dans le sous-répertoire src/assets/
    this.load.image("img_maison", "src/assets/maison.png");
    this.load.image("img_plateforme", "src/assets/platform.png");
    this.load.spritesheet("img_perso", "src/assets/perso.png", {
      frameWidth: 38,
      frameHeight: 40
    });
    this.load.image("img_porte1", "src/assets/porte n1.png");
    this.load.image("img_porte2", "src/assets/porte n1.png");
    this.load.image("img_porte3", "src/assets/porte n1.png");
  }

  /***********************************************************************/
  /** FONCTION CREATE 
/***********************************************************************/

  /* La fonction create est appelée lors du lancement de la scene
   * si on relance la scene, elle sera appelée a nouveau
   * on y trouve toutes les instructions permettant de créer la scene
   * placement des peronnages, des sprites, des platesformes, création des animations
   * ainsi que toutes les instructions permettant de planifier des evenements
   */
  create() {
      fct.doNothing();
      fct.doAlsoNothing();

    /*************************************
     *  CREATION DU MONDE + PLATEFORMES  *
     *************************************/

    // On ajoute une simple image de fond, le ciel, au centre de la zone affichée (400, 300)
    // Par défaut le point d'ancrage d'une image est le centre de cette derniere
    this.add.image(400, 300, "img_maison");

    // la création d'un groupes permet de gérer simultanément les éléments d'une meme famille
    //  Le groupe groupe_plateformes contiendra le sol et deux platesformes sur lesquelles sauter
    // notez le mot clé "staticGroup" : le static indique que ces élements sont fixes : pas de gravite,
    // ni de possibilité de les pousser.
    groupe_plateformes = this.physics.add.staticGroup();
    // une fois le groupe créé, on va créer les platesformes , le sol, et les ajouter au groupe groupe_plateformes

    // l'image img_plateforme fait 400x32. On en met 2 à coté pour faire le sol
    // la méthode create permet de créer et d'ajouter automatiquement des objets à un groupe
    // on précise 2 parametres : chaque coordonnées et la texture de l'objet, et "voila!"
    groupe_plateformes.create(20, 584, "img_plateforme");
    groupe_plateformes.create(150, 584, "img_plateforme");
    groupe_plateformes.create(280, 584, "img_plateforme");
    groupe_plateformes.create(410, 584, "img_plateforme");
    groupe_plateformes.create(540, 584, "img_plateforme");
    groupe_plateformes.create(670, 584, "img_plateforme");
    groupe_plateformes.create(800, 584, "img_plateforme");

    //  on ajoute 3 platesformes flottantes
    
    groupe_plateformes.create(20, 450, "img_plateforme");
    groupe_plateformes.create(150, 450, "img_plateforme");
    groupe_plateformes.create(280, 450, "img_plateforme");
    groupe_plateformes.create(410, 450, "img_plateforme");
    groupe_plateformes.create(540, 450, "img_plateforme");
    groupe_plateformes.create(670, 450, "img_plateforme");

    groupe_plateformes.create(20, 380, "img_plateforme");
    groupe_plateformes.create(210, 380, "img_plateforme");
    groupe_plateformes.create(400, 380, "img_plateforme");
    groupe_plateformes.create(600, 380, "img_plateforme");
    groupe_plateformes.create(730, 380, "img_plateforme");

    groupe_plateformes.create(130, 250, "img_plateforme");
    groupe_plateformes.create(320, 280, "img_plateforme");
    groupe_plateformes.create(580, 120, "img_plateforme");
    groupe_plateformes.create(550, 200, "img_plateforme");
    groupe_plateformes.create(500, 280, "img_plateforme");

    groupe_plateformes.create(30, 120, "img_plateforme");
    groupe_plateformes.create(320, 120, "img_plateforme");
    groupe_plateformes.create(450, 120, "img_plateforme");
    groupe_plateformes.create(580, 120, "img_plateforme");
    groupe_plateformes.create(710, 120, "img_plateforme");
    /****************************
     *  Ajout des portes   *
     ****************************/
    this.porte1 = this.physics.add.staticSprite(700, 540, "img_porte1");
    this.porte2 = this.physics.add.staticSprite(50, 335, "img_porte2");
    this.porte3 = this.physics.add.staticSprite(690, 75, "img_porte3");

    /****************************
     *  CREATION DU PERSONNAGE  *
     ****************************/

    // On créée un nouveeau personnage : player
    player = this.physics.add.sprite(100, 550, "img_perso");

    //  propriétées physiqyes de l'objet player :
    player.setBounce(0); // on donne un petit coefficient de rebond
    player.setCollideWorldBounds(true); // le player se cognera contre les bords du monde

    /***************************
     *  CREATION DES ANIMATIONS *
     ****************************/
    // dans cette partie, on crée les animations, à partir des spritesheet
    // chaque animation est une succession de frame à vitesse de défilement défini
    // une animation doit avoir un nom. Quand on voudra la jouer sur un sprite, on utilisera la méthode play()
    // creation de l'animation "anim_gauche" qui sera jouée sur le player lorsque ce dernier tourne à gauche
    this.anims.create({
      key: "anim_gauche", // key est le nom de l'animation : doit etre unique poru la scene.
      frames: this.anims.generateFrameNumbers("img_perso", {
        start: 6,
        end: 8
      }), // on prend toutes les frames de img perso numerotées de 0 à 3
      frameRate: 7, // vitesse de défilement des frames
      repeat: -1 // nombre de répétitions de l'animation. -1 = infini
    });

    // creation de l'animation "anim_tourne_face" qui sera jouée sur le player lorsque ce dernier n'avance pas.
    this.anims.create({
      key: "anim_de_face",
      frames: [{ key: "img_perso", frame: 1 }],
      frameRate: 20
    });

    // creation de l'animation "anim_droite" qui sera jouée sur le player lorsque ce dernier tourne à droite
    this.anims.create({
      key: "anim_droite",
      frames: this.anims.generateFrameNumbers("img_perso", {
        start: 12,
        end: 14
      }),
      frameRate: 7,
      repeat: -1
    });

    /***********************
     *  CREATION DU CLAVIER *
     ************************/
    // ceci permet de creer un clavier et de mapper des touches, connaitre l'état des touches
    clavier = this.input.keyboard.createCursorKeys();

    /*****************************************************
     *  GESTION DES INTERATIONS ENTRE  GROUPES ET ELEMENTS *
     ******************************************************/

    //  Collide the player and the groupe_etoiles with the groupe_plateformes
    this.physics.add.collider(player, groupe_plateformes);
  }

  /***********************************************************************/
  /** FONCTION UPDATE 
/***********************************************************************/

  update() {
    
    if (clavier.left.isDown) {
      player.setVelocityX(-160);
      player.anims.play("anim_gauche", true);
    } else if (clavier.right.isDown) {
      player.setVelocityX(160);
      player.anims.play("anim_droite", true);
    } else {
      player.setVelocityX(0);
      player.anims.play("anim_de_face");
    }

    if (clavier.up.isDown && player.body.touching.down) {
      player.setVelocityY(-330);
    }

    if (Phaser.Input.Keyboard.JustDown(clavier.space) == true) {
      if (this.physics.overlap(player, this.porte1))
        this.scene.switch("niveau1");
      if (this.physics.overlap(player, this.porte2))
        this.scene.switch("niveau2");
      if (this.physics.overlap(player, this.porte3))
        this.scene.switch("niveau3");
    }
  }
}

/***********************************************************************/
/** CONFIGURATION GLOBALE DU JEU ET LANCEMENT 
/***********************************************************************/
