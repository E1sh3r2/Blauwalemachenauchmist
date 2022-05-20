(() => {
    const STATES = { ANSWER: "answer", QUESTION: "question" };
    const ANSWER = { RIGHT: "right", WRONG: "wrong" };
    const COOKIE_KEY_STATS = "blauwale_stats";
    const $content = document.getElementById("content");
    const $question = document.getElementById("question");
    const $answer_wrong = document.getElementById("answer_wrong");
    const $answer_right = document.getElementById("answer_right");

    let currentState = STATES.QUESTION;
    let currentQuestion = "";

    const selectRandomQuestion = () => {
        currentQuestion = Math.floor(Math.random() * questions.length);
    };

    const displayQuestion = (question) => {
        $answer_wrong.style.display = "none";
        $answer_right.style.display = "none";
        $content.classList.remove("content-not-clickable");
        $content.classList.add("content");
        $question.innerHTML = questions[question].question;
        currentState = STATES.ANSWER;
        addEventListenerContent();
    };

    const displayAnswer = (question) => {
        $answer_wrong.style.display = "flex";
        $answer_right.style.display = "flex";
        $content.classList.add("content-not-clickable");
        $content.classList.remove("content");
        $question.innerHTML =
            questions[question].question + questions[question].answer;
        currentState = STATES.QUESTION;
        fittingBoxOnImg();
        positioning_answer_boxes();
    };

    const fittingBoxOnImg = () => {
        let $images = $question.getElementsByTagName("img");
        for (const image of $images) {
            image.addEventListener("load", (event) => {
                positioning_answer_boxes();
            });
        }
    };

    const changeText = () => {
        if (currentState === STATES.QUESTION) {
            selectRandomQuestion();
            displayQuestion(currentQuestion);
        } else {
            displayAnswer(currentQuestion);
        }
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

    const givenAnswer = (answer) => () => {
        saveAnswerToLocalStorage(currentQuestion, answer);
        changeText();
    };

    const positioning_answer_boxes = () => {
        let clientWidth = $content.clientWidth / 2
        $answer_wrong.style.height = `${$content.clientHeight}px`;
        $answer_wrong.style.width = `${clientWidth}px`;
        $answer_wrong.style.left = `${
            $content.getBoundingClientRect().left + clientWidth
        }px`;
        $answer_right.style.height = `${$content.clientHeight}px`;
        $answer_right.style.width = `${clientWidth}px`;
        $answer_right.style.left = `${$content.getBoundingClientRect().left}px`;
    };

    const addEventListenerContent = () => {
        $content.addEventListener("click", changeText, { once: true });
    };

    const addEventListenerAnswer = () => {
        $answer_wrong.addEventListener("click", givenAnswer(ANSWER.WRONG));
        $answer_right.addEventListener("click", givenAnswer(ANSWER.RIGHT));
    };

    selectRandomQuestion();
    displayQuestion(currentQuestion);
    addEventListenerAnswer();
})();
