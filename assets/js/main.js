/**
 * @typedef {String} States
 **/

/**
 * @typedef {String} Answer
 **/

/**
 * @enum {States}
 */
const STATES = { ANSWER: "answer", QUESTION: "question" };

/**
 * @enum {Answer}
 */
const ANSWER = { RIGHT: "right", WRONG: "wrong" };

const URL_PARAMETER_QUESTION = "question";
const COOKIE_KEY_STATS = "blauwaleStats";
const $currentText = document.getElementById("currentText");
const $decisionButtons = document.getElementById("decisionButtons");
const $answerWrong = document.getElementById("answerWrong");
const $answerRight = document.getElementById("answerRight");

const mdParser = new markdownit();

let currentState = STATES.QUESTION;
let curQuestionIndex = null;

/**
 * Set next question
 */
const setNextQuestion = () => {
  const stats = retrieveStatsFromLocalStorage();

  if (curQuestionIndex === stats.answers.length || curQuestionIndex === null) {
    curQuestionIndex = 0;
  } else {
    curQuestionIndex = stats["curQuestionIndex"] + 1;
  }
};

/**
 * Displays current question
 */
const displayQuestion = () => {
  $decisionButtons.style.display = "none";
  $currentText.innerHTML = questions[curQuestionIndex].question;
  $currentText.classList.toggle("question");
  currentState = STATES.QUESTION;
};

/**
 * Displays current question and its example solution
 */
const displayAnswer = () => {
  $decisionButtons.style.display = "flex";
  $currentText.innerHTML =
    questions[curQuestionIndex].question +
    mdParser.render(questions[curQuestionIndex].answer);
  $currentText.classList.toggle("question");
  currentState = STATES.ANSWER;
};

/**
 * Retrieves all answers as questionId-decision map from local storage
 * @returns answers from local storage. Displays warning in console if local storage is not available
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

  const generateDecisions = [];
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    generateDecisions.push({
      id: question.id,
      [ANSWER.RIGHT]: 0,
      [ANSWER.WRONG]: 0,
    });
  }

  return { answers: generateDecisions, curQuestionIndex };
};

/**
 * Save answer of question to local storage
 * @param {Number} id question id
 * @param {Answer} decision answer to question
 */
const saveAnswerToLocalStorage = (id, decision) => {
  const stats = retrieveStatsFromLocalStorage();

  let index = stats.answers.findIndex((answer) => answer.id === id);

  if (typeof stats["answers"][index] !== "undefined") {
    stats["answers"][index][decision].count = stats.count + 1;

    if (decision === ANSWER.RIGHT) {
      stats["answers"][index][ANSWER.RIGHT] += 1;
    } else {
      stats["answers"][index][ANSWER.WRONG] += 1;
    }

    const currentAnswer = stats["answers"][index];

    const curDecisionVal =
      currentAnswer[ANSWER.RIGHT] - currentAnswer[ANSWER.WRONG];

    // copy previous answer
    const prevAnswer = { ...stats["answers"][index - 1] };
    // calculate decision value
    const prevDecisionVal = prevAnswer[ANSWER.RIGHT] - prevAnswer[ANSWER.WRONG];

    // copy next answer
    const nextAnswer = { ...stats["answers"][index + 1] };
    // calculate decision value
    const nextDecisionVal = nextAnswer[ANSWER.RIGHT] - nextAnswer[ANSWER.WRONG];

    // Swap items if decisionvalues of previous, current and next answer are not in order
    if (typeof prevAnswer !== "undefined" && prevDecisionVal < curDecisionVal) {
      const tmp = stats["answers"][index - 1];
      stats["answers"][index - 1] = stats["answers"][index];
      stats["answers"][index] = tmp;
    } else if (
      typeof nextAnswer !== "undefined" &&
      curDecisionVal < nextDecisionVal
    ) {
      const tmp = stats["answers"][index + 1];
      stats["answers"][index + 1] = stats["answers"][index];
      stats["answers"][index] = tmp;
    }
  } else {
    stats["answers"].push({
      id: id,
      [ANSWER.RIGHT]: decision === ANSWER.RIGHT ? 1 : 0,
      [ANSWER.WRONG]: decision === ANSWER.WRONG ? 1 : 0,
    });
  }

  stats["curQuestionIndex"] = index;

  if ("localStorage" in window) {
    window.localStorage.setItem(COOKIE_KEY_STATS, JSON.stringify(stats));
  } else {
    console.warning("local storage is not available");
  }
};

/**
 * Saves uses response to local storage and selects a random question
 * @param {Answer} answer
 * @returns a callback function to be filled with a {@link Answer} as first parameter
 */
const selectAnswer = (answer) => () => {
  saveAnswerToLocalStorage(curQuestionIndex, answer);
  setNextQuestion();
  setUrlParameter(URL_PARAMETER_QUESTION, curQuestionIndex);
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
 * @param {String} param parameter
 * @returns {String} value of parameter
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
 * @param {String} param name of parameter
 * @param {Number} value new value of parameter
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
 * Displays question based on parsed search param from current url.
 * A random question will be displayed, if search param is missing.
 */
const parseQuestionParam = () => {
  const param = parseInt(getUrlParameter(URL_PARAMETER_QUESTION));
  if (!isNaN(param)) {
    curQuestionIndex = param;
  } else {
    setNextQuestion();
  }
  displayQuestion();
};

document.addEventListener("DOMContentLoaded", () => {
  $currentText.addEventListener("click", onContentClicked);
  $answerWrong.addEventListener("click", selectAnswer(ANSWER.WRONG));
  $answerRight.addEventListener("click", selectAnswer(ANSWER.RIGHT));

  parseQuestionParam();
});
