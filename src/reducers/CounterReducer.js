function init(initialCount) {
    return {count: initialCount};
}

function counterReducer(state, action) {
    console.log(state, action);
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return init(action.payload);
        case 'onChange':
            return {count: action.payload};
        default:
            throw new Error();
    }
}

export default counterReducer;