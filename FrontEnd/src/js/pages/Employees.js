//import the necessary files
import React from 'react';
import {PanelGroup,Panel,Button,ButtonToolbar,ListGroup,ListGroupItem} from 'react-bootstrap';
import {Redirect} from 'react-router';
import '../css/index.css';
import {AddEmployee} from '../components/addemployee';
import {EditEmployee} from '../components/editemployee';

//create the main class for displaying the recipes
export default class Employees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      showEdit: false,
    };

    console.log(this.state.employees);
    this.showAddModal = this.showAddModal.bind(this);
    this.showEditModal = this.showEditModal.bind(this);
    this.cancelModal = this.cancelModal.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }
  
  getItems() {     
    fetch('http://localhost:5000/api/employees')
    .then(results => results.json())
    .then(results => this.setState({employees : results}));
  }                  

  showAddModal() {//show the new Employee Detail modal
    this.setState({currentlyEditing : -1, showEdit: !this.state.showEdit});
  }

  showEditModal(index) {//show the edit Employee Modal
    this.setState({currentlyEditing: index, addOrEditLabel: 'Edit', showEdit: !this.state.showEdit});
  }

  cancelModal() {
    this.setState({showEdit: false});
  }

  deleteEmployee(index) {//delete an existing Employee
    let employees = this.state.employees;
    this.setState({rerenderEmployeeView: true});
    console.log(this.state.rerenderEmployeeView);
    console.log(employees[index].employeeId);
    let url = 'http://localhost:5000/api/employees/' + (employees[index].employeeId);
    fetch(url, {
      method: 'DELETE'
    });

    this.props.history.push('/bookings');
  }


  // -----------------------------------------------------------------
      

  render() {
    const employees = this.state.employees;
    var currentlyEditing = this.state.currentlyEditing;
    var rerenderEmployeeView = this.state.rerenderEmployeeView;

    if (rerenderEmployeeView === true) {
      <Redirect to='/bookings' />
    };

    return(

      <div className="jumbotron">

        <h2>Employees</h2>
        <h3>{rerenderEmployeeView}</h3>
        <PanelGroup accordion id="employees">
            
            
            {employees.map((item, index) => (
            <Panel eventKey={index} key={index}>
            
              <Panel.Heading>

                  <Panel.Title className="title" toggle>{item.name}</Panel.Title>
                  <Panel.Title toggle>{item.employeeId}</Panel.Title>

              </Panel.Heading>
              
              <Panel.Body collapsible>

                  <ListGroup>
                      <ListGroupItem key={(index + 1)}>Department: {item.department}</ListGroupItem>
                      <ListGroupItem key={(index + 2)}>Supervisor: {item.supervisor}</ListGroupItem>
                      <ListGroupItem key={(index + 3)}>Email: {item.email}</ListGroupItem>
                      <ListGroupItem key={(index + 4)}>Phone Ext: x{item.phone}</ListGroupItem>
                      <ListGroupItem key={(index + 5)}>{index}</ListGroupItem>
                  </ListGroup>

                  <ButtonToolbar>
                      <Button bsStyle="warning" onClick={() => {this.showEditModal(index)}}>Edit</Button>
                      <Button bsStyle="danger" onClick={() => {this.deleteEmployee(index)}}>Delete</Button>
                  </ButtonToolbar>

              </Panel.Body>
              
            </Panel>
          ))}

          <EditEmployee onShow={this.state.showEdit} onCancel={this.cancelModal} employee={(this.state.currentlyEditing > -1 ? this.state.employees[this.state.currentlyEditing] : null)} />
          {/* <EditEmployee onShow={this.state.showEdit} onEdit={this.editEmployee} onEditModal={() => {this.showEditModal(currentlyEditing)}} employee={this.state.items[this.state.currentlyEditing]} /> */}
        </PanelGroup>

        <Button bsStyle="primary" onClick={this.showAddModal}>Add Employee</Button>

        {/* <AddEmployee onShow={this.state.showAdd} onAdd={this.AddEmployee} onAddModal={this.showAddModal} /> */}

      </div>

    );    
  }
};




