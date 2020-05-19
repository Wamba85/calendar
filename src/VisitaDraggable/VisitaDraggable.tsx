import React from 'react'
import Draggable from 'react-draggable'

const VisitaDraggable = (): JSX.Element => {
  return (
    <Draggable grid={[25, 25]}>
      <div>test draggable</div>
    </Draggable>
  )
}

export default VisitaDraggable
