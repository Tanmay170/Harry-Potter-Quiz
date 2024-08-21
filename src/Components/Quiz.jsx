import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
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
      question: "What does the spell Alohomora do?",
      options: ["Unlocks doors", "Lights up wands", "Levitates objects", "Summons items"],
      answer: "Unlocks doors"
   }, 
 {
      question: "Who was the headmaster of Hogwarts before Albus Dumbledore?",
      options: ["Phineas Nigellus Black ", "Armando Dippet", "Dilys Derwent", "Dexter Fortescue"],
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
{
    question: "Who was the founder of the house of Gryffindor?",
    options: ["Helga Hufflepuff", "Salazar Slytherin", "Godric Gryffindor", "Rowena Ravenclaw"],
    answer: "Godric Gryffindor"
},
{
    question: "Which potion allows a person to assume the form of someone else?",
    options: ["Polyjuice Potion", "Veritaserum", "Amortentia", "Felix Felicis"],
    answer: "Polyjuice Potion"
},
{
    question: "What position does Harry play on his Quidditch team?",
    options: ["Beater", "Chaser", "Keeper", "Seeker"],
    answer: "Seeker"
},
{
    question: "What is the name of the Weasley's house?",
    options: ["The Shack", "The Cottage", "The Burrow", "The Nest"],
    answer: "The Burrow"
},
{
    question: "Who teaches Transfiguration at Hogwarts?",
    options: ["Professor Snape", "Professor McGonagall", "Professor Flitwick", "Professor Sprout"],
    answer: "Professor McGonagall"
},
{
    question: "What is the name of Hermione's cat?",
    options: ["Crookshanks", "Scabbers", "Hedwig", "Trevor"],
    answer: "Crookshanks"
},
{
    question: "What is the name of the magical map that shows everyone's location at Hogwarts?",
    options: ["The Marauder's Map", "The Hogwarts Atlas", "The Wizard's Guide", "The Enchanted Map"],
    answer: "The Marauder's Map"
},
{
    question: "Which house did the Sorting Hat almost place Harry in?",
    options: ["Hufflepuff", "Ravenclaw", "Slytherin", "Gryffindor"],
    answer: "Slytherin"
},
{
    question: "What is Dobby?",
    options: ["A goblin", "A house-elf", "A troll", "A centaur"],
    answer: "A house-elf"
},
{
    question: "Who was the master of the Elder Wand before Harry?",
    options: ["Draco Malfoy", "Severus Snape", "Albus Dumbledore", "Voldemort"],
    answer: "Draco Malfoy"
},
{
    question: "What is the name of the wizarding bank in Diagon Alley?",
    options: ["Gringotts", "Ollivanders", "Flourish & Blotts", "The Leaky Cauldron"],
    answer: "Gringotts"
},
{
    question: "Who is the author of the textbook 'Fantastic Beasts and Where to Find Them'?",
    options: ["Albus Dumbledore", "Gilderoy Lockhart", "Newt Scamander", "Bathilda Bagshot"],
    answer: "Newt Scamander"
},
{
    question: "Which magical object did Dumbledore leave to Hermione in his will?",
    options: ["The Sword of Gryffindor", "The Deluminator", "The Tales of Beedle the Bard", "The Resurrection Stone"],
    answer: "The Tales of Beedle the Bard"
},
{
    question: "What spell would you use to disarm an opponent?",
    options: ["Lumos", "Expelliarmus", "Wingardium Leviosa", "Obliviate"],
    answer: "Expelliarmus"
},
{
    question: "What magical ability does Harry share with Voldemort?",
    options: ["Parseltongue", "Occlumency", "Legilimency", "Animagus"],
    answer: "Parseltongue"
},
{
    question: "What form does Hermione's Patronus take?",
    options: ["A horse", "An otter", "A rabbit", "A cat"],
    answer: "An otter"
},
{
    question: "What is the spell used to unlock doors?",
    options: ["Alohomora", "Accio", "Stupefy", "Reducto"],
    answer: "Alohomora"
},
{
    question: "What is the name of Hagrid's half-brother?",
    options: ["Grawp", "Karkus", "Hagrid", "Fridwulfa"],
    answer: "Grawp"
},
{
    question: "Which house is known for its loyalty?",
    options: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
    answer: "Hufflepuff"
},
{
    question: "What plant is used to cure petrification?",
    options: ["Gillyweed", "Wolfsbane", "Mandrake", "Devil's Snare"],
    answer: "Mandrake"
},
{
    question: "Who is the conductor of the Knight Bus?",
    options: ["Stan Shunpike", "Ernie Prang", "Tom", "Mundungus Fletcher"],
    answer: "Stan Shunpike"
}
  ];
  const quizQuestions = [...questions].sort(() => Math.random() - 0.5).slice(0, 5);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [answerStatus, setAnswerStatus] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswerSelection = (option) => {
    if (showFeedback) return;

    const correct = option === quizQuestions[currentQuestionIndex].answer;
    setSelectedOption(option);
    setAnswerStatus(correct ? "correct" : "incorrect");
    setFeedbackMessage(correct ? "Correct!" : "Incorrect!");

    if (correct) {
      setScore(score + 1);
    } else {
      setErrors(errors + 1);
      if (errors + 1 >= 3) {
        setGameOver(true);
        return;
      }
    }

    setShowFeedback(true);
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedOption("");
      setFeedbackMessage("");
      setAnswerStatus(null);

      if (currentQuestionIndex < quizQuestions.length - 1 && !gameOver) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setGameOver(true);
      }
    }, 1000);
  };

  const startNewGame = () => {
    setScore(0);
    setErrors(0);
    setCurrentQuestionIndex(0);
    setGameOver(false);
    setQuizStarted(false);
  };

  const startQuiz = () => {
    setQuizStarted(true);
  };

  if (!quizStarted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-3/5 bg-gradient-to-b from-gray-800 to-yellow-800 text-white">
        <h1 className="text-4xl font-bold mb-6">Harry Potter Quiz</h1>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg">
          <h2 className="text-xl font-semibold mb-4">Rules</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Answer 5 questions in each round.</li>
            <li>You are allowed only 3 incorrect answers.</li>
            <li>Each correct answer gives you 1 point.</li>
            <li>After 3 errors, the game ends and your final score will be displayed.</li>
          </ul>
          <button
            onClick={startQuiz}
            className="px-6 py-2 bg-yellow-600 rounded hover:bg-yellow-500 transition-colors"
          >
            Start Now
          </button>
        </div>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-3/5 bg-gradient-to-b from-gray-800 to-yellow-800 text-white">
        <h1 className="text-4xl mb-4">Final Score: {score}</h1>
        <button
          className="px-6 py-2 bg-yellow-600 rounded hover:bg-yellow-500 transition-colors"
          onClick={startNewGame}
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-3/5 bg-gradient-to-b from-gray-800 to-yellow-800 text-white">
      <h1 className="text-4xl font-bold mb-6">Harry Potter Quiz</h1>
      <div className="w-full max-w-md p-4 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          {quizQuestions[currentQuestionIndex].question}
        </h2>
        <div className="flex flex-col space-y-4">
          {quizQuestions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelection(option)}
              className={`py-2 px-4 rounded transition-colors ${
                showFeedback
                  ? option === quizQuestions[currentQuestionIndex].answer
                    ? answerStatus === "correct"
                      ? "bg-green-500"
                      : "bg-gray-700"
                    : answerStatus === "incorrect" && selectedOption === option
                    ? "bg-red-500"
                    : "bg-gray-700"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
              disabled={showFeedback}
            >
              {option}
            </button>
          ))}
        </div>
        {showFeedback && (
          <div className={`mt-4 text-xl ${answerStatus === "correct" ? "text-green-500" : "text-red-500"}`}>
            {feedbackMessage}
          </div>
        )}
        <div className="mt-4 flex justify-between">
          <span>Score: {score}</span>
          <span>Errors: {errors}/3</span>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
