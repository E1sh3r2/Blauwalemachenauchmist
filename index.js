(() => {
    const STATES = { ANSWER: "answer", QUESTION: "question" }
    const $content = document.getElementById("content");
    const $thumbs_group = document.getElementById("button_action");
    const $thumbs_up = document.getElementById("thumbs_up");
    const $thumbs_down = document.getElementById("thumbs_down");

    let currentState = STATES.QUESTION;
    let currentQuestion = "";

    const selectRandomQuestion = () => {
        currentQuestion = Math.floor(Math.random() * questions.length);
    }

    const displayQuestion = (question) => {
        removeEventListenerThumbs()
        addEventListenerContent()
        $thumbs_group.style.display = "none"
        $content.classList.remove("content-not-clickable")
        $content.classList.add("content")
        $content.innerHTML = `<div id="question">${questions[question].question}</div>`
        currentState = STATES.ANSWER;
    }
    const displayAnswer = (question) => {
        removeEventListenerContent()
        addEventListenerThumbs()
        $thumbs_group.style.display = "flex"
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

    const addEventListenerContent = () =>{
        $content.addEventListener("click", changeText)
    }

    const removeEventListenerContent = () =>{
        $content.removeEventListener("click", changeText)
    }

    const addEventListenerThumbs = () =>{
        $thumbs_down.addEventListener("click", givenAnswer)
        $thumbs_up.addEventListener("click", givenAnswer)
    }

    const removeEventListenerThumbs = () =>{
        $thumbs_down.removeEventListener("click", givenAnswer)
        $thumbs_up.removeEventListener("click", givenAnswer)
    }

    document.addEventListener("keyup", (event) => {
        if (event.code === "Space") {
            changeText();
        }
    });

    selectRandomQuestion();
    displayQuestion(currentQuestion);

})()
