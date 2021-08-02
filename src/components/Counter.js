import React, {useReducer} from 'react';
import counterReducer from './../reducers/counterReducer';

function init(initialCount) {
    return {count: initialCount};
}

function Counter({initialCount}) {
    const [state, dispatch] = useReducer(counterReducer, initialCount, init);
    return (
        <div className="input-group my-5">
            <span className="input-group-text"
                  onClick={() => dispatch({type: 'reset', payload: initialCount})}>Reset</span>
            <span className="input-group-text" onClick={() => dispatch({type: 'decrement'})}>-</span>
            <input type="text" className="form-control" value={state.count}
                   onChange={(e) => dispatch({type: 'onChange', payload: e.target.value})}/>
            <span className="input-group-text" onClick={() => dispatch({type: 'increment'})}>+</span>
        </div>
    );
}

export default Counter;