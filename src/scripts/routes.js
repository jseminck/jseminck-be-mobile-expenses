const routes = {};

routes.getLoginRoute = () => ({
    getSceneClass() {
        return require('../components/Login/LoginScreen').default;
    },
    getTitle() {
        return 'Login';
    }
});

routes.getHomeScreen = () => ({
    getSceneClass() {
        return require('../components/Create/CreateContainer').default;
    },
    getTitle() {
        return 'Github';
    }
});

export default routes;
