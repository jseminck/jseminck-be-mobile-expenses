import ExpensesService from './../../services/ExpensesService';

export function onLoad(token, year, month) {
    return async (dispatch) => {
        dispatch(onToggleLoading());
        ExpensesService.setToken(token);
        const expenses = await ExpensesService.getExpenses(year, month);
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

export function onNextMonth() {
    return {
        type: 'expenses.next.month'
    };
}

export function onPreviousMonth() {
    return {
        type: 'expenses.previous.month'
    };
}

export function onDelete(id) {
    return {
        type: 'expenses.delete',
        id
    };
}