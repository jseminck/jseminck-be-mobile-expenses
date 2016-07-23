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
        return require('../components/Expenses/List').default;
    },
    getTitle() {
        return 'Github';
    }
});

export default routes;
