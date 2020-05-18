import React from 'react'
import styles from './Calendar.module.css'
import Modal from '../Modal/Modal'

type Props = {
  weekdays: number[]
  timeslot: 5 | 6 | 8 | 9 | 10 | 12 | 15 | 16 | 18 | 20 | 24 | 30 | 32 | 36 | 40 | 45 | 48 | 60
}
const Calendar = ({ timeslot = 60, weekdays }: Props): JSX.Element => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }
  const eventCols = []
  const slotNumber = 1440 / timeslot
  const timeTables = []
  for (let i = 0; i < slotNumber; i++) {
    const minutes = timeslot * i
    const m = minutes % 60
    const h = (minutes - m) / 60
    let sm = m.toString()
    if (m < 10) sm = '0' + m
    const time = `${h}:${sm}`
    timeTables.push(
      <div key={`timetable${time}`} className={styles.timetable}>
        <span className={styles.timeSpan}>{time}</span>
      </div>,
    )
  }
  for (let i = 0; i < 7; i++) {
    const eventSlots = []
    for (let j = 0; j < slotNumber; j++) {
      eventSlots.push(
        <div key={`event${i}-${j}`} onClick={handleClickOpen} className={styles.eventSlot}>{`${i}-${j}`}</div>,
      )
    }
    eventCols.push(
      <div key={`eventCol${i}`} className={styles.eventCol}>
        {eventSlots}
      </div>,
    )
  }
  const weekDaysString = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const weekDays = weekdays.map((day, i) => {
    return (
      <div key={`${weekDaysString[i]}-${day}`} className={styles.weekday}>
        <div className={styles.weekdayString}>{weekDaysString[i]}</div>
        <div className={styles.weekdayNumber}>{day}</div>
      </div>
    )
  })
  weekDays.unshift(<div key="blankDay" className={styles.weekday}></div>)

  return (
    <div>
      <div className={styles.weekdayContainer}>{weekDays}</div>
      <div className={styles.eventColsContainer}>
        <div className={styles.timetablesContainer}>{timeTables}</div>
        {eventCols}
      </div>
      <Modal open={open} handleClose={handleClose}></Modal>
    </div>
  )
}

export default Calendar
