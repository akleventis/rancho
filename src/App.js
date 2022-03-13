import { useState } from 'react';
import './App.css';
import Note from './Note.js'
import Calendar from './Calendar.js'
import Spreadsheet from './Spreadsheet';

function App() {
  const [iframe, setiframe] = useState(Calendar)

  const calendar = () => {
    setiframe(Calendar)
  }
  const note = () => {
    setiframe(Note)
  }
  const spreadsheet = () => {
    setiframe(Spreadsheet)
  }
  return (
    <div className="App">
      <div className="heading" id="heading">
        <h3>Rancho Maria Mens Club ⛳️</h3>
         <div className="nav-container">
            <>
              <h4 onClick={spreadsheet}>Spreadsheet</h4>
            </>
            <>
              <h4 onClick={calendar}>Calendar</h4>
            </>
            <>
              <h4 onClick={note}>Presidents Note</h4>
            </>
          </div> 
      </div>
      <div className='frame'>
          {iframe}
      </div>
    </div>
  );
}

export default App;
