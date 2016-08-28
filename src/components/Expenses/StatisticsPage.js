import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './expensesActions';
import {View, Text} from 'react-native';
import ListLoading from './ListLoading';

class StatisticsPage extends React.Component {
    static propTypes = {
        login: React.PropTypes.object.isRequired,
        state: React.PropTypes.object.isRequired,

        onLoad: React.PropTypes.func.isRequired
    }

    componentDidMount() {
        if (this.props.login.loggedIn) {
            this.props.onLoad(this.props.login.token);
        }
    }

    render() {
        if (this.props.state.loading) {
            return (
                <ListLoading />
            );
        }

        return (
            <View style={styles.container}>
                <Text style={styles.amount}>
                    {this.getTotalExpenseAmount()} €
                </Text>
            </View>
        );
    }

    getTotalExpenseAmount() {
        return _.round(this.props.state.expenses.reduce((amount, expense) => amount += expense.price, 0));
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    amount: {
        fontSize: 48
    }
};

function mapStateToProps(state) {
    return {
        login: state.login,
        state: state.expenses
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsPage);