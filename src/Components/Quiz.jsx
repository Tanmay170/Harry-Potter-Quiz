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
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(''); // 'correct' | 'incorrect' | ''
  const [isDisabled, setIsDisabled] = useState(false); // Button disabled state

  useEffect(() => {
    // Select 5 random questions on page load
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 5));
  }, []);

  const handleAnswer = (option) => {
    if (isDisabled) return; // Prevent actions while feedback is shown

    const isCorrect = option === questions[currentQuestion].answer;
    setSelectedOption(option);
    setCorrectAnswer(questions[currentQuestion].answer);
    setAnswerStatus(isCorrect ? 'correct' : 'incorrect');
    setIsDisabled(true); // Disable buttons during feedback

    if (isCorrect) {
      setScore(score + 1);
    } else {
      setMistakes(mistakes + 1);
      if (mistakes + 1 >= 3) {
        setShowScore(true);
        return;
      }
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
        setCorrectAnswer(null);
        setAnswerStatus('');
        setIsDisabled(false); // Re-enable buttons for the next question
      } else {
        setShowScore(true);
      }
    }, 1500); // Delay of 1.5 seconds
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gray-900 text-yellow-50">
      <h1 className="mb-8 text-4xl font-bold text-center text-yellow-400 md:text-5xl">Harry Potter Quiz</h1>

      {showScore ? (
        <div className="p-6 text-center bg-gray-800 rounded-lg shadow-md">
          <h2 className="mb-4 text-3xl">Final Score: {score}</h2>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 font-bold text-white bg-yellow-600 rounded-lg hover:bg-yellow-700"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="w-full max-w-3xl p-6 bg-gray-800 rounded-lg shadow-md">
          <p className="mb-4 text-xl md:text-2xl">{questions[currentQuestion]?.question}</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {questions[currentQuestion]?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={isDisabled} // Disable buttons during feedback
                className={`font-bold py-2 px-4 rounded-lg ${
                  option === correctAnswer ? 
                    (option === selectedOption ? 'bg-green-600' : 'bg-green-800') :
                    (option === selectedOption && answerStatus === 'incorrect' ? 'bg-red-600' : 'bg-yellow-600 hover:bg-yellow-700')
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between mt-6">
            <p className="text-lg">Score: {score}</p>
            <p className="text-lg">Mistakes Left: {3 - mistakes}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;

