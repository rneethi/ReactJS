import React, { Component } from 'react';
import { connect } from 'react-redux';
import { oprator, oprand } from '../Action/CalcAction';
class Calc extends Component {
    render() {
        return (
            <div className="container">
                <div className="display">
                    <span className="cursor">
                        {!this.props.num2 ? this.props.value : this.props.num2} </span>
                </div>
                <button onClick={e => this.props.oprator("AC")} className="btn">AC</button>
                <button className="btn">C</button>
                <button onClick={e => this.props.oprator("*")} className="btn">x</button>
                <button onClick={e => this.props.oprator("/")} className="btn">/</button>

                <button onClick={e => this.props.oprand(7)} className="btn">7</button>
                <button onClick={e => this.props.oprand(8)} className="btn">8</button>
                <button onClick={e => this.props.oprand(9)} className="btn">9</button>
                <button onClick={e => this.props.oprator("+")} className="btn">+</button>

                <button onClick={e => this.props.oprand(4)} className="btn">4</button>
                <button onClick={e => this.props.oprand(5)} className="btn">5</button>
                <button onClick={e => this.props.oprand(6)} className="btn">6</button>
                <button onClick={e => this.props.oprator("-")} className="btn">-</button>

                <button onClick={e => this.props.oprand(1)} className="btn">1</button>
                <button onClick={e => this.props.oprand(2)} className="btn">2</button>
                <button onClick={e => this.props.oprand(3)} className="btn">3</button>
                <button onClick={e => this.props.oprator("=")} className="btn eq">=</button>

                <button onClick={e => this.props.oprator(".")} className="btn">.</button>
                <button onClick={e => this.props.oprand(0)} className="btn zero">0</button>

            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        op: state.op,
        num1: state.num1,
        num2: state.num2,
        value: state.value
    }
}

const mapDispatchToProps = dispatch => {
    return {
        oprand: (op) => dispatch(oprand(op)),
        oprator: (op) => dispatch(oprator(op))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calc);


