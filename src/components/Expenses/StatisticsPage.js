import _ from 'lodash';
import React from 'react';
import {View, Text} from 'react-native';
import ListLoading from './ListLoading';

export default class StatisticsPage extends React.Component {
    static propTypes = {
        state: React.PropTypes.object.isRequired
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