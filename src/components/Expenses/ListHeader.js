import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ListHeader extends React.Component {
    static propTypes = {
        year: React.PropTypes.number.isRequired,
        month: React.PropTypes.number.isRequired,

        onNextMonth: React.PropTypes.func.isRequired,
        onPreviousMonth: React.PropTypes.func.isRequired
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    underlayColor="#fff"
                    onPress={this.props.onPreviousMonth}
                >
                    <Icon
                        name="arrow-left"
                        size={20}
                        style={styles.previousButton}
                    />
                </TouchableHighlight>
                <View style={styles.textContent}>
                    <Text>
                        {this.props.year} - {this.props.month}
                    </Text>
                </View>
                <TouchableHighlight
                    underlayColor="#fff"
                    onPress={this.props.onNextMonth}
                >
                    <Icon
                        name="arrow-right"
                        size={20}
                        style={styles.nextButton}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = {
    container: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    previousButton: {
        marginLeft: 10,
        flex: 0.1
    },
    textContent: {
        flex: 0.8,
        alignItems: 'center'
    },
    nextButton: {
        flex: 0.1,
        marginRight: 10
    }
};
