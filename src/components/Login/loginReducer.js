const initialState = {
    loading: true,
    username: '',
    password: '',
    token: undefined,
    loggedIn: false,
    errorMessage: undefined
};

export default function counter(state = initialState, action = {}) {
    switch (action.type) {
    case 'ON_TOGGLE_LOADING':
        return onToggleLoading(state);
    case 'ON_USERNAME_CHANGE':
        return onUsernameChange(state, action.username);
    case 'ON_PASSWORD_CHANGE':
        return onPasswordChange(state, action.password);
    case 'ON_LOGIN_SUCCESS':
        return onLoginSuccess(state, action.token);
    case 'ON_LOGIN_FAILED':
        return onLoginFailed(state, action.errorMessage);
    case 'ON_LOGOUT':
        return onLogout(state);
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

function onUsernameChange(state, username) {
    return {
        ...state,
        username
    };
}

function onPasswordChange(state, password) {
    return {
        ...state,
        password
    };
}

function onLoginSuccess(state, token) {
    return {
        ...state,
        loading: false,
        token,
        loggedIn: true,
        errorMessage: undefined
    };
}

function onLoginFailed(state, errorMessage) {
    return {
        ...state,
        loading: false,
        token: {},
        loggedIn: false,
        errorMessage
    };
}

function onLogout(state) {
    return {
        ...state,
        loading: false,
        token: {},
        loggedIn: false
    };
}