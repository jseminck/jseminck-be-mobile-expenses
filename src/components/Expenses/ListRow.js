import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class ListRow extends React.Component {
    static propTypes = {

    }

    render() {
        return (
            <TouchableHighlight>
                <View>
                    <Text>My Item</Text>
                </View>
            </TouchableHighlight>
        );
    }
};