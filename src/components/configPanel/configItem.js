import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import { itemStyles } from './style'

class ConfigItem extends React.Component {
  state = {
    switcherOpen: false,
    switcherAnchor: null
  }

  handleOpenSwitcher = event => {
    this.setState({ switcherOpen: true, switcherAnchor: event.currentTarget })
  }

  handleCloseSwitcher = () => {
    this.setState({ switcherOpen: false })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.labelWrap}>
          <Typography component="label" htmlFor={this.props.itemName} className={classes.label} noWrap>
            {this.props.itemName} <span className={classes.type}>({this.props.itemType})</span>
          </Typography>
          <Typography
            component="span"
            className={classes.switcher}
            onClick={this.handleOpenSwitcher}
            aria-owns="switcher"
            aria-haspopup="true"
          >
            static
          </Typography>
        </div>
        <Input id={this.props.itemName} type="number" />
        <Menu
          id="switcher"
          anchorEl={this.state.switcherAnchor}
          open={this.state.switcherOpen}
          onClose={this.handleCloseSwitcher}
        >
          <MenuItem onClick={this.handleClose}>Static</MenuItem>
          <MenuItem onClick={this.handleClose}>Link</MenuItem>
          <MenuItem onClick={this.handleClose}>Function</MenuItem>
        </Menu>
      </div>
    )
  }
}

export default withStyles(itemStyles)(ConfigItem)
