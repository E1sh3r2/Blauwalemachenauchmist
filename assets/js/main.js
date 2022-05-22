(() => {
    const STATES = { ANSWER: "answer", QUESTION: "question" };
    const ANSWER = { RIGHT: "right", WRONG: "wrong" };
    const COOKIE_KEY_STATS = "blauwale_stats";
    const $currentText = document.getElementById("currentText");
    const $decisionButtons = document.getElementById("decisionButtons");
    const $answerWrong = document.getElementById("answerWrong");
    const $answerRight = document.getElementById("answerRight");

    const mdParser = new markdownit();

    let currentState = STATES.QUESTION;
    let currentQuestion = "";

    const selectRandomQuestion = () => {
        currentQuestion = Math.floor(Math.random() * questions.length);
    };

    const displayQuestion = () => {
        $decisionButtons.style.display = "none";
        $currentText.innerHTML = questions[currentQuestion].question;
        $currentText.classList.toggle("question");
        currentState = STATES.QUESTION;
    };

    const displayAnswer = () => {
        $decisionButtons.style.display = "flex";
        $currentText.innerHTML =
            questions[currentQuestion].question +
            mdParser.render(questions[currentQuestion].answer);
        $currentText.classList.toggle("question");
        currentState = STATES.ANSWER;
    };

    /**
     * Retrieves all answers as questionId-decision map from local storage
     * @returns answers from local storage. Returns empty object if local storage are not available
     */
    const retrieveStatsFromLocalStorage = () => {
        if ("localStorage" in window) {
            const statsStr = window.localStorage.getItem(COOKIE_KEY_STATS);

            if (statsStr) {
                const stats = JSON.parse(statsStr);
                return stats;
            }
        } else console.warning("local storage is not available");

        return { answers: {} };
    };

    /**
     * Save answer of question to local storage
     * @param {number} id question id
     * @param {ANSWER} decision answer to question
     */
    const saveAnswerToLocalStorage = (id, decision) => {
        const stats = retrieveStatsFromLocalStorage();

        // increment count of answer
        if (typeof stats["answers"][id] !== "undefined") {
            stats["answers"][id][decision].count = stats.count + 1;
        } else {
            stats["answers"][id] = {
                [ANSWER.RIGHT]: decision === ANSWER.RIGHT ? 1 : 0,
                [ANSWER.WRONG]: decision === ANSWER.WRONG ? 1 : 0,
            };
        }

        if ("localStorage" in window) {
            window.localStorage.setItem(
                COOKIE_KEY_STATS,
                JSON.stringify(stats)
            );
        } else console.warning("local storage is not available");
    };

    const selectAnswer = (answer) => () => {
        saveAnswerToLocalStorage(currentQuestion, answer);
        selectRandomQuestion();
        displayQuestion();
    };

    /**
     * On click event handler for content div
     * @param {Event} event default click event
     */
    const onContentClicked = (event) => {
        if (currentState === STATES.ANSWER) {
            event.preventDefault();
        } else {
            displayAnswer();
        }
    };

    $currentText.addEventListener("click", onContentClicked);
    $answerWrong.addEventListener("click", selectAnswer(ANSWER.WRONG));
    $answerRight.addEventListener("click", selectAnswer(ANSWER.RIGHT));

    selectRandomQuestion();
    displayQuestion();
})();
