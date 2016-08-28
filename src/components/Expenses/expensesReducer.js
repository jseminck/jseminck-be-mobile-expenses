const initialState = {
    loading: false,
    expenses: []
};

export default function github(state = initialState, action = {}) {
    switch (action.type) {
    case 'expenses.toggle.loading':
        return onToggleLoading(state);
    case 'expenses.load.success':
        return onLoadSuccess(state, action.expenses);
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