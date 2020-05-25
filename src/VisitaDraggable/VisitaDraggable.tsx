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

  const handleDragStop: DraggableEventHandler = (e) => {
    e.stopPropagation()
    if (window.confirm('Vuoi davvero spostare la visita?')) {
      handleEndDrag(id, tempDay, tempTime)
    }
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
      position={{ x: 0, y: 0 }}
    >
      <div ref={nodeRef} className={styles.draggableDiv}>{`${day} ${time}`}</div>
    </Draggable>
  )
}

export default VisitaDraggable
