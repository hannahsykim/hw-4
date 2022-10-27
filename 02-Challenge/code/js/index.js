var quiz = document.getElementById("quiz");
var score = 0;
var currentQuestion = 0;
var quesEl = [
  {
    title: "How many sides are in a triangle?",
    answers: [
      {
        answer: "1 side",
        correct: false,
      },
      {
        answer: "2 sides",
        correct: false,
      },
      {
        answer: "3 sides",
        correct: true,
      },
    ],
  },
  {
    title: "How many feet does a penquin have?",
    answers: [
      {
        answer: "1 foot",
        correct: false,
      },
      {
        answer: "2 feet",
        correct: true,
      },
      {
        answer: "33 feet",
        correct: false,
      },
    ],
  },
  {
    title: "Is water a liquid, gas or solid?",
    answers: [
      {
        answer: "liquid",
        correct: true,
      },
      {
        answer: "gas",
        correct: false,
      },
      {
        answer: "solid",
        correct: false,
      },
    ],
  },
];

function homePage() {
  quiz.innerHTML = `
    <h1>
        My Quiz
    </h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ipsum vitae risus tincidunt scelerisque vitae eget turpis. Pellentesque mauris nisl, lacinia id euismod at, auctor in urna. Nulla facilisi. Sed fringilla ultrices feugiat. Mauris vel aliquet nulla, at feugiat lorem. Vestibulum non elit consectetur, lacinia nulla eget, euismod lectus. Pellentesque consequat quam sit amet odio laoreet, sit amet tristique erat euismod. Vivamus sagittis ante a neque posuere, at euismod justo ultrices. Integer lacinia in enim sit amet ultricies. Nullam laoreet convallis turpis, vel hendrerit est facilisis sit amet.
    </p>
    <button id="startQuiz">start quiz</button> `;

  document.getElementById("startQuiz").addEventListener("click", function () {
    questionPage(quesEl[currentQuestion]);
    countdown();
  });
}

homePage();

var timerEl = document.getElementById("countdown");
var timeLeft = 30;

function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = " TIME OVER";
      timeLeft = 0;
      gameOverScreen();
    }
    if (questionPage.length === currentQuestion - 1) {
      clearTimeout(timeInterval);
      timerEl.textContent = " YOU'RE DONE";
    }
  }, 1000);
}

function questionPage(quesEl) {
  console.log("question Page", quesEl);
  quiz.innerHTML = `
    <p>
    ${quesEl.title}
    </p>
    
    <div class="answerChoice">
        <p>
            <button id="answerOne" data-correct="${quesEl.answers[0].correct}">${quesEl.answers[0].answer}</button>
        </p>
        <p>
            <button id="answerTwo" data-correct="${quesEl.answers[1].correct}">${quesEl.answers[1].answer}</button>
        </p>
        <p>
            <button id="answerThree" data-correct="${quesEl.answers[2].correct}">${quesEl.answers[2].answer}</button>
        </p>
    </div>
    `;

  document.getElementById("answerOne").addEventListener("click", checkAnswer);

  document.getElementById("answerTwo").addEventListener("click", checkAnswer);

  document.getElementById("answerThree").addEventListener("click", checkAnswer);
}

function gameOverScreen() {
  console.log("game over!");
  quiz.innerHTML = `
        <p id=gameOverTxt>GAME OVER</p>
        <p>You got a ${timeLeft}! Enter name:</p>
        <input type="text" id="inputname" class="form-input" placeholder="Your Name ">
        <div class="buttons">
        <button id="submit-btn">Submit</button>
        <button id="restart-btn">Restart</button> 
        </div>
    `;

  document
    .querySelector("#submit-btn")
    .addEventListener("click", function (event) {
      var name = document.getElementById("inputname").value;
      var highScore = {
        name: name,
        score: timeLeft,
      };

      var lowScore = {
        name: name,
        score: timeLeft,
      };
      
      function store(lowScore) {
        items.push(lowScore);
        localStorage.setItem("lowScores", JSON.stringify(lowScore));
      }
      localStorage.setItem("highScores", JSON.stringify(highScore));

      document.location.href = "highscore.html";
    });

  document
    .querySelector("#restart-btn")
    .addEventListener("click", function (GameOver) {
      window.location.reload();
    });
}

function checkAnswer(event) {
  if (event.currentTarget.dataset.correct === "true") {
    alert("good job!");
    console.log(event.currentTarget);
  } else {
    alert("try again!");
    console.log(false);
    return;
  }

  if (questionPage.length === currentQuestion - 1) {
    gameOverScreen();
  } else {
    currentQuestion++;
    questionPage(quesEl[currentQuestion]);
  }
}
