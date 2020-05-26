import React, { useRef, useState } from 'react'
import Draggable, { DraggableEventHandler, DraggableEvent, DraggableData } from 'react-draggable'
import { Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core'
import styles from './VisitaDraggable.module.css'

type Props = {
  width: number
  id: number
  day: string
  time: string
  handleEndDrag: (id: number, day: number, time: number) => void
}

const VisitaDraggable = ({ width, id, day, time, handleEndDrag }: Props): JSX.Element => {
  const [open, setOpen] = useState(false)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [tempDay, setTempDay] = useState(0)
  const [tempTime, setTempTime] = useState(0)

  const nodeRef = useRef(null)

  const handleDrag: DraggableEventHandler = (e, ui) => {
    console.log(ui.deltaX)
    console.log(ui.deltaY)

    if (ui.deltaX > 0) {
      setTempDay(tempDay + 1)
    }
    if (ui.deltaX < 0) {
      setTempDay(tempDay - 1)
    }
    if (ui.deltaY > 0) {
      setTempTime(tempTime + 1)
    }
    if (ui.deltaY < 0) {
      setTempTime(tempTime - 1)
    }
  }

  const handleDragStop: DraggableEventHandler = (e: DraggableEvent, data: DraggableData) => {
    console.log(data)
    setX(data.x - data.deltaX)
    setY(data.y - data.deltaY)
    setOpen(true)
  }

  const handleCloseCancel = (): void => {
    console.log('close')
    setX(0)
    setY(0)
    setTempTime(0)
    setTempDay(0)
    setOpen(false)
  }

  const handleCloseConfirm = (): void => {
    setOpen(false)
    handleEndDrag(id, tempDay, tempTime)
  }

  return (
    <React.Fragment>
      <Draggable
        // eslint-disable-next-line
        // @ts-ignore
        nodeRef={nodeRef}
        grid={[width, 50]}
        bounds={'#eventSlotContainer'}
        onDrag={handleDrag}
        onStop={handleDragStop}
        position={{ x: x, y: y }}
      >
        <div ref={nodeRef} className={styles.draggableDiv}>{`${day} ${time}`}</div>
      </Draggable>
      <Dialog open={open} onClose={handleCloseCancel} aria-labelledby="form-dialog-title">
        <DialogTitle>Vuoi spostare la visita?</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseCancel} color="primary">
            Annulla
          </Button>
          <Button onClick={handleCloseConfirm} color="primary">
            Inserisci
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default VisitaDraggable
