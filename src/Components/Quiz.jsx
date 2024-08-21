import React, { useState, useEffect } from 'react';

// Full set of Harry Potter-themed questions
const allQuestions = [
  {
    question: "What magical object did Harry Potter use to breathe underwater during the Triwizard Tournament?",
    options: ["A Time-Turner", "A Gillyweed", "A Broomstick", "A Portkey"],
    answer: "A Gillyweed"
  },
  {
    question: "Who is the Half-Blood Prince?",
    options: ["Harry Potter", "Draco Malfoy", "Severus Snape", "Albus Dumbledore"],
    answer: "Severus Snape"
  },
  {
    question: "What is the name of Hagrid's giant spider?",
    options: ["Buckbeak", "Fluffy", "Aragog", "Norbert"],
    answer: "Aragog"
  },
  {
    question: "Which house at Hogwarts does Luna Lovegood belong to?",
    options: ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"],
    answer: "Ravenclaw"
  },
  {
    question: "What is the name of the potion that grants good luck?",
    options: ["Amortentia", "Felix Felicis", "Polyjuice Potion", "Veritaserum"],
    answer: "Felix Felicis"
  },
  {
    question: "What does the spell 'Alohomora' do?",
    options: ["Unlocks doors", "Lights up wands", "Levitates objects", "Summons items"],
    answer: "Unlocks doors"
  },
  {
    question: "Who was the headmaster of Hogwarts before Albus Dumbledore?",
    options: ["Phineas Nigellus Black", "Armando Dippet", "Dilys Derwent", "Dexter Fortescue"],
    answer: "Armando Dippet"
  },
  {
    question: "What form does Harry Potter's Patronus take?",
    options: ["A stag", "A phoenix", "A wolf", "An otter"],
    answer: "A stag"
  },
  {
    question: "Which creature is known for guarding the Chamber of Secrets?",
    options: ["A Hippogriff", "A Basilisk", "A Hungarian Horntail", "A Dementor"],
    answer: "A Basilisk"
  },
  {
    question: "What is the name of the wizarding newspaper?",
    options: ["The Daily Prophet", "The Wizard Weekly", "The Magical Times", "The Sorcerer's News"],
    answer: "The Daily Prophet"
  },
  {
    question: "What is the core of Harry Potter's wand?",
    options: ["Dragon heartstring", "Phoenix feather", "Unicorn hair", "Thestral tail hair"],
    answer: "Phoenix feather"
  },
  {
    question: "Which magical creature is known for pulling the carriages to Hogwarts?",
    options: ["Hippogriffs", "Thestrals", "Centaurs", "Unicorns"],
    answer: "Thestrals"
  },
  {
    question: "What spell is used to repel Dementors?",
    options: ["Expecto Patronum", "Expelliarmus", "Stupefy", "Lumos"],
    answer: "Expecto Patronum"
  },
  {
    question: "What is the name of Voldemort's snake?",
    options: ["Nagini", "Aragog", "Fawkes", "Hedwig"],
    answer: "Nagini"
  },
  // (You can continue adding more questions here)
];

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    // Select 5 random questions on page load
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 5));
  }, []);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    } else {
      setMistakes(mistakes + 1);
      if (mistakes + 1 >= 3) {
        setShowScore(true);
      }
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-yellow-50 py-8 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-400 text-center">Harry Potter Quiz</h1>

      {showScore ? (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-3xl mb-4">Final Score: {score}</h2>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-3xl">
          <p className="mb-4 text-xl md:text-2xl">{questions[currentQuestion]?.question}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions[currentQuestion]?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <p className="text-lg">Score: {score}</p>
            <p className="text-lg">Mistakes Left: {3 - mistakes}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
