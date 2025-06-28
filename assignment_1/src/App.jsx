import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Increament = () =>{
      setCount(count + 1 );
  }

  const Decrement = () => {
    setCount(count - 1);
  }

  return (
    <>
      
         <div className=' h-screen bg-green-600'>
          <h1 className='bg-blue-700 h-[40px]'>Counter : {count} </h1>
          <div className='bg-yellow-500 h-[50px] ' >
             <button  onClick={Increament} type='button' className='tex-white bg-slate-800 hover:bg-slate-500 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:ring-slate-800 '>Increase</button>
          </div>
         
         <div>
              <button className='tex-white bg-blue-800 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ' onClick={Decrement}>Decrease</button>
         </div>
         
         </div>
     
    </>
  )
}

export default App
