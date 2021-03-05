import Player from "./Player.js";
import {lancer} from "./Des.js";
import {presentAlertSwitchPlayer, presentWinner, presentGame} from "./alert.js";
import {initialisation} from "./outils.js";


// initialisation
var player1 = new Player('PLAYER 1');
var player2 = new Player('PLAYER 2');
// if true = player 1 de joue si false = player 2 de jouer
var currentPlayer = true;

initialisation();

//Nouveau jeu lors d'un refresh de page ou en appuyant sur le bouton new game
window.addEventListener('load',function () {
    resetGame();
    presentGame();
});
btnNewGame.addEventListener('click', resetGame);

// fonction permettant de mettre à zero le jeu
function resetGame(){
    player1.resetAll();
    player2.resetAll();
    playerScoreP1.innerHTML = player1.score;
    playerScoreP2.innerHTML = player2.score;
    playerScoreCurrentP1.innerHTML = player1.scoreCurrent;
    playerScoreCurrentP2.innerHTML = player2.scoreCurrent;
    playerActif2.hidden = true;
    playerActif1.hidden = false;
    currentPlayer = true;
    playerName1.innerHTML = player1.name;
    playerName2.innerHTML = player2.name;
}

function changeImageDes(score){
    switch(score){
        case 1:
            des_1.hidden = false;
            des_2.hidden = true;
            des_3.hidden = true;
            des_4.hidden = true;
            des_5.hidden = true;
            des_6.hidden = true;
            break;

        case 2:
            des_1.hidden = true;
            des_2.hidden = false;
            des_3.hidden = true;
            des_4.hidden = true;
            des_5.hidden = true;
            des_6.hidden = true;
            break;

        case 3:
            des_1.hidden = true;
            des_2.hidden = true;
            des_3.hidden = false;
            des_4.hidden = true;
            des_5.hidden = true;
            des_6.hidden = true;
            break;

        case 4:
            des_1.hidden = true;
            des_2.hidden = true;
            des_3.hidden = true;
            des_4.hidden = false;
            des_5.hidden = true;
            des_6.hidden = true;
            break;

        case 5:
            des_1.hidden = true;
            des_2.hidden = true;
            des_3.hidden = true;
            des_4.hidden = true;
            des_5.hidden = false;
            des_6.hidden = true;
            break;

        case 6:
            des_1.hidden = true;
            des_2.hidden = true;
            des_3.hidden = true;
            des_4.hidden = true;
            des_5.hidden = true;
            des_6.hidden = false;
            break;
    }
}

function updateScoreCurrent(scoreLancer){
    if(currentPlayer){
        player1.addScoreCurrent(scoreLancer);
        playerScoreCurrentP1.innerHTML = player1.scoreCurrent;
    }else{
        player2.addScoreCurrent(scoreLancer);
        playerScoreCurrentP2.innerHTML = player2.scoreCurrent;
    }
}

function resetScoreCurrent(){
    if(currentPlayer){
        player1.resetScoreCurrent();
        playerScoreCurrentP1.innerHTML = player1.scoreCurrent;
    }else{
        player2.resetScoreCurrent();
        playerScoreCurrentP2.innerHTML = player2.scoreCurrent;
    }
}

function updateScore(){
    if(currentPlayer){
        player1.addScore(player1.scoreCurrent);
        playerScoreP1.innerHTML = player1.score;
        resetScoreCurrent();
        switchPlayer();
        testWinner(player1);
    }else{
        player2.addScore(player2.scoreCurrent);
        playerScoreP2.innerHTML = player2.score;
        resetScoreCurrent();
        switchPlayer();
        testWinner(player2);
    }
}

function togglePlayerActif() {
    if(currentPlayer){
        playerActif1.hidden = true;
        playerActif2.hidden = false;
    }else{
        playerActif1.hidden = false;
        playerActif2.hidden = true;
    }
}

function switchPlayer(){
    if(currentPlayer){
        togglePlayerActif();
        presentAlertSwitchPlayer();
    }else{
        togglePlayerActif();
        presentAlertSwitchPlayer();
    }
    currentPlayer = !currentPlayer;
}
/* pour le debug
function updateJetDes(scoreLancer){
    jetDes.innerHTML = scoreLancer ;
}
*/
function testWinner(player){
    if(player.score >= 100){
        presentWinner(player.name);
        resetGame();
    }
}

//eventListener pour mettre à jour le score
btnLancer.addEventListener('click',function () {
    var scoreLancer = lancer();
    changeImageDes(scoreLancer);
    if(scoreLancer === 1){
       // updateJetDes(scoreLancer);
        resetScoreCurrent();
        switchPlayer();
    }else{
       // updateJetDes(scoreLancer);
        updateScoreCurrent(scoreLancer);
    }
});

btnRecuperer.addEventListener('click',updateScore);