import React from 'react'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from '@material-ui/core'

type Props = {
  open: boolean
  handleClose: (event: React.MouseEvent<HTMLButtonElement>) => void
  oraDa: string
  oraA: string
}

const Modal = ({ open, handleClose, oraDa, oraA }: Props): JSX.Element => {
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Nuova Visita</DialogTitle>
      <DialogContent>
        <DialogContentText>{`ora da: ${oraDa} ora a: ${oraA}`}</DialogContentText>
        <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal
