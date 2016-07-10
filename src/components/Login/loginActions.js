import AuthService from './../../services/AuthService';

export function onStartupLogin() {
    return async (dispatch) => {
        try {
            const token = await AuthService.getToken();
            return dispatch(onLoginSuccess(token));
        } catch (err) {
            return dispatch(onLoginFailed(err));
        }
    };
}

export function onUsernameChange(username) {
    return {
        type: 'ON_USERNAME_CHANGE',
        username
    };
}

export function onPasswordChange(password) {
    return {
        type: 'ON_PASSWORD_CHANGE',
        password
    };
}

export function onLoginClick(user) {
    return async (dispatch) => {
        dispatch(onToggleLoading());

        try {
            const token = await AuthService.login(user.username, user.password);
            return dispatch(onLoginSuccess(token));
        } catch (err) {
            return dispatch(onLoginFailed(err));
        }
    };
}

function onToggleLoading() {
    return {
        type: 'ON_TOGGLE_LOADING'
    };
}

function onLoginSuccess(token) {
    return {
        type: 'ON_LOGIN_SUCCESS',
        token
    };
}

function onLoginFailed(errorMessage) {
    return {
        type: 'ON_LOGIN_FAILED',
        errorMessage
    };
}

export function onLogout() {
    return async (dispatch) => {
        try {
            await AuthService.logout();
            return dispatch({
                type: 'ON_LOGOUT'
            });
        } catch (err) {
            // Handle error
        }
    };
}
