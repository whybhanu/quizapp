import React, { useState } from 'react';
import Select from 'react-select';

const TypeOfQuiz = ({ onQuizStart }) => {
  const [selectCategory, setSelectCategory] = useState("IT");
  const [selectDifficulty, setSelectDifficulty] = useState("Easy");
  const [selectNoOfQues, setSelectNoOfQues] = useState("10");

  const handleSubmit = (event) => {
    event.preventDefault();
    onQuizStart(selectCategory, selectDifficulty, selectNoOfQues);
  };

  const difficulty = [
    { value: 'Easy', label: 'Easy' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Hard', label: 'Hard' }
  ];

  const noOfQues = [
    { value: '10', label: '10 Questions' },
    { value: '20', label: '20 Questions' },
    { value: '30', label: '30 Questions' },
  ];

  const category = [
    { value: '9', label: 'General Knowledge' },
    { value: '10', label: 'Entertainment: Books' },
    { value: '11', label: 'Entertainment: Film' },
    { value: '12', label: 'Entertainment: Music' },
    { value: '13', label: 'Entertainment: Musicals & Theatres' },
    { value: '14', label: 'Entertainment: Television' },
    { value: '15', label: 'Entertainment: Video Games' },
    { value: '16', label: 'Maths: Board Games' },
    { value: '17', label: 'Science and Nature' },
    { value: '18', label: 'Science: Computers' },
    { value: '19', label: 'Science: Mathematics ' },
    { value: '20', label: 'Mythology' },
    { value: '21', label: 'Sports' },
    { value: '22', label: 'Geography' },
    { value: '23', label: 'History' },
    { value: '24', label: 'Politics' },
    { value: '25', label: 'Arts' },
    { value: '26', label: 'Celebrity' },
    { value: '27', label: 'History' },
    { value: '28', label: 'Animals' },
    { value: '29', label: 'Vehicles' },
    { value: '30', label: 'Comics' },
    { value: '31', label: 'Science: Gadgets' },
    { value: '32', label: 'Entertainment: Japanese, Anime & Manga' },
    { value: '33', label: 'Entertainment: Cartoon and Animations' }
  ];

  return (
    <>
      <div className='bg-gray-800 quizType w-1/2 border-none shadow-2xl'>
        <form className='w-full text-center' onSubmit={handleSubmit}>
          <div className='flex justify-around m-6'>
            <h1 className='text-3xl m-2'>Type of Category: </h1>
            <Select className='text-black text-2xl w-1/2' options={category} onChange={(selectedOption) => setSelectCategory(selectedOption.value)} value={category.find(option => option.value === selectCategory)}></Select>
          </div>
          <div className='h-1 w-full bg-red-600 lg'></div>
          <div className='flex justify-around m-6'>
            <h1 className=' text-3xl m-2'>Type of Difficulty</h1>
            <Select className='text-black text-2xl w-1/2' options={difficulty} onChange={(selectedOption) => setSelectDifficulty(selectedOption.value)} value={difficulty.find(option => option.value === selectDifficulty)}></Select>
          </div>
          <div className='h-1 w-full bg-green-600 lg'></div>
          <div className='flex justify-around m-6'>
            <h3 className='text-3xl m-2'>No. of Questions</h3>
            <Select className='text-2xl text-black w-1/2' options={noOfQues} onChange={(selectedOption) => setSelectNoOfQues(selectedOption.value)} value={noOfQues.find(option => option.value === selectNoOfQues)}></Select>
          </div>
          <div className='h-1 w-full bg-blue-600 lg'></div>
          <button type='submit' className='btn border-2 mt-10 p-4 text-2xl bg-green-400 border-none rounded-2xl text-white hover:bg-green-600'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default TypeOfQuiz;
