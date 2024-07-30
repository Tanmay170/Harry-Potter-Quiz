// src/components/Quiz.js
import React, { useState, useEffect } from 'react';

const questions = [
  {
    question: "What house at Hogwarts does Harry belong to?",
    options: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"],
    answer: "Gryffindor"
  },
  {
    question: "What position does Harry play on his Quidditch team?",
    options: ["Seeker", "Keeper", "Beater", "Chaser"],
    answer: "Seeker"
  },
  {
    question: "What is the name of Harry’s pet owl?",
    options: ["Hedwig", "Errol", "Crookshanks", "Scabbers"],
    answer: "Hedwig"
  },
  {
    question: "What is the platform number for the Hogwarts Express?",
    options: ["9", "10", "9 3/4", "10 1/2"],
    answer: "9 3/4"
  },
  {
    question: "Who is the Half-Blood Prince?",
    options: ["Harry Potter", "Tom Riddle", "Severus Snape", "Albus Dumbledore"],
    answer: "Severus Snape"
  },
  // Add more questions as needed
];

const getRandomQuestions = (num) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const Quiz = () => {
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);

  useEffect(() => {
    setCurrentQuestions(getRandomQuestions(5));
  }, []);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setMistakes(mistakes + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < currentQuestions.length && mistakes < 2) {
      setCurrentQuestionIndex(nextQuestion);
    }
  };

  return (
    <div className="quiz w-full max-w-2xl mx-auto p-8 bg-gray-900 rounded-lg shadow-lg">
      {mistakes < 2 ? (
        currentQuestions.length > 0 && currentQuestionIndex < currentQuestions.length ? (
          <>
            <div className="question-section mb-8">
              <div className="question-count mb-4 text-xl">
                <span>Question {currentQuestionIndex + 1}</span>/{currentQuestions.length}
              </div>
              <div className="question-text text-2xl font-semibold">{currentQuestions[currentQuestionIndex].question}</div>
            </div>
            <div className="answer-section grid grid-cols-2 gap-4">
              {currentQuestions[currentQuestionIndex].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerOptionClick(option === currentQuestions[currentQuestionIndex].answer)}
                  className="py-2 px-4 bg-blue-500 hover:bg-blue-700 rounded-lg"
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="result-section text-center">
            <div className="text-3xl mb-4">Score: {score}</div>
            <button onClick={() => window.location.reload()} className="py-2 px-4 bg-green-500 hover:bg-green-700 rounded-lg">
              Restart Quiz
            </button>
          </div>
        )
      ) : (
        <div className="result-section text-center">
          <div className="text-3xl mb-4">You made too many mistakes!</div>
          <div className="text-2xl mb-4">Score: {score}</div>
          <button onClick={() => window.location.reload()} className="py-2 px-4 bg-red-500 hover:bg-red-700 rounded-lg">
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
