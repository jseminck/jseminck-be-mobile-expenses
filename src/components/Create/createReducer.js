import moment from 'moment';

const initialState = {
    currentScreen: 'MONTH',
    year: moment().year(),
    month: moment().month() + 1, // 0-based
    day: moment().date(),
    category: 'Groceries',
    price: '',
    loading: false,
    completed: false
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
    case 'create.select.category':
        return onSelectCategory(state, action.category);
    case 'create.remove.price':
        return onRemovePrice(state);
    case 'create.add.price':
        return onAddPrice(state, action.value);
    case 'create.toggle.loading':
        return onToggleLoading(state);
    case 'create.complete':
        return onComplete();

    default:
        return state;
    }
}

function onNextScreen(state) {
    const currentScreenPosition = screenOrder.indexOf(state.currentScreen);
    return {
        ...state,
        currentScreen: screenOrder[currentScreenPosition + 1]
    };
}

function onCancel() {
    return initialState; // Not sure what to do yet.
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

function onSelectCategory(state, category) {
    if (!category) return state;

    return {
        ...state,
        category
    };
}

function onRemovePrice(state) {
    if (state.price.length === 0) return state;

    return {
        ...state,
        price: state.price.slice(0, -1) // Remove last character
    };
}

function onAddPrice(state, value) {
    return {
        ...state,
        price: state.price + value
    };
}

function onToggleLoading(state) {
    return {
        ...state,
        loading: !state.loading
    };
}

function onComplete() {
    return {
        ...initialState
    };
}