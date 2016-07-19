import React from 'react';
import { View, Text } from 'react-native';

export default ({week, selectedDay}) => {
    return (
        <View style={styles.container}>
            {week.map(day => {
                return (
                    <Text style={day === selectedDay ? {...styles.value, ...styles.selected} : styles.value}>
                        {day > 0 ? day : ''}
                    </Text>
                );
            })}
        </View>
    );
};

const styles = {
    container: {
        marginTop: 10,
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    value: {
        textAlign: 'center',
        width: 40,
        fontSize: 14,
        fontWeight: 'bold'
    },
    selected: {
        width: 40,
        backgroundColor: '#82D8B1',
        color: '#fff'
    }
};