//import the necessary files
import React from 'react';
import {Modal,ControlLabel,FormGroup,FormControl,Button,DropdownButton,MenuItem,ButtonToolbar} from 'react-bootstrap';

export class ChoosePlan extends React.Component {

// const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];
    constructor(props) {//create a state to handle the employee to be edited
        super(props);

    console.log(this.props);
    }


    render () {

    // function renderDropdownButton(title, i) {
            return (
                <DropdownButton
                //   bsStyle={title.toLowerCase()}
                title="Large button"
                //   key={i}
                //   id={`dropdown-basic-${i}`}
                >
                <MenuItem eventKey="1">{this.props.employee.planName}</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3" active>
                    Active Item
                </MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">Separated link</MenuItem>
                </DropdownButton>
            );
        }
}
// const buttonsInstance = (
//   <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
// );

// render(buttonsInstance);