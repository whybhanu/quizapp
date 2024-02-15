import React, { useEffect, useState} from 'react'
import axios from 'axios';

const Quiz = () => {
  const[count, setCount] = useState(1);
  const [data, setData] = useState([]);
  useEffect (() => {
    const fetchData = async () => {
      try{
        const res = await axios.get('https://opentdb.com/api.php?amount=30&category=11&difficulty=medium&type=multiple&encode=url3986');
        setData(res.data.results);
        console.log("Fetching Successful");
      } catch(error){
        console.log("Error fetching data" + error);
      }
    }
    fetchData();
  }, []);
  console.log(data);
  const nextQues = () => {
      setCount(count+1);
  }
  const  prevQues = ()=>{
    setCount(count-1);
  }

  return (
    <>
      <div className='quizPage mt-5 w-3/5 border-4 border-rose-500 rounded-md  m-auto shadow-2xl'>
        <h3 className='font-bold text-2xl p-4 pl-5'>{count} What is your name?</h3>
        <ul className='text-xl p-4 pl-5'>
          <li className='mb-4'>
            <input className='mr-3' type="radio" name="question1" id="option1" value="option1Value" />
            <label htmlFor="option1">Rohan</label>
          </li>
          <li className='mb-4'>
            <input className='mr-3' type="radio" name="question1" id="option2" value="option2Value" />
            <label htmlFor="option2">Soham</label>
          </li>
          <li className='mb-4'>
            <input className='mr-3' type="radio" name="question1" id="option3" value="option3Value" />
            <label htmlFor="option3">Mohan</label>
          </li>
          <li className='mb-4'>
            <input className='mr-3' type="radio" name="question1" id="option4" value="option4Value" />
            <label htmlFor="option4">Krishn</label>
          </li>
        </ul>
        <div className='flex justify-between items-center h-16  mt-6'>
          <div>
            <button onClick={prevQues} className='border-2 rounded-md bg-black text-white border-rose-500 p-3 m-4 shadow-lg hover:bg-red-600 shadow-lg'>Previous</button>
            <button onClick={nextQues} className='border-2 rounded-md bg-black text-white border-rose-500 p-3 m-4 shadow-lg hover:bg-blue-600 shadow-lg'>Next</button>
          </div>
          <div>
            <button className='border-2 rounded-md bg-black text-white border-rose-500 p-3 m-4 shadow-lg hover:bg-green-600 shadow-lg'>Submit</button>
          </div>
        </div>

      </div>
        
    </>
  )
}

export default Quiz