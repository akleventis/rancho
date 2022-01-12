import { useState } from 'react';
import './App.css';
import Main from './Home.js'
import Calendar from './Calendar.js'
import Spreadsheet from './Spreadsheet';

function App() {
  const [iframe, setiframe] = useState(Main)

  const calendar = () => {
    setiframe(Calendar)
  }
  const home = () => {
    setiframe(Main)
  }
  const spreadsheet = () => {
    setiframe(Spreadsheet)
  }
  return (
    <div className="App">
      <div className="heading" id="heading">
        <h3>Rancho Maria Mens Club</h3>
         <div className="nav-container">
            <p>
              <h4 onClick={calendar}>Calendar</h4>
            </p>
            <p>
              <h4 onClick={home}>Home Page</h4>
            </p>
            <p>
              <h4 onClick={spreadsheet}>Spreadsheet</h4>
            </p>
          </div> 
      </div>
      <div className='frame'>
          {iframe}
      </div>
    </div>
  );
}

export default App;
