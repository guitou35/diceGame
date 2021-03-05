class Player{
    constructor (name){
        this.name = name;
        this.score = 0;
        this.scoreCurrent = 0;
    }

    resetScore(){
         this.score = 0;
    }

    resetScoreCurrent(){
         this.scoreCurrent = 0;
    }

    resetAll(){
        this.scoreCurrent = 0;
        this.score = 0;
    }

    addScore(score){
    this.score += score;
    }

    addScoreCurrent(score){
        this.scoreCurrent += score;
    }

}

export default Player;

