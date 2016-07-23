import React from 'react';
import { View, Text } from 'react-native';

export default class ListHeader extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    My Header
                </Text>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 10
    }
};