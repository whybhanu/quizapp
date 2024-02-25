import React from 'react'
import Select from 'react-select';
const TypeOfQuiz = () => {
  const difficulty = [
    {value: 'Easy', label:'Easy'},
    {value: 'Medium', label:'Medium'},
    {value: 'Hard', label:'Hard'}
  ]
  const noOfQues = [
    {value: '10',label:'10 Questions'},
    {value: '20',label:'20 Questions'},
    {value: '30',label:'30 Questions'},
  ]
  const category = [
    {value: 'IT', label: 'IT'},
    {value: 'Aptitude', label: 'Aptitude'},
    {value: 'Maths', label: 'Maths'}
  ]
  const formCategory = (event) => {
    event.preventDefault(); 
  }
  return (
    <>
    <div className='border-2 shadow-xl m-10 p-12'>
        <form className='w-full text-center' action="" onSubmit={formCategory}>
            <div className='flex justify-around m-6'>
              <h1 className='text-3xl m-2'>Type of Category: </h1>
              <Select className='text-2xl w-1/2' options={category}></Select>
            </div>
            <div className='h-1 w-full bg-red-600 lg'></div>
            <div className='flex justify-around m-6'>
              <h1 className=' text-3xl m-2'>Type of Difficulty</h1>
              <Select className='text-2xl w-1/2' options={difficulty}></Select>
            </div>
            <div className='h-1 w-full bg-green-600 lg'></div>
            <div className='flex justify-around m-6'>
              <h3 className=' text-3xl m-2'>No. of Questions</h3>
              <Select className='text-2xl w-1/2' options={noOfQues}></Select>
            </div>
            <div className='h-1 w-full bg-blue-600 lg'></div>
            <button className='btn border-2 mt-10 p-4 text-2xl bg-green-400 border-none rounded-2xl text-white hover:bg-green-600'>Submit</button>
        </form>
    </div>
    </>
  )
}

export default TypeOfQuiz