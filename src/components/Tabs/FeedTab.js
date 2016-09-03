import React from 'react';
import { View, TabBarIOS } from 'react-native';
import FeedPage from './../Expenses/FeedPage';

export default ({selected, navigator, onChangeTab}) => (
    <TabBarIOS.Item
        selected={selected === 'Feed'}
        icon={require('./feed.png')}
        onPress={() => onChangeTab('Feed')}
    >
        <View style={{flex: 1}}>
            <FeedPage navigator={navigator} />
        </View>
    </TabBarIOS.Item>
);