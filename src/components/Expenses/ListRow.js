import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class ListRow extends React.Component {
    static propTypes = {
        instance: React.PropTypes.object.isRequired,
        onToggleServer: React.PropTypes.func.isRequired
    }

    render() {
        return (
            <TouchableHighlight onPress={::this.onPress}>
                <View style={styles.container}>
                    <View style={this.getStyle(this.props.instance)} />
                    <View style={styles.textContainer}>
                        <Text>
                            {this.props.instance.name}
                        </Text>
                        <Text>
                            {this.props.instance.state}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    onPress() {
        const {state} = this.props.instance;

        const newState =
            (state === 'running' || state === 'pending') ? 'stop' : 'start';
        this.props.onToggleServer(this.props.instance.id, newState);
    }

    getStyle(instance) {
        if (instance.state === 'running') {
            return styles.iconStarted;
        }
        else if (instance.state === 'stopped') {
            return styles.iconStopped;
        }

        return styles.iconRunning;
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderColor: '#D7D7D7',
        borderBottomWidth: 1
    },
    iconStarted: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'green'
    },
    iconRunning: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'orange'
    },
    iconStopped: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: 'red'
    },
    textContainer: {
        paddingLeft: 20
    },
    textItem: {
        backgroundColor: '#fff'
    },
    textItemBold: {
        backgroundColor: '#fff'
    }
};