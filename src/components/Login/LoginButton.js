import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class LoginButton extends React.Component {
    static propTypes = {
        onPress: React.PropTypes.func.isRequired
    };

    render() {
        return (
            <View style={styles.login}>
                <TouchableHighlight onPress={this.props.onPress}>
                    <Text style={styles.loginText}>
                        Login
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = {
    login: {
        flex: 0.14,
        backgroundColor: '#C9D8E8',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        fontFamily: 'Marker Felt',
        color: '#45698F',
        fontSize: 24
    }
};