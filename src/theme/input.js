const input = theme => ({
  root: {
    width: '100%',
    fontSize: 14
  },
  input: {
    background: 'rgba(255,255,255,0.03)',
    padding: theme.spacing.unit
  },
  underline: {
    '&:before': {
      borderBottomColor: 'rgba(255,255,255,0.15)'
    },
    '&:hover:not(.MuiInput-disabled-79):not(.MuiInput-focused-78):not(.MuiInput-error-81):before': {
      borderBottomColor: 'rgba(255,255,255,0.3)'
    }
  },
  focused: {
    background: 'rgba(255,255,255,0.075)'
  }
})

export default input
