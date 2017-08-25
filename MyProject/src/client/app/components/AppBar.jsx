import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import SettingIcon from 'material-ui/svg-icons/action/settings';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Link} from 'react-router';

export default class AppbarWithNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleToggle() {
    this.setState({open: true})
  }

  handleClose() {
    this.setState({open: false})
  }

  render() {
    const actions = [];

    const iconElementRight = <IconMenu iconButtonElement={< IconButton > <SettingIcon/> < /IconButton>}></IconMenu>

    //const iconElementLeft = <IconMenu>
    //</IconMenu>

    return (

      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div>
            <AppBar title="MPphotography" iconElementRight={iconElementRight}/>
            <Drawer docked={true} open={this.state.open} onRequestChange={(open) => this.setState({open})}></Drawer>
            {this.props.isAuthenticated && <div className={('app-content', {'expanded': this.state.open})}>
              {this.props.children}
            </div>}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
