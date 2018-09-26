import React from "react";

export default class FetchApiEmployees extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
    this.selectEmployee = this.selectEmployee.bind(this);
    }

    componentDidMount() {
        this.getItems();
    }
  
    selectEmployee() {
        console.log('this is from the selectEmployee method');
    }

    getItems() {     
        fetch('http://localhost:5000/api/employees')
        .then(results => results.json())
        .then(results => this.setState({items : results}));
    }                  
  
    render() {
      return (
        <div>  
            {this.state.items.map((item, index) => (
                <div key={index}>{item.employeeId} {item.name} {item.city} {item.department} {item.gender}</div>
                
            ))}
        </div>
        );
    }
}




