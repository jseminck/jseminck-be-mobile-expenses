import AwsService from './../../services/AwsService';

export function onDataLoad(token) {
    return async (dispatch) => {
        dispatch(onToggleLoading());
        const servers = await AwsService.getServers(token);
        dispatch(onDataLoadSuccess(servers));
        dispatch(onToggleLoading());
    };
}

export function onToggleServer(id, api) {
    return async (dispatch, getState) => {
        const token = getState().login.token;

        dispatch(onToggleLoading());
        await AwsService[api](id, token); // calls .start or .stop
        dispatch(onToggleLoading());
    };
}

function onToggleLoading() {
    return {
        type: 'ON_TOGGLE_GITHUB_LOADING'
    };
}

function onDataLoadSuccess(feed, page) {
    return {
        type: 'ON_FEED_LOAD_SUCCESS',
        feed,
        page
    };
}

export function onTick() {
    return async (dispatch, getState) => {
        if (getState().aws.countdown === 1) {
            dispatch(onToggleLoading());
            const servers = await AwsService.getServers(getState().login.token);
            dispatch(onDataLoadSuccess(servers));
            dispatch(onToggleLoading());

            dispatch({type: 'ON_TICK'});
        }
        else {
            dispatch({type: 'ON_TICK'});
        }
    };
}