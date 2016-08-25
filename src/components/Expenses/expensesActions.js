import ExpensesService from './../../services/ExpensesService';

export function onLoad(token) {
    return async (dispatch) => {
        dispatch(onToggleLoading());
        ExpensesService.setToken(token);
        const expenses = await ExpensesService.getExpenses();
        dispatch(onLoadSuccess(expenses));
        dispatch(onToggleLoading());
    };
}

function onToggleLoading() {
    return {
        type: 'expenses.toggle.loading'
    };
}

function onLoadSuccess(expenses) {
    return {
        type: 'expenses.load.success',
        expenses
    };
}