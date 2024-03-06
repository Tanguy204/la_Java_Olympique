export default class menu extends Phaser.Scene {
    constructor() {
      super({ key: "menu1" });
      
    }
    
    //on charge les images
    preload() {
      this.load.image("menu_fond", "src/assets/fond.png");
      this.load.image("menu_ballon", "src/assets/ballon.png");
      this.load.audio('musique_fond', 'src/assets/musique_menu.ogg');
      this.load.image("menu_titre", "src/assets/titre.png");
    }
  
    create() {
        var musique_fond;
     // on place les éléments de fond
      this.add
        .image(0, 0, "menu_fond")
        .setOrigin(0)
        .setDepth(0);
  
      //on ajoute un bouton de clic, nommé bouton_play
      var bouton_play = this.add.image(420, 250, "menu_ballon").setDepth(1);
      this.add.image(150, 80, "menu_titre").setOrigin(0).setDepth(0);
      //=========================================================
      //on rend le bouton interratif
      bouton_play.setInteractive();
  
      //Cas ou la souris passe sur le bouton play
      bouton_play.on("pointerover", () => {
        bouton_play.setPosition(425,255);
      });
      
      //Cas ou la souris ne passe plus sur le bouton play
      bouton_play.on("pointerout", () => {
        bouton_play.setPosition(420,250);
      });
  
  
      //Cas ou la sourris clique sur le bouton play :
      // on lance le niveau 1
      bouton_play.on("pointerup", () => {
        this.scene.start("selection");
      });
      musique_fond = this.sound.add('musique_fond');
      musique_fond.play();
    }
  
}
 