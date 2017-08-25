import React, { Component } from 'react'
import {render} from 'react-dom'
import {Router, Route} from 'react-router'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from './components/AppBar.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import Button from './components/Button.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Main/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Button/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Footer/>
        </MuiThemeProvider>
      </div>
    )
  }
}

render(
  <App/>, document.getElementById('app'))
