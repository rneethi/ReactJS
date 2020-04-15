import { OPRATOR, OPRAND } from '../Action/CalcAction';

const initialState = {
    op: '',
    num1: 0,
    num2: '',
    value: 0
}

function calcReducer(state = initialState, action) {
    console.log(state);

    switch (action.type) {
        case OPRAND:
            {
                if (!state.num1) {
                    return {
                        ...state, value: action.num, num1: action.num
                    };
                } else
                    return {
                        ...state, value: action.num, num2: action.num
                    };
            }
        case OPRATOR:
            {
                if (action.op == "AC") {
                    return initialState;
                }

                if (action.op == "=") {
                    console.log(state);
                    return { ...state, value: eval(state.num1 + state.op + state.num2), num1: '', num2: '', }
                } else {
                    return {
                        ...state, op: action.op
                    }
                }
            }
        default:
            return state;
    }
}

export default calcReducer;