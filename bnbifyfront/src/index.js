import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {render} from 'react-dom';
// import App from './App';

//Going to insert 'ContentFeed'
class ContentFeed extends React.Component {
    constructor() {
        super();
        this.state = {
            'items': []
        };
    }

    componentDidMount() {
        this.getItems();
        }
    
    getItems() {
                        
            fetch('http://localhost:5000/api/values')           
            .then(results => results.json())
            .then(results => this.setState({'items' : results}));
            console.log('CL Test Point #1');
            console.log(JSON.stringify(this.state.items));
    }                  
    
render() {
    return (
      <div>
        <h1>{JSON.stringify(this.state.items[0])}</h1>
        <p>This is a simple example of a React component.</p>

        {/* <p>Current count: <strong>{this.state.currentCount}</strong></p> */}

        {/* <button onClick={this.incrementCounter}>Increment</button> */}
      </div>
    );
  }
}

ReactDOM.render(
<ContentFeed />, 
document.getElementById('root')
);
