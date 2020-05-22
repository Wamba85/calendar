import React, { useRef } from 'react'
import Draggable, { DraggableEventHandler } from 'react-draggable'
import styles from './VisitaDraggable.module.css'

type Props = {
  width: number
  id: number
  day: string
  time: string
  handleEndDrag: (id: number, day: number, time: number) => void
}

const VisitaDraggable = ({ width, id, day, time, handleEndDrag }: Props): JSX.Element => {
  const nodeRef = useRef(null)
  let tempDay = 0,
    tempTime = 0
  const handleDrag: DraggableEventHandler = (e, ui) => {
    console.log(ui.deltaX)
    console.log(ui.deltaY)
    if (ui.deltaX > 0) {
      tempDay++
    }
    if (ui.deltaX < 0) {
      tempDay--
    }
    if (ui.deltaY > 0) {
      tempTime++
    }
    if (ui.deltaY < 0) {
      tempTime--
    }
  }

  const handleDragStop: DraggableEventHandler = (e, ui) => {
    console.log(tempDay)
    console.log(tempTime)
    handleEndDrag(id, tempDay, tempTime)
  }

  return (
    <Draggable
      // eslint-disable-next-line
      // @ts-ignore
      nodeRef={nodeRef}
      grid={[width, 50]}
      bounds={'#eventSlotContainer'}
      onDrag={handleDrag}
      onStop={handleDragStop}
    >
      <div ref={nodeRef} className={styles.draggableDiv}>{`${day} ${time}`}</div>
    </Draggable>
  )
}

export default VisitaDraggable
