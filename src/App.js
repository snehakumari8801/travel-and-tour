import './App.css';
import data from "./data";
import { useState } from 'react';
import Tours from './components/Tours';


function App() {
  let[tours , setTours] = useState(data);

  function deletehandler(id){
    let newTour = tours.filter(tour => tour.id !== id);
       setTours(newTour);
     }

  
    if(tours.length === 0){
      return(
        <div className="refresh">
          <h2 id='empty-tour'>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
      )
      setTours(data);
    }
  
    
  
    
  
  return (
    <div className="App">
    <h1>Travel with me</h1>
      <Tours tours={tours} setTours={setTours}  deletehandler={deletehandler}/>
    
    </div>
  );
}

export default App;
