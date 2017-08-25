import React, {Component} from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  content: {
    marginLeft: 50
  },

  headline: {
    fontSize: 68,
    padding: 10,
    marginBottom: 2 + '%',
    fontWeight: 200
  },

  line1: {
    width: 600,
    marginTop: 5 + '%',
    marginBottom: 5 + '%',
    border: '1px solid black'
  },

  line2: {
    width: 500,
    marginTop: 5 + '%',
    marginBottom: 5 + '%',
    border: '1px solid black'
  },

  btnGetStarted: {
    width: 200,
    height: 65
  },

  bgim: {
    backgroundColor: 'rgb(0,0,0)'
  }
};

export default class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <center>
        <div style={styles.content}>
          <div style={styles.headline}>WELCOME</div>
          <div>
            <img style={styles.bgim} src="http://pliesovskyphoto.6f.sk/plugins/templates/default/images/logo.png"/>
            <div style={styles.line1}></div>
            <div style={styles.line2}></div>
          </div>
        </div>
      </center>
    );
  }
}
