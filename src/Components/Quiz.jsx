import React, { useState, useEffect } from 'react';
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

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 5));
  }, []);

  const handleAnswer = (option) => {
    if (isDisabled) return;

    const isCorrect = option === questions[currentQuestion].answer;
    setSelectedOption(option);
    setCorrectAnswer(questions[currentQuestion].answer);
    setAnswerStatus(isCorrect ? 'correct' : 'incorrect');
    setIsDisabled(true);

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
        setIsDisabled(false);
      } else {
        setShowScore(true);
      }
    }, 1500);
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
                disabled={isDisabled}
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

