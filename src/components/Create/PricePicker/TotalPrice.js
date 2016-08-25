import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({price, onRemovePrice}) => (
    <View style={styles.container}>
        <Text style={styles.price}>
            {price}
        </Text>
        <TouchableHighlight underlayColor='#eee' onPress={() => onRemovePrice()}>
            <Icon name="long-arrow-left" style={styles.remove} />
        </TouchableHighlight>
    </View>
);

const styles = {
    container: {
        marginTop: 10,
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        backgroundColor: '#eee',
        padding: 10,
        width: 300
    },
    price: {
        fontSize: 32
    },
    remove: {
        paddingTop: 3,
        fontSize: 32,
        paddingLeft: 25
    }
};