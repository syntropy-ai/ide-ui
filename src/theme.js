import { createMuiTheme } from '@material-ui/core/styles'

const defaultTheme = createMuiTheme()

const theme = {
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    fontSize: 15,
    title: {
      fontSize: '1.15rem'
    }
  },
  palette: {
    type: 'dark',
    primary: {
      light: '#4bc8e1',
      main: '#4bc8e1',
      dark: '#2da2b9',
      contrastText: '#FFF'
    },
    background: {
      paper: '#30393a',
      default: '#212b2c',
      darker: '#151f21'
    }
  },
  spacing: {
    unit: 4
  }
}

theme.overrides = {
  MuiTabs: {
    root: {
      position: 'relative',
      minHeight: '30px',
      height: '30px'
    },
    flexContainer: {
      height: '30px',
      borderBottom: '2px solid rgba(255,255,255,0.1)'
    },
    scroller: {
      height: '30px'
    }
  },
  MuiTab: {
    root: {
      minWidth: '40px',
      minHeight: '30px',
      height: '30px',
      textTransform: 'none',
      [defaultTheme.breakpoints.up('md')]: {
        minWidth: '40px'
      }
    },
    labelContainer: {
      paddingLeft: '8px',
      paddingRight: '8px',
      paddingTop: '2px',
      [defaultTheme.breakpoints.up('md')]: {
        paddingLeft: '8px',
        paddingRight: '8px'
      }
    }
  },
  MuiAppBar: {
    root: {
      boxShadow: 'none'
    },
    colorPrimary: {
      backgroundColor: theme.palette.background.darker
    }
  },
  MuiToolbar: {
    root: {
      minHeight: '40px',
      [defaultTheme.breakpoints.up('sm')]: {
        minHeight: '40px'
      }
    },
    gutters: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
      [defaultTheme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3
      }
    }
  },
  MuiIconButton: {
    root: {
      width: '24px',
      height: '24px'
    },
    colorInherit: {
      opacity: 0.6,
      '&:hover': {
        opacity: 1
      }
    }
  },
  MuiSvgIcon: {
    root: {
      fontSize: '20px'
    }
  }
}

export default theme
