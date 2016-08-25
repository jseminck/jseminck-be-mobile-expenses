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
        return require('../components/TabsScreen').default;
    },
    getTitle() {
        return 'Expenses';
    }
});

export default routes;
