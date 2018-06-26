const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    borderRight: 'none',
    backgroundColor: theme.palette.background.darker
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit,
    minWidth: 0 // So the Typography noWrap works
  },
  tabContent: {
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3
  }
})

export default styles
