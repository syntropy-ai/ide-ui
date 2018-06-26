const toolbar = theme => ({
  root: {
    minHeight: '40px',
    [theme.breakpoints.up('sm')]: {
      minHeight: '40px'
    }
  },
  gutters: {
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3
    }
  }
})

export default toolbar
