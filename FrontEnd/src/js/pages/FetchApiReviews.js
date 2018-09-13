import React from "react";

export default class FetchApiReviews extends React.Component {
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
                        
        fetch('http://localhost:5000/api/reviews')
        .then(results => results.json())
        .then(results => this.setState({items : results}));
        console.log('CL Test Point #1');
        console.log(JSON.stringify(this.state.items));
    }                  

    render() {
        return (
        <div>
            <h1>{JSON.stringify(this.state.items)}</h1>
            
            <p>Placeholder (from FetchApiReviews Component)</p>
        </div>
        );
    }
}