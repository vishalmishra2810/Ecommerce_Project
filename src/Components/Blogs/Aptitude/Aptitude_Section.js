import React, { useState } from "react";
import "./Aptitude_Section.css";

function Aptitude_Section() {
  const questions = [
    {
      questionText: "Who is the father of C language?",
      answerOptions: [
        { answerText: "Steve Jobs", isCorrect: false },
        { answerText: "James Gosling", isCorrect: false },
        { answerText: "Dennis Ritchie", isCorrect: true },
        { answerText: "Rasmus Lerdorf", isCorrect: false },
      ],
    },
    {
      questionText: "All keywords in C are in ___",
      answerOptions: [
        { answerText: "UpperCase letters", isCorrect: false },
        { answerText: "LowerCase letters", isCorrect: true },
        { answerText: "CamelCase letters", isCorrect: false },
        { answerText: "None of the mentioned", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following is true for variable names in C?",
      answerOptions: [
        {
          answerText: "Variable names cannot start with a digit",
          isCorrect: true,
        },
        {
          answerText:
            "They can contain alphanumeric characters as well as special characters",
          isCorrect: false,
        },
        {
          answerText:
            "It is not an error to declare a variable to be one of the keywords(like goto, static)",
          isCorrect: false,
        },
        { answerText: "Variable can be of any length", isCorrect: false },
      ],
    },
    {
      questionText: "The C-preprocessors are specified with _________ symbol.",
      answerOptions: [
        { answerText: "#", isCorrect: true },
        { answerText: "$", isCorrect: false },
        { answerText: "&", isCorrect: false },
        { answerText: " ", isCorrect: false },
      ],
    },
    {
      questionText:
        "Which of the following is not possible statically in C language?",
      answerOptions: [
        { answerText: "Rectangular Array", isCorrect: false },
        { answerText: "Jagged Array", isCorrect: true },
        { answerText: "Multidimensional Array", isCorrect: false },
        { answerText: "Cuboidal Array", isCorrect: false },
      ],
    },
    {
      questionText: "All keywords in C are in ___",
      answerOptions: [
        { answerText: "UpperCase letters", isCorrect: false },
        { answerText: "LowerCase letters", isCorrect: true },
        { answerText: "CamelCase letters", isCorrect: false },
        { answerText: "None of the mentioned", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="aptitude__body">
      <div className="aptitude_section">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Aptitude_Section;
