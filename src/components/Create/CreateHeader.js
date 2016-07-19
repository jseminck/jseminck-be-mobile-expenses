import React from 'react';
import { View, Text } from 'react-native';

export default ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleValue}>
                {title}
            </Text>
        </View>
    );
};

const styles = {
    container: {
        alignSelf: 'center',
        marginTop: 40
    },
    titleValue: {
        fontSize: 36
    }
};