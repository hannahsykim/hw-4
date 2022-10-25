var quiz  = document.getElementById("quiz");
var questions = [
 {  
    title: 'How many sides are in a triangle?',
    answers: [
        {
            answer: 1,
            correct: false
        },
        {
            answer: 2,
            correct: false
        },
        {
            answer: 3,
            correct: true
        },
    ]
 },
 {
    title: 'How many feet does a penquin have?',
    answers: [
        {
            answer: 1,
            correct: false
        },
        {
            answer: 2,
            correct: true
        },
        {
            answer: 33,
            correct: false
        },
    ]
 },
 {
    title: 'Is water a liquid, gas or solid?',
    answers: [
        {
            answer: 'liquid',
            correct: true
        },
        {
            answer: 'gas',
            correct: false
        },
        {
            answer: 'solid',
            correct: false
        },
    ]
 }
]

var currentQuestion = 0
        
function homePage () {
 quiz.innerHTML = /*html*/`
    <h1>
        My Quiz
    </h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ipsum vitae risus tincidunt scelerisque vitae eget turpis. Pellentesque mauris nisl, lacinia id euismod at, auctor in urna. Nulla facilisi. Sed fringilla ultrices feugiat. Mauris vel aliquet nulla, at feugiat lorem. Vestibulum non elit consectetur, lacinia nulla eget, euismod lectus. Pellentesque consequat quam sit amet odio laoreet, sit amet tristique erat euismod. Vivamus sagittis ante a neque posuere, at euismod justo ultrices. Integer lacinia in enim sit amet ultricies. Nullam laoreet convallis turpis, vel hendrerit est facilisis sit amet.
    </p>
    <button id="startQuiz">start quiz</button>
    `
    document
    .getElementById('startQuiz')
    .addEventListener(
        'click',
        function() {
         questionPage(questions[currentQuestion])
        }
    )

}
var timerEl = document.getElementById('countdown');

function countdown() {
    var timeLeft = 30;

    var timeInterval = setInterval(function() {
        if (timeLeft >1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft===1){
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = ' TIME OVER';
            timeLeft = 0;
            clearInterval(timerEl);
            gameOverScreen();
        }
    }, 1000);
}

countdown();

function questionPage (quesEl) {
 quiz.innerHTML = /*html*/`
    <p>
    ${quesEl.title}
    </p>
    
    <ul class="answerChoice" >
        <p>
            <button id="answerOne" data-correct="${quesEl.answers[0].correct}">${quesEl.answers[0].answer}</button>
        </p>
        <p>
            <button id="answerTwo" data-correct="${quesEl.answers[1].correct}">${quesEl.answers[1].answer}</button>
        </p>
        <p>
            <button id="answerThree" data-correct="${quesEl.answers[2].correct}">${quesEl.answers[2].answer}</button>
        </p>
    </ul>
    `

 document
    .getElementById('answerOne')
    .addEventListener(
        'click',
        function(event) {
         if (event.currentTarget.dataset.correct === 'true') {
            alert('good job!')
            console.log(event.currentTarget)
        } 
         else {
            alert('try again!')
            console.log(false)
            return
        }
         if (questions.length === currentQuestion - 1) {
            gameOverScreen();
        }
     currentQuestion++;
         gameOverScreen();
        })

 document
    .getElementById('answerTwo')
    .addEventListener(
        'click',
        function(event) {
         if (event.currentTarget.dataset.correct === 'true') {
            alert('good job!')
            console.log(event.currentTarget)
        } else {
            alert('try again!')
            console.log(false)
            return
        }
         if (questions.length === currentQuestion - 1) {
            gameOverScreen();
        }
     currentQuestion++;
         questionPage(questions[currentQuestion])
        })

 document
    .getElementById('answerThree')
    .addEventListener(
        'click',
        function(event) {
         if (event.currentTarget.dataset.correct === 'true') {
            alert('good job!')
            console.log(event.currentTarget)
        } else {
            alert('try again!')
            console.log(false)
            return
        }
         if (questions.length === currentQuestion - 1) {
            gameOverScreen();
        } 
     currentQuestion++;
         questionPage(questions[currentQuestion])
        })
        
}

function checkHighScore(score) {
    const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
    const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;
    
    if (score > lowestScore) {
      saveHighScore(score, highScores); // TODO
      showHighScores(); // TODO
    }
}

function saveHighScore(score, highScores) {
    const name = prompt('You got a high score! Enter name:');
    const newScore = { score, name };

    // 1. Add to list
  highScores.push(newScore);

  // 2. Sort the list
  highScores.sort((a, b) => b.score - a.score);
  
  // 3. Select new list
  highScores.splice(NO_OF_HIGH_SCORES);
  
  // 4. Save to local storage
  localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
}

function showHighScores() {
    const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
    const highScoreList = document.getElementById(HIGH_SCORES);
    
    highScoreList.innerHTML = highScores
      .map((score) => `<li>${score.score} - ${score.name}`)
      .join('');
}

  function gameOverScreen() {
    quiz.innerHTML = /*html*/`
    <p>
    Game Over
    </p>
    <p>
    You got a high score! Enter name:
    </p>
    <form><input type="text" class="form-input" placeholder=" "></form>
    <button class="submit-btn">Submit</button>
    <button id="restart-btn">Restart</button>
    `
    document.getElementById('submit-btn').addEventListener(
        'click',
        function(event) {
         highscore.innerHTML = /*html*/`
        }

    document
    .querySelector('#restart-btn')
    .addEventListener(
        'click',
        function(GameOver) {
            window.location.reload();
        }
    )
    checkHighScore(account.score);
  
}


homePage()

