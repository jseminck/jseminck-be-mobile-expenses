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