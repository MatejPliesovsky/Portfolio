import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12
};

export default class Button extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <center>
          <RaisedButton type="submit" label="Entry" primary={true} style={style}/>
          <RaisedButton label="Cancel" secondary={true} style={style}/>
        </center>
      </div>
    )
  }
}
