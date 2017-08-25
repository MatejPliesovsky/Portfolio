import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const styles={
    pos:{marginTop:80+'%'},
};

export default class SidePanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  render() {
    return (
      <div style={styles.pos}>
       <Drawer open={this.state.open}>
         <MenuItem>Menu Item</MenuItem>
         <MenuItem>Menu Item 2</MenuItem>
       </Drawer>
     </div>
   );
  }
}
