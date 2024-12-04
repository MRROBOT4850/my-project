import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
import Tours from './components/Tours'


function App() {

  const [tours,setData]=useState(data)
  function removeTours(id){
      const newTours=tours.filter(tour=>tour.id!==id);
      setData(newTours);
    
  }
  if (tours.length===0) {
    return(
        <div>
          <div className='refresh'>
            <h2> No Tours Left</h2>
            <button className='btnWhite' onClick={() => setData(data)}>Reset</button>
          </div>
         
        </div>
    )
  }


  return (
    <div className='App'>
        <Tours tours={tours} removeTours={removeTours}></Tours>
    </div>
  )
}

export default App
