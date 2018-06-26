const styles = theme => ({
  root: {},
  header: {
    background: 'rgba(0,0,0,0.25)',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  title: {
    fontSize: '13px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.025em',
    color: 'rgba(255,255,255,0.8)'
  },
  body: {
    //padding: theme.spacing.unit * 2
  }
})

export default styles
