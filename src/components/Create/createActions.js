export function onNextMonth() {
    return {type: 'create.next.month'};
}

export function onPreviousMonth() {
    return {type: 'create.previous.month'};
}

export function onSelectDay(day) {
    return {type: 'create.select.day', day};
}