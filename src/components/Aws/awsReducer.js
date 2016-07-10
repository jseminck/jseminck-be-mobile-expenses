import _ from 'lodash';

const initialState = {
    selectedTab: 'feed',
    loading: false,
    repos: [],
    feed: [],
    page: 0,
    countdown: 10
};

export default function github(state = initialState, action = {}) {
    switch (action.type) {
    case 'ON_TOGGLE_GITHUB_LOADING':
        return onToggleLoading(state);
    case 'ON_USER_INFO_LOAD_SUCCESS':
        return onUserInfoLoadSuccess(state, action.repos);
    case 'ON_FEED_LOAD_SUCCESS':
        return onFeedLoadSuccess(state, action.feed, action.page);
    case 'ON_CHANGE_TAB':
        return onChangeTab(state, action.tab);
    case 'ON_TICK':
        return onTick(state);
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

function onUserInfoLoadSuccess(state, repos) {
    return {
        ...state,
        repos: _.orderBy(repos, 'updated_at', 'desc')
    };
}

function onFeedLoadSuccess(state, feed, page) {
    return {
        ...state,
        feed,
        page
    };
}

function onChangeTab(state, tab) {
    return {
        ...state,
        selectedTab: tab
    };
}

function onTick(state) {
    return {
        ...state,
        countdown: --state.countdown > 0 ? state.countdown : 10
    };
}