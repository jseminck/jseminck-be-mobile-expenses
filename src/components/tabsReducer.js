export default function tabReducer(state = {selected: 'Statistics'}, action) {
    if (action.type === 'tabs.change') {
        return {
            selected: action.tab
        };
    }

    return state;
}