import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

export default ({value, onSelectCategory, isSelected}) => (
    <TouchableHighlight underlayColor="#fff" onPress={() => onSelectCategory(value)}>
        <Text style={Object.assign({}, styles.item, isSelected ? styles.isSelected : {})}>
            {value}
        </Text>
    </TouchableHighlight>
);

const styles = {
    item: {
        marginTop: 3,
        paddingLeft: 100,
        paddingRight: 100
    },
    isSelected: {
        backgroundColor: '#eee'
    }
};