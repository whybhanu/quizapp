import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz';

function App() {
  return (
    <>
    <div className='mb-5'>
      <h1 className='pt-4 pb-4 text-3xl text-center font-bold bg-black text-white'>My Quiz Page</h1>
    </div>
    <Quiz/>
    </>
  )
}

export default App
