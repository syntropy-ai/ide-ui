import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import ConfigItem from './configItem'

import { indexStyles } from './style'

const ConfigPanel = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <Typography variant="subheading" className={classes.title}>
        Nano Price
      </Typography>
      <ConfigItem itemName="testConfigItem" itemType="float" />
      <ConfigItem itemName="anotherItem" itemType="int" />
    </div>
  )
}

export default withStyles(indexStyles)(ConfigPanel)
