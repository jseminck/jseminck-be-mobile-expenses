import React from 'react';
import moment from 'moment';
import { View, Text } from 'react-native';
import Swipeout from 'react-native-swipeout';

export default class ListRow extends React.Component {
    static propTypes = {
        item: React.PropTypes.object.isRequired,
        index: React.PropTypes.string.isRequired,

        onDelete: React.PropTypes.func.isRequired
    }

    render() {
        let swipeBtns = [{
            text: 'Delete',
            backgroundColor: 'red',
            underlayColor: 'rgba(0, 0, 0, 0.6)',
            onPress: () => this.props.onDelete(this.props.item.id)
        }];

        return (
            <Swipeout autoClose={true} right={swipeBtns}>
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
                    <View style={styles.description}>
                        <Text>{this.props.item.description}</Text>
                    </View>
                </View>
            </Swipeout>
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
        flex: 0.2
    },
    description: {
        flex: 0.4
    },
    darkColor: {
        backgroundColor: '#fff'
    },
    lightColor: {
        backgroundColor: '#eee'
    }
};
