import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import DrawerPanel from './components/drawerPanel'
import ConfigPanel from './components/configPanel'
import Renderer from './components/renderer'

import styles from './App.style.js'

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
          <DrawerPanel title="Config">
            <ConfigPanel />
          </DrawerPanel>
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
