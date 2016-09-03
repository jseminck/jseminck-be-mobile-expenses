import moment from 'moment';

const initialState = {
    loading: false,
    expenses: [],
    year: moment().year(),
    month: moment().month() + 1 // 0-based
};

export default function github(state = initialState, action = {}) {
    switch (action.type) {
    case 'expenses.toggle.loading':
        return onToggleLoading(state);
    case 'expenses.load.success':
        return onLoadSuccess(state, action.expenses);
    case 'expenses.next.month':
        return onNextMonth(state);
    case 'expenses.previous.month':
        return onPreviousMonth(state);
    default:
        return state;
    }
}

function onToggleLoading(state) {
    return {
        ...state,
        loading: !state.loading
    };
}

function onLoadSuccess(state, expenses) {
    return {
        ...state,
        expenses
    };
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