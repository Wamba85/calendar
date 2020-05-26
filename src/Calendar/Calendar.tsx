import React, { useState, useEffect, useRef } from 'react'
import styles from './Calendar.module.css'
import Modal from '../Modal/Modal'
import VisitaDraggable from '../VisitaDraggable/VisitaDraggable'

type Props = {
  weekdays: number[]
  timeslot: 5 | 6 | 8 | 9 | 10 | 12 | 15 | 16 | 18 | 20 | 24 | 30 | 32 | 36 | 40 | 45 | 48 | 60
}
const Calendar = ({ timeslot = 60, weekdays }: Props): JSX.Element => {
  const eventSlot = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [oraDa, setOraDa] = useState('0:00')
  const [oraA, setOraA] = useState('0:00')
  const [width, setWidth] = useState(
    eventSlot !== null && eventSlot.current !== null ? eventSlot.current.offsetWidth : 100,
  )
  const [visite, setVisite] = useState([
    {
      id: 1,
      day: 'Mon',
      time: '10:00',
    },
    {
      id: 2,
      day: 'Tue',
      time: '12:00',
    },
  ])

  useEffect(() => {
    if (eventSlot !== null && eventSlot.current !== null) setWidth(eventSlot.current.offsetWidth)
  }, [])

  useEffect(() => {
    function handleResize(): void {
      if (eventSlot !== null && eventSlot.current !== null) setWidth(eventSlot.current.offsetWidth)
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
  }, [])

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

  const handleEndDrag = (id: number, day: number, time: number): void => {
    const visita = visite.find((v) => v.id == id)
    let oldIndexTime: number
    let oldIndexDay: number
    if (visita) {
      oldIndexTime = times.findIndex((t) => t == visita.time)
      oldIndexDay = weekDaysString.findIndex((d) => d == visita.day)
    }
    setVisite(
      visite.map((visita) =>
        visita.id === id
          ? { ...visita, day: weekDaysString[oldIndexDay + day], time: times[oldIndexTime + time] }
          : visita,
      ),
    )
    console.log(`Day: ${day} - Time: ${time}`)
  }

  const eventCols = weekDaysString.map((day) => {
    const eventSlots = times.map((time, index) => {
      const visita = visite.find((visita) => visita.day == day && visita.time == time)
      return (
        <div
          key={`event${day}-${time}`}
          ref={day == 'Sun' && index == 0 ? eventSlot : null}
          className={styles.eventSlot}
          {...(!visita && { onMouseDown: (): void => handleClickOpen(time, times[(index + 1) % slotNumber]) })}
        >
          {visita && (
            <VisitaDraggable
              width={width}
              id={visita.id}
              day={visita.day}
              time={visita.time}
              handleEndDrag={handleEndDrag}
            />
          )}
        </div>
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
        <div id="eventSlotContainer" className={styles.eventSlotConteiner}>
          {eventCols}
        </div>
      </div>
      <Modal open={open} handleClose={handleClose} oraDa={oraDa} oraA={oraA}></Modal>
    </div>
  )
}

export default Calendar
