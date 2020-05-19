import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiDialogContentText: {
      root: {
        backgroundColor: '#e8eef7',
        border: '#346399 solid 1px',
        borderRadius: '2px',
        padding: '1rem',
      },
    },
    MuiDialogTitle: {
      root: {
        backgroundColor: '#5a94ce',
        color: '#ffffff',
      },
    },
  },
})

export default theme
