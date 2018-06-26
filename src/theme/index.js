import { createMuiTheme } from '@material-ui/core/styles'

import appBar from './appBar'
import { iconButton } from './buttons'
import icons from './icons'
import input from './input'
import { menuItem } from './menu'
import { tabs, tab } from './tabs'
import toolbar from './toolbar'
import typography from './typography'

const theme = createMuiTheme({
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
})

theme.overrides = {
  MuiTypography: typography(theme),
  MuiTabs: tabs(theme),
  MuiTab: tab(theme),
  MuiAppBar: appBar(theme),
  MuiToolbar: toolbar(theme),
  MuiIconButton: iconButton(theme),
  MuiSvgIcon: icons(theme),
  MuiInput: input(theme),
  MuiMenuItem: menuItem(theme)
}

export default theme
