import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Renderer from './components/renderer'

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    borderRight: 'none',
    backgroundColor: theme.palette.background.darker
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit,
    minWidth: 0 // So the Typography noWrap works
  },
  tabContent: {
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3
  }
})

class App extends Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state
    return (
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          Test
        </Drawer>
        <div className={classes.content}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="off"
          >
            <Tab label="Renderers" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
          <div className={classes.tabContent}>
            {value === 0 && <Renderer />}
            {value === 1 && <div>Item Two</div>}
            {value === 2 && <div>Item Three</div>}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App)
