export default class menu1 extends Phaser.Scene {
    constructor() {
      super({ key: "menu1" });
      
    }
    
    //on charge les images
    preload() {
      this.load.image("menu_fond", "src/assets/fond5.png");
      this.load.image("menu_play", "src/assets/play.png");
      this.load.audio('musique_fond', 'src/assets/musique_menu.ogg');
      this.load.image("menu_titre", "src/assets/titre.png");
      this.load.image("menu_dututo", "src/assets/tutoc.png");
      this.load.image("btnsel", "src/assets/btnsel1.png");
      
    }
  
    create() {
      
        var musique_fond;
     // on place les éléments de fond
      this.add
        .image(0, 0, "menu_fond")
        .setOrigin(0)
        .setDepth(0);
  
      //on ajoute un bouton de clic, nommé bouton_play

      var bouton_tutoc = this.add.image(400, 350, "menu_dututo").setDepth(1);
      bouton_tutoc.setInteractive()

      var bouton_sel = this.add.image(400, 450, "btnsel").setDepth(1);
      bouton_sel.setInteractive()

      var bouton_play = this.add.image(400, 300, "menu_play").setDepth(1);
      this.add.image(130, 150, "menu_titre").setOrigin(0).setDepth(0);
      bouton_play.setInteractive();
      //=========================================================
      //on rend le bouton interratif
      

      
      //=========================================================
      //on rend le bouton interratif
      
  
      //Cas ou la souris passe sur le bouton play
      bouton_play.on("pointerover", () => {
        bouton_play.setPosition(405,295);
      });
      
      //Cas ou la souris ne passe plus sur le bouton play
      bouton_play.on("pointerout", () => {
        bouton_play.setPosition(400,300);
      });
  
  
      //Cas ou la sourris clique sur le bouton play :
      // on lance le niveau 1
      bouton_tutoc.on("pointerup", () => {
        this.scene.start("tuto");
      });

      bouton_play.on("pointerup", () => {
        this.scene.start("niveau1");
      });
      bouton_sel.on("pointerup", () => {
        this.scene.start("selection");
      });

      musique_fond = this.sound.add('musique_fond');
      musique_fond.play();
    }
  
}
 