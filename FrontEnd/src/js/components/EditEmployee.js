//import the necessary files
import React from 'react';
import {Modal,ControlLabel,FormGroup,FormControl,Button,DropdownButton,MenuItem} from 'react-bootstrap';


//create a class for displaying the modal for editing an existing employee and export it
export class EditEmployee extends React.Component {
  constructor(props) {//create a state to handle the employee to be edited
    super(props);

    this.handleEmployeeHasBeenEdited = this.handleEmployeeHasBeenEdited.bind(this);
    this.handlePlanHasBeenChosen = this.handlePlanHasBeenChosen.bind(this);
    this.sendFetchOfEdits = this.sendFetchOfEdits.bind(this);
  }

  handleEmployeeHasBeenEdited(e) {  // change the name to reflect user input
    this.setState({[e.target.name]: e.target.value});  // compile value from the input field
  }

  handlePlanHasBeenChosen(evt) {
    console.log("evt", evt);
    this.setState({planId : evt}); 
  }
  
  sendFetchOfEdits()  {
    console.log("this.props", this.props);
    console.log("this.state", this.state);
    
    //URL will be PUT /api/employees/{id} for edits or POST /api/employees for adding
    let url = 'http://localhost:5000/api/employees/' + (this.props.employee ? this.props.employee.employeeId : '');
    fetch(url, {
      method: (this.props.employee ? 'PUT' : 'POST'),
      // mode: "no-cors",
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(this.state)
    })
    .then(response => console.log('Success:', response))
    .catch(error => console.error('Error:', error));
  }
    
  render() {
    // let addOrEditLabel = this.props.addOrEditLabel;
    // let currentlyEditing = this.props.currentlyEditing;
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
              <FormControl name="planname" type="text" required onChange={this.handleEmployeeHasBeenEdited} defaultValue={pln.planName} />             
            </FormGroup> 

            <DropdownButton
                  
                  title = "Choose Plan"
                  id = "id"
                >
                <MenuItem eventKey="1" onSelect={this.handlePlanHasBeenChosen}>SuperMega Health</MenuItem>
                <MenuItem eventKey="2" onSelect={this.handlePlanHasBeenChosen}>Health-O-Rama</MenuItem>
                <MenuItem eventKey="3" onSelect={this.handlePlanHasBeenChosen}>Ultra Health Green</MenuItem>
                <MenuItem eventKey="4" onSelect={this.handlePlanHasBeenChosen}>Health One</MenuItem>
                
            </DropdownButton>

        </Modal.Body>

        <Modal.Footer>
          <Button bsStyle="success" onClick={this.sendFetchOfEdits}>Save</Button>
         
        </Modal.Footer>
           
      </Modal>
    );
  }
}
