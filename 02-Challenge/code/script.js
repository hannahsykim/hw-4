var quiz  = document.getElementById("quiz");
function homePage () {
    quiz.innerHTML = /*html*/`
    <p>
        My Quiz
    </p>
    <button>start quiz</button>
    `
    document
    .getElementById('startQuiz')
    .addEventListener(
        "click",
         function () {
            questionPage()
         }
    )
}

function questionPage () {
    quiz.innerHTML = /*html*/`
    <p>
        Question 1
    </p>
    <ul>
        <li>
            <button>this option</button>
        </li>
    </ul>
    `
}

homePage()