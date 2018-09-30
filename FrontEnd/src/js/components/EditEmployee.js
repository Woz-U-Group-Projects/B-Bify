//import the necessary files
import React from 'react';
import {Modal,ControlLabel,FormGroup,FormControl,Button} from 'react-bootstrap';

//create a class for displaying the modal for editing an existing employee and export it
export class EditEmployee extends React.Component {
  constructor(props) {//create a state to handle the employee to be edited
    super(props);
    this.state = {
      items: [],
      edits: [],
      value: [],    
    };
    
    this.handleEmployeeHasBeenEdited = this.handleEmployeeHasBeenEdited.bind(this);
    this.testFetch = this.testFetch.bind(this);
  }

  handleEmployeeHasBeenEdited(e) {  // change the name to reflect user input
    this.setState({edits: e.target.value});  // compile value from the input field
  }

  testFetch () {
    let edits = this.state.edits;
    console.log(edits);
    let url = 'http://localhost:5000/api/employees/' + (edits);
    fetch(url, {
      method: 'PUT'
    })
  }

  render() {
    let currentlyEditing = this.props.currentlyEditing;

    const onShow = this.props.onShow;

    return(
      <Modal show={onShow} onHide={this.handleCancel}>

        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
          <Modal.Title>{this.props.items[currentlyEditing].name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>

           <FormGroup controlId="formControlsName">
             <ControlLabel>Department:</ControlLabel>
             <FormControl type="text" required onChange={this.handleEmployeeHasBeenEdited} defaultValue={this.state.value} placeholder={this.props.items[currentlyEditing].department} />
             <ControlLabel>{this.state.edits}</ControlLabel>
           </FormGroup>

           <FormGroup controlId="formControlsName">
             <ControlLabel>Supervisor</ControlLabel>
             <FormControl type="text" required onChange={this.handleEmployeeHasBeenEdited} defaultValue={this.state.value} placeholder={this.props.items[currentlyEditing].supervisor} />
             <ControlLabel>{this.state.edits}</ControlLabel>
           </FormGroup>

           <FormGroup controlId="formControlsName">
             <ControlLabel>Email</ControlLabel>
             <FormControl type="text" required onChange={this.handleEmployeeHasBeenEdited} defaultValue={this.state.value} placeholder={this.props.items[currentlyEditing].email} />
             <ControlLabel>{this.state.edits}</ControlLabel>
           </FormGroup> 

           <FormGroup controlId="formControlsName">
             <ControlLabel>Phone Ext:</ControlLabel>
             <FormControl type="text" required onChange={this.handleEmployeeHasBeenEdited} defaultValue={this.state.value} placeholder={this.props.items[currentlyEditing].phone} />
             <ControlLabel>{this.state.edits}</ControlLabel>
           </FormGroup> 

        </Modal.Body>

        <Modal.Footer>
          <Button bsStyle="success" onClick={this.handleEmployeeHasBeenEdited}>Save</Button>
          <Button bsStyle="success" onClick={this.testFetch}>Fetch</Button>
        </Modal.Footer>

      </Modal>
    );
  }
};
