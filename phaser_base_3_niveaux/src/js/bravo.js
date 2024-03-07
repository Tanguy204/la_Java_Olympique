export default class bravo extends Phaser.Scene {
    constructor() {
      super({ key: "bravo" });
      
    }
      

    
    //on charge les images
    preload() {
      this.load.image("menu_tuto", "src/assets/TUTO.png");
      //this.load.image("menu_retour", "src/assets/play.png");
     // this.load.audio('musique_fond', 'src/assets/musique_menu.ogg');
      this.load.image("menu_retour", "src/assets/btnretour.png");
    }
  
    create() {
        
     // on place les éléments de fond
      this.add
        .image(0, 0, "menu_tuto")
        .setOrigin(0)
        .setDepth(0);
  
      //on ajoute un bouton de clic, nommé bouton_play
      var bouton_retour = this.add.image(80, 80, "menu_retour").setDepth(1);
      
      //=========================================================
      //on rend le bouton interratif
      bouton_retour.setInteractive();
  
      //Cas ou la souris passe sur le bouton play
      bouton_retour.on("pointerover", () => {
        bouton_retour.setPosition(85,85);
      });
      
      //Cas ou la souris ne passe plus sur le bouton play
      bouton_retour.on("pointerout", () => {
        bouton_retour.setPosition(80,80);
      });
  
  
      //Cas ou la sourris clique sur le bouton play :
      // on lance le niveau 1
      bouton_retour.on("pointerup", () => {
        this.scene.start("menu1");
      });
      
      
    }
  
}
 