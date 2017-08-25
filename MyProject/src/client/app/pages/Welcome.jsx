import React from 'react'
import {render} from 'react-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from './components/AppBar.jsx'
import GridList from './components/Grids.jsx'
import Footer from './components/Footer.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar/>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <GridList/>
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
