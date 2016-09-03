import React from 'react';
import { TabBarIOS } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as expensesActions from './Expenses/expensesActions';
import {onChangeTab} from './tabsActions';
import {onLogout} from './Login/loginActions';
import routes from './../scripts/routes';

import StatisticsTab from './Tabs/StatisticsTab';
import FeedTab from './Tabs/FeedTab';
import CreateTab from './Tabs/CreateTab';
import LogoutTab from './Tabs/LogoutTab';

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
                    onChangeTab={this.props.onChangeTab}
                />
                <FeedTab
                    selected={this.props.tabs.selected}
                    navigator={this.props.navigator}
                    onChangeTab={this.props.onChangeTab}
                />
                <CreateTab
                    selected={this.props.tabs.selected}
                    navigator={this.props.navigator}
                    onChangeTab={this.props.onChangeTab}
                />
                <LogoutTab
                    onLogout={this.props.onLogout}
                />
            </TabBarIOS>
        );
    }
}

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

