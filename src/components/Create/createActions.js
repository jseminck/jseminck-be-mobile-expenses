import {onLoad} from  './../Expenses/expensesActions';
import AuthService from './../../services/AuthService';
import ExpensesService from './../../services/ExpensesService';

/**
 * Screen selection
 */
export function onNextScreen() {
    return {type: 'create.next.screen'};
}

export function onCancel() {
    return {type: 'create.cancel'};
}

/**
 * MonthPicker
 */
export function onNextMonth() {
    return {type: 'create.next.month'};
}

export function onPreviousMonth() {
    return {type: 'create.previous.month'};
}

export function onSelectDay(day) {
    return {type: 'create.select.day', day};
}

/**
 * CategoryPicker
 */
export function onSelectCategory(category) {
    return {type: 'create.select.category', category};
}

/**
 * PricePicker
 */
export function onRemovePrice() {
    return {type: 'create.remove.price'};
}

export function onAddPrice(value) {
    return {type: 'create.add.price', value};
}

/**
 * Completed
 */
export function onChangeDescription(description) {
    return {type: 'create.change.description', description};
}

export function onCompleted(expense) {
    return async (dispatch, getState) => {
        dispatch(toggleLoading());
        await ExpensesService.saveExpense(expense);

        const {year, month} = getState().expenses;
        dispatch(onLoad(AuthService.getToken(), year, month));

        dispatch({type: 'create.complete'});
    };
}

function toggleLoading() {
    return {type: 'create.toggle.loading'};
}