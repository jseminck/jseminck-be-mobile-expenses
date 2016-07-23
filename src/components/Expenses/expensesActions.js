import ExpensesService from './../../services/ExpensesService';

export function onLoad(token) {
    return async (dispatch) => {
        dispatch(onToggleLoading());
        const expenses = await ExpensesService.getExpenses(token);
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