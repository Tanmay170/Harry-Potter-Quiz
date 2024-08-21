// src/App.js
import React from 'react';
import Quiz from './Components/Quiz';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">Harry Potter Quiz</h1>
      </header>
      <Quiz />
    </div>
  );
}

export default App;
