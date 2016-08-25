import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default ({value, onAddPrice}) => (
    <TouchableHighlight
        underlayColor='#ddd'
        onPress={() => onAddPrice(value)}
    >
        <View style={Object.assign({}, styles.button, value === '0' ? styles.zeroButton : {})}>
            <Text>
                {value}
            </Text>
        </View>
    </TouchableHighlight>
);

const styles = {
    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        paddingTop: 20,
        margin: 2,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#eee'
    },
    zeroButton: {
        width: 120
    }
};
