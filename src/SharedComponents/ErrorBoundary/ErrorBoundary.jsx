import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        error: null,
    };

    componentDidCatch(error, errorInfo) {
        this.setState(() => ({
            error
        }))
    }

    render() {
        const { children } = this.props;
        const { error } = this.state;

        return (
            <div>
                { error ? <h1>We got some errors</h1> : children }
            </div>
        );
    }
}

export default ErrorBoundary;
