import React from 'react';
import { View, ActivityIndicatorIOS } from 'react-native';

export default () => (
    <View style={styles.container}>
        <ActivityIndicatorIOS
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

