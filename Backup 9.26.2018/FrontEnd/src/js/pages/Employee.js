//import the necessary files
import React from 'react';
import {PanelGroup,Panel,Button,ButtonToolbar,ListGroup,ListGroupItem} from 'react-bootstrap';
import {Redirect} from 'react-router';
import '../css/index.css';
import {AddEmployee} from '../components/addemployee';
import {EditEmployee} from '../components/editemployee';

console.log('top of Recipe.js');

//create the main class for displaying the recipes
export default class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      items: [],
      showAdd: false,
      showEdit: false,
      rerenderEmployeeView: false,
      currentlyEditing: 0      
    };

    this.showAddModal = this.showAddModal.bind(this);
    this.showEditModal = this.showEditModal.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  componentDidMount() {
    this.getItems();
  }

  getItems() {     
    fetch('http://localhost:5000/api/employees')
    .then(results => results.json())
    .then(results => this.setState({items : results}));
    console.log('Test Point before JSON.stringify');
    console.log(JSON.stringify(this.state.items));    
  }                  

  showAddModal() {//show the new Employee Detail modal
    console.log('Welcome to "showAddModal method" Sir Edward the Great!!');
    this.setState({showAdd: !this.state.showAdd});
  }

  showEditModal(index) {//show the edit Employee Modal
    console.log('Just got to show EditModal...Booyah!!')
    this.setState({currentlyEditing: index, showEdit: !this.state.showEdit, editIndex: index});
  }

  addEmployee(index) {//create a new Employee Record
    console.log('I see that you just pressed the "Add Employee" button');
    let items = this.state.items;
    console.log(items[index].employeeId);
    console.log(items.length);
    // let url = 'http://localhost:5000/api/employees/' + (items[index].employeeId);
    // fetch(url, {
    //   method: 'POST'
    // });

    // let recipes = this.state.recipes;
    // recipes.push(recipe);
    // localStorage.setItem('recipes', JSON.stringify(recipes));
    // this.setState({recipes: recipes});
    // this.showAddModal();
  }

  editEmployee(newName, newIngredients, currentlyEditing) {//edit an existing recipe
    let recipes = this.state.recipes;
    // recipes[currentlyEditing] = {name: newName, ingredients: newIngredients};
    localStorage.setItem('recipes', JSON.stringify(recipes));
    
    this.setState({recipes: recipes, editIndex: index});
    this.showEditModal(currentlyEditing);
    console.log('editEmployee test console.log');
    console.log(editIndex);
  }

  deleteEmployee(index) {//delete an existing Employee
    let items = this.state.items;
    this.setState({rerenderEmployeeView: true});
    console.log(this.state.rerenderEmployeeView);
    console.log(items[index].employeeId);
    let url = 'http://localhost:5000/api/employees/' + (items[index].employeeId);
    
    fetch(url, {
      method: 'DELETE'
    });
  }
  componentDidUpdate () {
    console.log(this.state.rerenderEmployeeView);
  }
    
    // return <Redirect to='/recipe' />;
  
  

  // -----------------------------------------------------------------
      

  render() {

    
    const employees = this.state.employees;
    const items = this.state.items;
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
            
            
            {items.map((item, index) => (
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
                      {/* <Button bsStyle="success" onClick={() => {this.saveEdit(index)}}>Save</Button> */}
                  </ButtonToolbar>

              </Panel.Body>

              <EditEmployee {...this.state} onShow={this.state.showEdit} onEdit={this.editEmployee} onEditModal={() => {this.showEditModal(currentlyEditing)}} currentlyEditing={currentlyEditing} employee={employees[currentlyEditing]} />

            </Panel>
          ))}

        </PanelGroup>

        <Button bsStyle="primary" onClick={this.showAddModal}>Add Employee</Button>

        <AddEmployee onShow={this.state.showAdd} onAdd={this.AddEmployee} onAddModal={this.showAddModal} />
      </div>
      
    );    
  }
};

function mapStateToProps(state) {
  const { connect } = state;
  
  return {
      connect
  };
}


