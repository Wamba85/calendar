import React from 'react'
import './App.css'
import Calendar from './Calendar/Calendar'

function App(): JSX.Element {
  return (
    <div className="App">
      <Calendar timeslot={30} weekdays={[12, 13, 14, 15, 16, 17, 18]} />
    </div>
  )
}

export default App
