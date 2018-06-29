import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import SettingsIcon from '@material-ui/icons/Settings'

import { sendState } from '../../engine/renderEngine'

import styles from './style'

class Renderer extends React.Component {
  constructor(props) {
    super(props)
    this.iframe = React.createRef()
    this.state = {
      iframeHeight: 200
    }
  }

  componentDidMount = () => {
    this.feedState()

    window.addEventListener('message', event => {
      if (event.data.frame !== this.props.rendererId) return
      switch (event.data.type) {
        case 'frame-height':
          this.setState({
            iframeHeight: event.data.height
          })
          break
        default:
          break
      }
    })
  }

  componentWillUnmount = () => {
    cancelAnimationFrame(this.req)
  }

  feedState = () => {
    sendState(
      {
        x: Math.random(),
        y: Math.random()
      },
      this.iframe.current
    )
    this.req = requestAnimationFrame(this.feedState)
  }

  render = () => {
    const { classes } = this.props
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
        <div className={`renderer-domparent ${classes.domparent}`}>
          <iframe
            title={`render-frame-${this.props.rendererId}`}
            ref={this.iframe}
            src="renderFrame/index.html"
            width="100%"
            className={classes.iframe}
            style={{ height: this.state.iframeHeight }}
          />
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(Renderer)
