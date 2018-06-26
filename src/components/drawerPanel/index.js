import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import styles from './style'

const DrawerPanel = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="subheading" className={classes.title}>
          {props.title}
        </Typography>
      </div>
      <div className={classes.body}>{props.children}</div>
    </div>
  )
}

export default withStyles(styles)(DrawerPanel)
