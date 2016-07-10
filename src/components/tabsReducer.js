

export default function tabReducer(state = {selected: 'Overview'}, action) {
    if (action.type === 'change.tab') {
        return {
            selected: action.tab
        };
    }

    return state;
}