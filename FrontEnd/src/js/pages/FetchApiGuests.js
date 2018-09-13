import React from "react";

export default class FetchApiGuests extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        this.getItems();
    }
  
    getItems() {
                        
        fetch('http://localhost:5000/api/guests')
        .then(results => results.json())
        .then(results => this.setState({items : results}));
        console.log('CL Test Point #1');
        console.log(JSON.stringify(this.state.items));
    }                  
  
    render() {
      return (
        <div>
            {/* <h1>{JSON.stringify(this.state.items[1])}</h1> */}
            
            {this.state.items.map((item, index) => (

                <div key={index}>{item.name} {item.city}</div>
                
            ))}
            
            <p>Placeholder (from FetchApiGuests Component)</p>
        </div>
        );
    }
}

// const listItems = items.map((item, index) => <li key={index}>{item}</li>);


