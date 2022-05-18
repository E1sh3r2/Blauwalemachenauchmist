(() => {
    const STATES = { ANSWER: "answer", QUESTION: "question" }
    const $content = document.getElementById("content");
    const $thumbsGroup = document.getElementById("buttonAction");
    const $thumbsUp = document.getElementById("thumbsUp");
    const $thumbsDown = document.getElementById("thumbsDown");

    let currentState = STATES.QUESTION;
    let currentQuestion = "";

    const selectRandomQuestion = () => {
        currentQuestion = Math.floor(Math.random() * questions.length);
    }

    const displayQuestion = (question) => {
        removeEventListenerThumbs()
        addEventListenerContent()
        $thumbsGroup.style.display = "none"
        $content.classList.remove("content-not-clickable")
        $content.classList.add("content")
        $content.innerHTML = `<div id="question">${questions[question].question}</div>`
        currentState = STATES.ANSWER;
    }
    const displayAnswer = (question) => {
        removeEventListenerContent()
        addEventListenerThumbs()
        $thumbsGroup.style.display = "flex"
        $content.classList.add("content-not-clickable")
        $content.classList.remove("content")
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

    const givenAnswer = () => {
        /**
         * Hier code für Cookies dies das
         */
        changeText()
    }

    const addEventListenerContent = () => {
        $content.addEventListener("click", changeText)
    }

    const removeEventListenerContent = () => {
        $content.removeEventListener("click", changeText)
    }

    const addEventListenerThumbs = () => {
        $thumbsDown.addEventListener("click", givenAnswer)
        $thumbsUp.addEventListener("click", givenAnswer)
    }

    const removeEventListenerThumbs = () => {
        $thumbsDown.removeEventListener("click", givenAnswer)
        $thumbsUp.removeEventListener("click", givenAnswer)
    }

    document.addEventListener("keyup", (event) => {
        if (event.code === "Space") {
            changeText();
        }
    });

    selectRandomQuestion();
    displayQuestion(currentQuestion);

})()
