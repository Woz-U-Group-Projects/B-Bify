import React from "react";

export default class FetchApiBookings extends React.Component {
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
        fetch('http://localhost:5000/api/bookings')
        .then(results => results.json())
        .then(results => this.setState({items : results}));
        console.log('CL Test Point #1');
        console.log(JSON.stringify(this.state.items));
    }                  
  
    render() {
      return (
        <div>
          <h1>{JSON.stringify(this.state.items)}</h1>
          <p>Placeholder (from FetchApiBookings Component)</p>
        </div>
        );
    }
}
