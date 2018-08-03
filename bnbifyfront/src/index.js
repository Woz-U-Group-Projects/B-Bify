import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Going to insert 'ContentFeed'
class ContentFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'items': []
        }
    }
    componentDidMount() {
        this.getItems();
    }

    getItems() {
        fetch('http://localhost:5000/api/values')
        .then(results => results.json())
        .then(results => this.setState({'items': results}));
    }
    render() {
        return (
            <ul>
                {this.state.items.map(function(item, index) {
                    return (
                        <div key={index}>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    )
                }
                )}
            </ul>
        );
    }
}



ReactDOM.render(<ContentFeed />, document.getElementById('root'));
registerServiceWorker();
