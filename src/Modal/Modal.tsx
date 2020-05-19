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
        <TextField autoFocus margin="dense" label="Nominativo" type="text" fullWidth />
        <TextField margin="dense" label="Data di nascita" type="text" fullWidth />
        <TextField margin="dense" label="Codice Fiscale" type="text" fullWidth />
        <TextField margin="dense" label="Cellulare" type="email" fullWidth />
        <TextField margin="dense" label="Telefono" type="email" fullWidth />
        <TextField margin="dense" label="Email" type="email" fullWidth />
        <TextField margin="dense" label="Descrizione visita" type="text" multiline rows={10} fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Annulla
        </Button>
        <Button onClick={handleClose} color="primary">
          Inserisci
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal
