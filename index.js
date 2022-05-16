(() => {
    const STATES = { ANSWER: "answer", QUESTION: "question" }
    const $content = document.getElementById("content");

    let currentState = STATES.QUESTION;
    let currentQuestion = "";

    const selectRandomQuestion = () => {
        currentQuestion = Math.floor(Math.random() * questions.length);
    }

    const displayQuestion = (question) => {
        $content.innerHTML = `<div id="question">${questions[question].question}</div>`
        currentState = STATES.ANSWER;
    }
    const displayAnswer = (question) => {
        $content.innerHTML = `<div id="question">${questions[question].question}</div>` + questions[question].answer;
        currentState = STATES.QUESTION;
    }

    const changeText = () => {
        if (currentState === STATES.QUESTION) {
            selectRandomQuestion()
            displayQuestion(currentQuestion);
        } else {
            displayAnswer(currentQuestion);
        }
    }

    document.addEventListener("keyup", (event) => {
        if (event.code === "Space") {
            changeText();
        }
    });

    $content.addEventListener("click", changeText)

    selectRandomQuestion();
    displayQuestion(currentQuestion);

})()
