import React, { Component } from 'react';
import ReactComponentExample from '../ReactComponentExample';
import ReactPureComponentExample from '../ReactPureComponentExample';
import ReactStatelessComponentExample from '../ReactStatelessComponentExample';

class App extends Component {
    render() {
        return (
            <div>
                { React.createElement('span', null, "Hello World") }
                <ReactComponentExample text="this is component example text"/>
                <ReactPureComponentExample text="this is component example text" />
                <ReactStatelessComponentExample text="stateless component example"/>
            </div>
        );
    }
}

export default App;
