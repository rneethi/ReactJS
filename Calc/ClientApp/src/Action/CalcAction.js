import React, { Component } from 'react';

class Calc extends Component {
    render() {
        return (
            <div className="container">
                <div className="display">
                    <span className="cursor" > </span>
                </div>
                <button className="btn">AC</button>
                <button className="btn">C</button>
                <button className="btn">x</button>
                <button className="btn">/</button>

                <button className="btn">7</button>
                <button className="btn">8</button>
                <button className="btn">9</button>
                <button className="btn">+</button>

                <button className="btn">4</button>
                <button className="btn">5</button>
                <button className="btn">6</button>
                <button className="btn">-</button>

                <button className="btn">1</button>
                <button className="btn">2</button>
                <button className="btn">3</button>
                <button className="btn eq">=</button>

                <button className="btn">.</button>
                <button className="btn zero">0</button>

            </div>
        )
    }
}

export default Calc;