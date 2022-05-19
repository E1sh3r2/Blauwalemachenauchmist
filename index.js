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
     * Retrieves all answers as questionId-decision map from cookies (localStorage)
     * @returns answers from cookie storage (localStorage) if cookies are available. Returns empty object if cookies are not available
     */
    const retrieveStatsFromCookies = () => {
        if ("localStorage" in window) {
            const statsStr = window.localStorage.getItem(COOKIE_KEY_STATS);

            if (statsStr) {
                const stats = JSON.parse(statsStr);
                return stats;
            }
        } else console.warning("Cookies (localStorage) are not available");

        return { answers: {} };
    };

    /**
     * Save answer of question to cookies (localStorage)
     * @param {number} id question id
     * @param {ANSWER} decision answer to question
     */
    const saveAnswerToCookies = (id, decision) => {
        const stats = retrieveStatsFromCookies();

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
        } else console.warning("Cookies (localStorage) are not available");
    };

    const givenAnswer = (answer) => () => {
        saveAnswerToCookies(currentQuestion, answer);
        changeText();
    };

    const positioning_answer_boxes = () => {
        $answer_wrong.style.height = `${$content.clientHeight}px`;
        $answer_wrong.style.width = `${$content.clientWidth / 2}px`;
        $answer_wrong.style.left = `${
            $content.getBoundingClientRect().left + $answer_wrong.clientWidth
        }px`;
        $answer_right.style.height = `${$content.clientHeight}px`;
        $answer_right.style.width = `${$content.clientWidth / 2}px`;
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

    console.log(retrieveStatsFromCookies());
})();
