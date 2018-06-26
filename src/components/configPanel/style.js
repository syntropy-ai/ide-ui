const indexStyles = theme => ({
  root: {},
  title: {
    margin: theme.spacing.unit * 2
  }
})

const itemStyles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  labelWrap: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  label: {
    fontSize: 14,
    flex: 1,
    marginBottom: theme.spacing.unit
  },
  type: {
    color: 'rgba(255,255,255,0.7)'
  },
  switcher: {
    fontSize: 14,
    paddingLeft: theme.spacing.unit * 2,
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'underline',
    cursor: 'pointer',
    '&:hover': {
      color: '#FFF'
    }
  }
})

export { indexStyles, itemStyles }
