export default function tabReducer(state = {selected: 'Overview'}, action) {
    if (action.type === 'tabs.change') {
        return {
            selected: action.tab
        };
    }

    return state;
}