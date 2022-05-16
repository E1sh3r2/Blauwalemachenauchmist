const questions = [{"question": "TestQuestion1", "answer": "TestAnswer12"}]
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

