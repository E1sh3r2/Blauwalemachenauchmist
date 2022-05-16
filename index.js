let state = "Question"
let question = ""

function selectRandomQuestion() {
    question = Math.floor(Math.random() * questions.length)
}

function displayQuestion(question) {
    document.getElementById("content").innerHTML = questions[question].question
    state = "Answer"
}

function displayAnswer(question) {
    document.getElementById("content").innerHTML = `<div id="question">${questions[question].question}</div>` + questions[question].answer
    state = "Question"
}

function changeText() {
    if (state === "Question") {
        selectRandomQuestion()
        displayQuestion(question)
    } else {
        displayAnswer(question)
    }
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        changeText()
    }
})

selectRandomQuestion()
displayQuestion(question)