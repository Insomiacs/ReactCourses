import React, {Component} from 'react';

type Props = {
    children?: React.Node
};

type State = {
    error: string
}

class ErrorBoundary extends Component<Props, State> {
    state = {
        error: null,
    };

    componentDidCatch(error) {
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
