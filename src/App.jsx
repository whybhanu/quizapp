import React, { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import TypeOfQuiz from './components/TypeOfQuiz';

function App() {
  const [quizParams, setQuizParams] = useState(null);

  const handleQuizStart = (category, difficulty, noOfQues) => {
    setQuizParams({ category, difficulty, noOfQues });
  };

  return (
    <>
      <div>
        <div className='p-10 text-5xl text-center font-bold bg-black text-white'>My Quiz Page</div>
      </div>
      {quizParams ? (
        <Quiz category={quizParams.category} difficulty={quizParams.difficulty} noOfQues={quizParams.noOfQues} />
      ) : (
        <TypeOfQuiz onQuizStart={handleQuizStart} />
      )}
    </>
  );
}

export default App;
