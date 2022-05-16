let state = "Question"
let question = ""

function displayQuestion() {
    question = Math.floor(Math.random() * questions.length)
    document.getElementById("content").innerHTML = questions[question].question
    state = "Answer"
}

function displayAnswer() {
    document.getElementById("content").innerHTML = questions[question].answer
    state = "Question"
}

function changeText() {
    if (state === "Question") {
        displayQuestion()
    } else {
        displayAnswer()
    }
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        changeText()
    }
})

displayQuestion()