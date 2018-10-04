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
    }                  

    render() {
        return (
        <div>
            <h1>{JSON.stringify(this.state.items)}</h1>
        </div>
        );
    }
}