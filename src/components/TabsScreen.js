import React from 'react';
import { View, TabBarIOS } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as githubActions from './Aws/awsActions';
import {onChangeTab} from './tabsActions';
import {onLogout} from './Login/loginActions';
import routes from './../scripts/routes';

import ServerList from './Aws/ServerList';
import CreateContainer from './Create/CreateContainer';

class TabsScreen extends React.Component {
    static propTypes = {
        tabs: React.PropTypes.object.isRequired,
        state: React.PropTypes.object.isRequired,
        token: React.PropTypes.string,
        loggedIn: React.PropTypes.bool,
        navigator: React.PropTypes.object.isRequired,

        onChangeTab: React.PropTypes.func.isRequired,
        onLogout: React.PropTypes.func.isRequired,
        onDataLoad: React.PropTypes.func.isRequired,
        onToggleServer: React.PropTypes.func.isRequired,
        onTick: React.PropTypes.func.isRequired
    };

    componentDidMount() {
        if (this.props.loggedIn) {
            this.props.onDataLoad(this.props.token);
            // this.timer = setInterval(this.props.onTick, 1000);
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.loggedIn !== nextProps.loggedIn && !nextProps.loggedIn) {
            let route = routes.getLoginRoute();
            this.props.navigator.replace(route);
        }
    }

    render() {
        console.log("this.props.tabs", this.props.tabs);
        return (
            <TabBarIOS>
                {this.renderListView()}
                {this.renderCreateView()}
                <TabBarIOS.Item
                    title='Log out'
                    selected={false}
                    icon={require('./signout.png')}
                    onPress={::this.logout}
                />
            </TabBarIOS>
        );
    }

    renderListView() {
        return (
            <TabBarIOS.Item
                title='Overview'
                selected={this.props.tabs.selected === 'Overview'}
                icon={require('./feed.png')}
                onPress={this.onChangeTab.bind(this, 'Overview')}
            >
                <View style={styles.view}>
                    <ServerList
                        navigator={this.props.navigator}
                        feed={this.props.state.feed}
                        countdown={this.props.state.countdown}
                        loading={this.props.state.loading}
                        onToggleServer={this.props.onToggleServer}
                    />
                </View>
            </TabBarIOS.Item>
        );
    }

    renderCreateView() {
        return (
            <TabBarIOS.Item
                title='Add'
                selected={this.props.tabs.selected === 'Add'}
                icon={require('./create.png')}
                onPress={this.onChangeTab.bind(this, 'Add')}
            >
                <View style={styles.view}>
                    <CreateContainer
                        navigator={this.props.navigator}
                    />
                </View>
            </TabBarIOS.Item>
        );
    }

    logout() {
        this.props.onLogout();
    }

    onChangeTab(tab) {
        this.props.onChangeTab(tab)
    }
}

const styles = {
    view: {
        flex: 1
    }
};

function mapStateToProps(state) {
    return {
        tabs: state.tabs,
        state: state.aws,
        token: state.login.token,
        loggedIn: state.login.loggedIn
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign(githubActions, {onLogout, onChangeTab}), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsScreen);

