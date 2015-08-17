function Player(name, score) {
    this.name = name;
    this.score = score;
    this.scoreResetValue = 0;
    this.color = null;
}

Player.prototype.resetScore = function() {
    this.score = scoreResetValue;
}

Player.prototype.incrementScore = function(value) {
    score += value;
}

Player.prototype.decrementScore = function(value) {
    score -= value;
}