import React from 'react';
import { View, TabBarIOS } from 'react-native';
import StatisticsPage from './../Expenses/StatisticsPage';

export default ({selected, navigator, onChangeTab}) => (
    <TabBarIOS.Item
        selected={selected === 'Statistics'}
        icon={require('./statistics.png')}
        onPress={() => onChangeTab('Statistics')}
    >
        <View style={{flex: 1}}>
            <StatisticsPage navigator={navigator} />
        </View>
    </TabBarIOS.Item>
);