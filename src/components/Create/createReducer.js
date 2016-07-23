const initialState = {
    currentScreen: 'MONTH',
    year: 2016,
    month: 8,
    day: 27
};

const screenOrder = ['MONTH', 'CATEGORY', 'PRICE', 'COMPLETED'];

export default function createReducer(state = initialState, action) {
    switch(action.type) {
    case 'create.next.screen':
        return onNextScreen(state);
    case 'create.cancel':
        return onCancel(state);
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

function onNextScreen(state) {
    if (state.currentScreen === 'COMPLETED') {
        // Not sure what to do yet.
    }
    else {
        const currentScreenPosition = screenOrder.indexOf(state.currentScreen);
        return {
            ...state,
            currentScreen: screenOrder[currentScreenPosition + 1]
        };
    }
}

function onCancel(state) {
    return state; // Not sure what to do yet.
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