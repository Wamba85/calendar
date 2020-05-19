import React from 'react'
import styles from './Calendar.module.css'
import Modal from '../Modal/Modal'

type Props = {
  weekdays: number[]
  timeslot: 5 | 6 | 8 | 9 | 10 | 12 | 15 | 16 | 18 | 20 | 24 | 30 | 32 | 36 | 40 | 45 | 48 | 60
}
const Calendar = ({ timeslot = 60, weekdays }: Props): JSX.Element => {
  const [open, setOpen] = React.useState(false)
  const [oraDa, setOraDa] = React.useState('0:00')
  const [oraA, setOraA] = React.useState('0:00')

  const handleClickOpen = (oraDa: string, oraA: string): void => {
    setOpen(true)
    setOraDa(oraDa)
    setOraA(oraA)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  const slotNumber = 1440 / timeslot
  const times: string[] = []
  for (let i = 0; i < slotNumber; i++) {
    const minutes = timeslot * i
    const m = minutes % 60
    const h = (minutes - m) / 60
    let sm = m.toString()
    if (m < 10) sm = '0' + m
    const time = `${h}:${sm}`
    times.push(time)
  }

  const timeTables = times.map((time) => {
    return (
      <div key={`timetable${time}`} className={styles.timetable}>
        <span className={styles.timeSpan}>{time}</span>
      </div>
    )
  })

  const weekDaysString = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const eventCols = weekDaysString.map((day) => {
    const eventSlots = times.map((time, index) => {
      return (
        <div
          key={`event${day}-${time}`}
          onClick={(): void => handleClickOpen(time, times[(index + 1) % slotNumber])}
          className={styles.eventSlot}
        >{`${day}-${time}-${times[(index + 1) % slotNumber]}`}</div>
      )
    })

    return (
      <div key={`eventCol${day}`} className={styles.eventCol}>
        {eventSlots}
      </div>
    )
  })

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
      <Modal open={open} handleClose={handleClose} oraDa={oraDa} oraA={oraA}></Modal>
    </div>
  )
}

export default Calendar
