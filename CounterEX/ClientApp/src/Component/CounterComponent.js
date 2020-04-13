import React, { Component } from 'react';


class Counter extends Component {
    render() {
        return (
            <div className="counter">
                <div> Counter</div>
                <button>-</button>
                <span></span>
                <button>+</button>
            </div>
        )
    }
}

export default Counter;