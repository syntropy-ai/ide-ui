const tabs = theme => ({
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
})

const tab = theme => ({
  root: {
    minWidth: '40px',
    minHeight: '30px',
    height: '30px',
    textTransform: 'none',
    [theme.breakpoints.up('md')]: {
      minWidth: '40px'
    }
  },
  labelContainer: {
    paddingLeft: '8px',
    paddingRight: '8px',
    paddingTop: '2px',
    [theme.breakpoints.up('md')]: {
      paddingLeft: '8px',
      paddingRight: '8px'
    }
  }
})

export { tabs, tab }
