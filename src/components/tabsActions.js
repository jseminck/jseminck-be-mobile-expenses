export function onChangeTab(tab) {
    return {type: 'tabs.change', tab};
}

export function onLogout(tab) {
    return {type: 'tabs.logout', tab};
}