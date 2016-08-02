import React from 'react';
import moment from 'moment';
import { View, Text } from 'react-native';

export default class ListRow extends React.Component {
    static propTypes = {
        item: React.PropTypes.object.isRequired,
        index: React.PropTypes.number.isRequired
    }

    render() {
        return (
            <View style={this.getBackgroundStyle()}>
                <View style={styles.date}>
                    <Text>{moment(this.props.item.purchase_date).format('DD')}</Text>
                </View>
                <View style={styles.price}>
                    <Text>{this.props.item.price}</Text>
                </View>
                <View style={styles.category}>
                    <Text>{this.props.item.category}</Text>
                </View>
            </View>
        );
    }

    getBackgroundStyle() {
        if (this.props.index % 2 === 0) {
            return {...styles.container, ...styles.darkColor};
        }
        return {...styles.container, ...styles.lightColor};
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 30
    },
    date: {
        marginLeft: 10,
        flex: 0.1
    },
    price: {
        flex: 0.2
    },
    category: {
        flex: 0.6
    },
    darkColor: {
        backgroundColor: '#ECE5FB'
    },
    lightColor: {
        backgroundColor: '#DCD0F6'
    }
};
