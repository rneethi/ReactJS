import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../Action/CounterAction';

class Counter extends Component {
    render() {

        return (
            <div className="counter">
                <div> Counter</div>
                <button onClick={this.props.decrement}>-</button>
                <span>{this.props.count} </span>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.reset}>R</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Counter);