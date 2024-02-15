import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz';
import TypeOfQuiz from './components/TypeOfQuiz';

function App() {
  return (
    <>
    <div>
      <h1 className='pt-4 pb-4 text-3xl text-center font-bold bg-black text-white'>My Quiz Page</h1>
    </div>
    {/* <Quiz/> */}
      <TypeOfQuiz/>
    </>
  )
}

export default App
