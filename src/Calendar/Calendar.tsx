import React from 'react'
import styles from './Calendar.module.css'

const Calendar = (): JSX.Element => {
  const eventCols = []
  for (let i = 0; i < 7; i++) {
    let eventSlots = []
    for (let j = 0; j < 24; j++) {
      eventSlots.push(<div key={`event${i}-${j}`} className={styles.eventSlot}>{`${i}-${j}`}</div>)
    }
    eventCols.push(
      <div key={`eventCol${i}`} className={styles.eventCol}>
        {eventSlots}
      </div>,
    )
  }
  return (
    <div>
      <div className={styles.weekdayContainer}>
        <div className={styles.weekday}></div>
        <div className={styles.weekday}>Sun</div>
        <div className={styles.weekday}>Mon</div>
        <div className={styles.weekday}>Tue</div>
        <div className={styles.weekday}>Wed</div>
        <div className={styles.weekday}>Thu</div>
        <div className={styles.weekday}>Fri</div>
        <div className={styles.weekday}>Sat</div>
      </div>
      <div className={styles.eventColsContainer}>
        <div className={styles.timetablesContainer}>
          <div className={styles.timetable}>00:00</div>
          <div className={styles.timetable}>01:00</div>
          <div className={styles.timetable}>02:00</div>
          <div className={styles.timetable}>03:00</div>
          <div className={styles.timetable}>04:00</div>
          <div className={styles.timetable}>05:00</div>
          <div className={styles.timetable}>06:00</div>
          <div className={styles.timetable}>07:00</div>
          <div className={styles.timetable}>08:00</div>
          <div className={styles.timetable}>09:00</div>
          <div className={styles.timetable}>10:00</div>
          <div className={styles.timetable}>11:00</div>
          <div className={styles.timetable}>12:00</div>
          <div className={styles.timetable}>13:00</div>
          <div className={styles.timetable}>14:00</div>
          <div className={styles.timetable}>15:00</div>
          <div className={styles.timetable}>16:00</div>
          <div className={styles.timetable}>17:00</div>
          <div className={styles.timetable}>18:00</div>
          <div className={styles.timetable}>19:00</div>
          <div className={styles.timetable}>20:00</div>
          <div className={styles.timetable}>21:00</div>
          <div className={styles.timetable}>22:00</div>
          <div className={styles.timetable}>23:00</div>
        </div>
        {eventCols}
      </div>
    </div>
  )
}

export default Calendar
