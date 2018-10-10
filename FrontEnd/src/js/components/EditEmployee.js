//import the necessary files
import React from 'react';
import {Modal,ControlLabel,FormGroup,FormControl,Button,DropdownButton,MenuItem} from 'react-bootstrap';


//create a class for displaying the modal for editing an existing employee and export it
export class EditEmployee extends React.Component {
  constructor(props) {//create a state to handle the employee to be edited
    super(props);

    this.state = {
      planId: 1
    };

    this.handleEmployeeHasBeenEdited = this.handleEmployeeHasBeenEdited.bind(this);
    this.sendFetchOfEdits = this.sendFetchOfEdits.bind(this);
  }

  handleEmployeeHasBeenEdited(e) {  // change the name to reflect user input
    this.setState({[e.target.name]: e.target.value});  // compile value from the input field
  }
  
  sendFetchOfEdits()  {
    //URL will be PUT /api/employees/{id} for edits or POST /api/employees for adding
    let url = 'http://localhost:5000/api/employees/' + (this.props.employee ? this.props.employee.employeeId : '');
    fetch(url, {
      method: (this.props.employee ? 'PUT' : 'POST'),
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(this.state)
    })
    .then(response => {
      console.log('Success:', response)
      location.reload();
    })
    .catch(error => console.error('Error:', error));
  }
    
  render() {
    const onShow = this.props.onShow;
    const emp = (this.props.employee ? this.props.employee : {});
    let pln = {};
    if (this.props.employee) {
      pln = (this.props.employee.plan ? this.props.employee.plan : {});
    }
 
    return(
      <Modal id='defaultId' show={onShow} onHide={this.props.onCancel}>

        <Modal.Header closeButton>
          <Modal.Title>{(emp.name ? emp.name : "Add New Employee")}</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          {(!emp.name ? (
            <FormGroup controlId="formControlsName">
              <ControlLabel>Name:</ControlLabel>
              <FormControl name="name" type="text" required onChange={this.handleEmployeeHasBeenEdited} placeholder={emp.email} />
            </FormGroup>
          ) : "")}
          
            <FormGroup controlId="formControlsName">
              <ControlLabel>Department:</ControlLabel>
              <FormControl name="department" type="text" required onChange={this.handleEmployeeHasBeenEdited} defaultValue={emp.department} />
            </FormGroup>

            <FormGroup controlId="formControlsName">
              <ControlLabel>Supervisor</ControlLabel>
              <FormControl name="supervisor" type="text" required onChange={this.handleEmployeeHasBeenEdited} defaultValue={emp.supervisor} />
            </FormGroup>

            <FormGroup controlId="formControlsName">
              <ControlLabel>Email</ControlLabel>
              <FormControl name="email" type="text" required onChange={this.handleEmployeeHasBeenEdited} defaultValue={emp.email} />
            </FormGroup> 

            <FormGroup controlId="formControlsName">
              <ControlLabel>Phone Ext:</ControlLabel>
              <FormControl name="phone" type="text" required onChange={this.handleEmployeeHasBeenEdited} defaultValue={emp.phone} />             
            </FormGroup> 

            <FormGroup controlId="formControlsName">
              <ControlLabel>Healthcare Plan:</ControlLabel>
              <FormControl componentClass="select"  name="planId" onChange={this.handleEmployeeHasBeenEdited}>
                <option value="1"> SuperMega Health</option>
                <option value="2">Health-O-Rama</option>
                <option value="3">Ultra Health Green</option>
                <option value="4">Health One</option>
              </FormControl>
              {/* <FormControl name="planname" type="text" required onChange={this.handleEmployeeHasBeenEdited} defaultValue={pln.planName} />              */}
            </FormGroup> 
        </Modal.Body>

        <Modal.Footer>
          <Button bsStyle="success" onClick={this.sendFetchOfEdits}>Save</Button>
        </Modal.Footer>
           
      </Modal>
    );
  }
}
