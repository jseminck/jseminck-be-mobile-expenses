import React from 'react';
import { TabBarIOS } from 'react-native';

export default ({onLogout}) => (
    <TabBarIOS.Item
        selected={false}
        icon={require('./signout.png')}
        onPress={() => onLogout()}
    />
);