import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default () => (
    <View style={styles.container}>
        <ActivityIndicator
            animating={true}
            size='large'
        />
    </View>
);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 1000
    }
};

