const initialState = {
    active: false,
    reset: true,
    count: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'START':
            return {...state, active: true, reset: false};
        case 'PAUSE':
            return {...state, active: false};
        case 'RESET':
            return {...state, active: false, reset: true, count: 0};
        case 'INCREMENT':
            return {...state, count: state.count + 1};
        default:
            return state;
    }
};