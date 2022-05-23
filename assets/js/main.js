(() => {
  const STATES = { ANSWER: "answer", QUESTION: "question" };
  const ANSWER = { RIGHT: "right", WRONG: "wrong" };
  const URL_PARAMETER_QUESTION = "question";
  const COOKIE_KEY_STATS = "blauwale_stats";
  const $currentText = document.getElementById("currentText");
  const $decisionButtons = document.getElementById("decisionButtons");
  const $answerWrong = document.getElementById("answerWrong");
  const $answerRight = document.getElementById("answerRight");

  const mdParser = new markdownit();

  let currentState = STATES.QUESTION;
  let currentQuestion = 0;

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
    } else {
      console.warning("local storage is not available");
    }

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
      window.localStorage.setItem(COOKIE_KEY_STATS, JSON.stringify(stats));
    } else {
      console.warning("local storage is not available");
    }
  };

  const selectAnswer = (answer) => () => {
    saveAnswerToLocalStorage(currentQuestion, answer);
    selectRandomQuestion();
    setUrlParameter(URL_PARAMETER_QUESTION, currentQuestion);
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

  /**
   * get one url parameter
   * @param param parameter
   * @returns {string} value of parameter
   */
  const getUrlParameter = (param) => {
    const sPageURL = window.location.search.substring(1);
    const sURLVariables = sPageURL.split("&");
    for (let i = 0; i < sURLVariables.length; i++) {
      const sParameterName = sURLVariables[i].split("=");
      if (sParameterName[0] === param) {
        return sParameterName[1];
      }
    }
  };

  /**
   * set current parameter to url
   * @param param name of parameter
   * @param value new value of parameter
   */
  const setUrlParameter = (param, value) => {
    if ("URLSearchParams" in window) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set(param, value);
      window.location.search = searchParams.toString();
    } else {
      window.location.search = `?${param}=${value}`;
    }
  };

  /**
   * check parameter is number
   * @param param parameter
   * @returns {number} parameter as number or NaN
   */
  const isParamNumber = (param) => {
    return parseInt(param);
  };

  /**
   * Displays question based on parsed search param from current url.
   * If search param is missing a random question will be displayed
   */
  const parseQuestionParam = () => {
    let param = isParamNumber(getUrlParameter(URL_PARAMETER_QUESTION));
    if (!isNaN(param)) {
      currentQuestion = param;
    } else {
      selectRandomQuestion();
    }
    displayQuestion();
  };

  $currentText.addEventListener("click", onContentClicked);
  $answerWrong.addEventListener("click", selectAnswer(ANSWER.WRONG));
  $answerRight.addEventListener("click", selectAnswer(ANSWER.RIGHT));

  document.addEventListener("DOMContentLoaded", parseQuestionParam);
})();
