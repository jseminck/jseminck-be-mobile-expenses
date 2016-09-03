import React from 'react';
import { View, TabBarIOS } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as expensesActions from './Expenses/expensesActions';
import {onChangeTab} from './tabsActions';
import {onLogout} from './Login/loginActions';
import routes from './../scripts/routes';

import StatisticsTab from './Tabs/StatisticsTab';
import FeedTab from './Tabs/FeedTab';
import CreateContainer from './Create/CreateContainer';

class TabsScreen extends React.Component {
    static propTypes = {
        tabs: React.PropTypes.object.isRequired,
        token: React.PropTypes.string,
        loggedIn: React.PropTypes.bool,
        navigator: React.PropTypes.object.isRequired,

        onChangeTab: React.PropTypes.func.isRequired,
        onLogout: React.PropTypes.func.isRequired
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.loggedIn !== nextProps.loggedIn && !nextProps.loggedIn) {
            let route = routes.getLoginRoute();
            this.props.navigator.replace(route);
        }
    }

    render() {
        return (
            <TabBarIOS>
                <StatisticsTab
                    selected={this.props.tabs.selected}
                    navigator={this.props.navigator}
                    onChangeTab={this.onChangeTab.bind(this)}
                />
                <FeedTab
                    selected={this.props.tabs.selected}
                    navigator={this.props.navigator}
                    onChangeTab={this.onChangeTab.bind(this)}
                />
                {this.renderCreateView()}
                <TabBarIOS.Item
                    selected={false}
                    icon={require('./signout.png')}
                    onPress={::this.logout}
                />
            </TabBarIOS>
        );
    }

    renderCreateView() {
        return (
            <TabBarIOS.Item
                selected={this.props.tabs.selected === 'Add'}
                icon={require('./create.png')}
                onPress={this.onChangeTab.bind(this, 'Add')}
            >
                <View style={styles.view}>
                    <CreateContainer
                        onChangeTab={() => this.onChangeTab('Overview')}
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
        this.props.onChangeTab(tab);
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
        token: state.login.token,
        loggedIn: state.login.loggedIn
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign(expensesActions, {onLogout, onChangeTab}), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsScreen);

