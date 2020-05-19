import React from 'react'
import './App.css'
import Calendar from './Calendar/Calendar'
import { ThemeProvider } from '@material-ui/core'
import theme from './styles/calendarTheme'

function App(): JSX.Element {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Calendar timeslot={30} weekdays={[12, 13, 14, 15, 16, 17, 18]} />
      </ThemeProvider>
    </div>
  )
}

export default App
