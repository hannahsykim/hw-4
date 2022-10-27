function viewHighScore() {
    var bestScore = JSON.parse(localStorage.getItem("highScores"));
    var worstScore = JSON.parse(localStorage.getItem("lowScores"));
    
    if (worstScore > bestScore) {
        document.getElementById("lists").textContent = "1. " + worstScore.name + " " + worstScore.score
        document.getElementById("lists").textContent = "2. " + bestScore.name + " " + bestScore.score
        console.log(worstScore)
    } else  {
        document.getElementById("lists").textContent = "1. " + bestScore.name + " " + bestScore.score
        console.log(bestScore)
    }
    

  var backEl = document.getElementById("reset-game");
  var resetEl = document.getElementById("resetscore");

  backEl.addEventListener("click", function () {
    location.assign("index.html");
  });

  console.log("reset button clicked");

  resetEl.addEventListener("click", function () {
    localStorage.clear();
  });

  console.log("cleared local storage");
}

viewHighScore ();