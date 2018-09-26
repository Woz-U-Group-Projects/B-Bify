//import the necessary files
import React from 'react';
import {Modal,ControlLabel,FormGroup,FormControl,Button} from 'react-bootstrap';

//create a class for displaying the modal for editing an existing employee and export it
export class EditEmployee extends React.Component {
  constructor(props) {//create a state to handle the employee to be edited
    super(props);
    this.state = {name: "", ingredients: ""};
    this.handleRecipeNameChange = this.handleRecipeNameChange.bind(this);
    this.handleRecipeIngredientsChange = this.handleRecipeIngredientsChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    console.log(this.props.items);
  }
  static getDerivedStateFromProps(props, state) {//make the recipe prop a state
    const prevName = state.prevName;
    const prevIngredients = state.prevIngredients;
    const name = prevName !== props.recipe.name ? props.recipe.name : state.name;
    const ingredients = prevIngredients !== props.recipe.ingredients.join(",") ? props.recipe.ingredients.join(",") : state.ingredients;
    return {
      prevName: props.recipe.name, name,
      prevIngredients: props.recipe.ingredients.join(","), ingredients,
    }
  }

  

  handleRecipeNameChange(e) {//change the name to reflect user input
    this.setState({name: e.target.value});
  }
  handleRecipeIngredientsChange(e) {//change the ingredients to reflect user input
    this.setState({ingredients: e.target.value});
  }
  handleEdit(e) {//get the recipe data, manipulate it and call the function for editing an existing recipe
    e.preventDefault();
    const onEdit = this.props.onEdit;
    const currentlyEditing = this.props.currentlyEditing;
    const regExp = /\s*,\s*/;
    var name = this.state.name;
    var ingredients = this.state.ingredients.split(regExp);
    onEdit(name, ingredients, currentlyEditing);
  }
  handleCancel() {
    const onEditModal = this.props.onEditModal;
    this.setState({name: this.props.recipe.name, ingredients: this.props.recipe.ingredients.join(",")});
    onEditModal();
  }
  render() {
    const onShow = this.props.onShow;
    let editIndex = this.props.editIndex
    var regex1 = /^\S/;
    var regex2 = /^[^,\s]/;
	  var regex3 = /[^,\s]$/;
    const validRecipe = regex1.test(this.state.name) && regex2.test(this.state.ingredients) && regex3.test(this.state.ingredients);
    return(
      <Modal show={onShow} onHide={this.handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <FormGroup controlId="formControlsName">
            {/* <ControlLabel>{this.props.items[editIndex].name}</ControlLabel> */}
            {/* <FormControl {...props} type="text" required onChange={this.handleRecipeNameChange} value={this.state.name} placeholder={this.props.department} /> */}
          </FormGroup>

          <FormGroup controlId="formControlsName">
            <ControlLabel>Department:</ControlLabel>
            {/* <FormControl type="text" required onChange={this.handleRecipeNameChange} value={this.state.name} placeholder={this.props.items[editIndex].department} /> */}
          </FormGroup>

          <FormGroup controlId="formControlsName">
            <ControlLabel>Supervisor</ControlLabel>
            <FormControl type="text" required onChange={this.handleRecipeNameChange} value={this.state.name} placeholder={this.props.items[0].supervisor} />
          </FormGroup>

          <FormGroup controlId="formControlsName">
            <ControlLabel>Email</ControlLabel>
            <FormControl type="text" required onChange={this.handleRecipeNameChange} value={this.state.name} placeholder={this.props.items[0].email} />
          </FormGroup>

          <FormGroup controlId="formControlsName">
            <ControlLabel>Phone Ext:</ControlLabel>
            <FormControl type="text" required onChange={this.handleRecipeNameChange} value={this.state.name} placeholder={this.props.items[0].phone} />
          </FormGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button disabled={!validRecipe} bsStyle="success" onClick={this.handleEdit}>Save Recipe</Button>
        </Modal.Footer>
      </Modal>
    );
  }
};