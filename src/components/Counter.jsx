import { Component, createElement } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { value: props.initialValue || 0 }
    }

    increment = () => {
        this.setState((previousState) => ({ value: previousState.value + 1 }))
    }

    decrement = () => {
        this.setState((previousState) => ({ value: previousState.value - 1 }))
    }

    render() {
        const buttonStyle = { color: '#ffffff', backgroundColor: '#f65261', marginRight: '8px' };

        return createElement(
            'div',
            null,
            createElement('h1', null, 'Counter Value: ', this.state.value),
            createElement('button', { onClick: this.increment, style: buttonStyle }, 'Increment'),
            createElement('button', { onClick: this.decrement, style: buttonStyle }, 'Decrement'),
        )
    }
}

export default Counter