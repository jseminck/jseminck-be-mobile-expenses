const initialState = {
    year: 2016,
    month: 8,
    day: 27
};

export default function createReducer(state = initialState, action) {
    switch(action.type) {
    case 'create.next.month':
        return onNextMonth(state);
    case 'create.previous.month':
        return onPreviousMonth(state);
    case 'create.select.day':
        return onSelectDay(state, action.day);
    default:
        return state;
    }
}

function onNextMonth(state) {
    return {
        ...state,
        year: state.month === 12 ? state.year + 1 : state.year,
        month: state.month === 12 ? 1 : state.month + 1
    };
}

function onPreviousMonth(state) {
    return {
        ...state,
        year: state.month === 1 ? state.year - 1 : state.year,
        month: state.month === 1 ? 12 : state.month - 1
    };
}

function onSelectDay(state, day) {
    if (!day) return state;

    return {
        ...state,
        day
    };
}