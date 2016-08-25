import React from 'react';
import { Text } from 'react-native';

export default ({day}) => {
    return (
        <Text style={styles.day}>
            {day}
        </Text>
    );
};

const styles = {
    day: {
        width: 40,
        fontSize: 14,
        fontWeight: 'bold'
    }
};