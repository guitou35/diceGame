// création d'une alerte pour changement de joueur
export function presentAlertSwitchPlayer() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'switch_player';
  //  alert.header = 'Alert';
    alert.message = 'Changement de joueur';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
}

export function presentWinner(playerName) {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'switch_player';
   // alert.header = 'Alert';
    alert.message = 'le joueur ' + playerName + ' a gagné';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
}

export function presentGame(){
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Explication du jeu';
    //alert.subHeader = 'Subtitle';
    alert.message = 'Le jeu se déroule entre 2 joueur. <br> Le premier à obtenir 100 points a gagné. <br> ' +
        'Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL). <br> ' +
        'À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu\'il le souhaite. Le résultat d’un lancer est ajouté au ROUND.' +
        '';
    alert.buttons = ['Ok'];

    document.body.appendChild(alert);
    return alert.present();
}