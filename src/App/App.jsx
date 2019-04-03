import React, { Component } from 'react';
import Header from './components/Header';
import MoviesContent from './components/MoviesContent';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <MoviesContent />
                <Footer />
            </div>
        );
    }
}

export default App;
