import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default ({week, selectedDay, onSelectDay}) => {
    return (
        <View style={styles.container}>
            {week.map((day, index) => {
                return (
                    <TouchableHighlight
                        key={index}
                        onPress={() => onSelectDay(day)}>
                        <Text
                            style={day === selectedDay ? {...styles.value, ...styles.selected} : styles.value}
                        >
                            {day > 0 ? day : ''}
                        </Text>
                    </TouchableHighlight>
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
        backgroundColor: '#aaa',
        color: 'white'
    }
};