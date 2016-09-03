import React from 'react';
import { View, TabBarIOS } from 'react-native';
import CreateContainer from './../Create/CreateContainer';

export default ({selected, navigator, onChangeTab}) => (
    <TabBarIOS.Item
        selected={selected === 'Add'}
        icon={require('./create.png')}
        onPress={() => onChangeTab('Add')}
    >
        <View style={{flex: 1}}>
            <CreateContainer
                navigator={navigator}
                onChangeTab={onChangeTab}
            />
        </View>
    </TabBarIOS.Item>
);