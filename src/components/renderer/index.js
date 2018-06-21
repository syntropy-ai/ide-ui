import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SettingsIcon from '@material-ui/icons/Settings'

const styles = theme => ({
  renderer: {
    minHeight: '300px'
  },
  flex: {
    flex: 1
  }
})

const Renderer = props => {
  const { classes } = props
  return (
    <Paper className={classes.renderer}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Paper>
  )
}

export default withStyles(styles)(Renderer)
