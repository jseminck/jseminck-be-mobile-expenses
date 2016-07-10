import React from 'react';
import { View, Text, ActivityIndicatorIOS } from 'react-native';

export default class ServerListRow extends React.Component {
    static propTypes = {
        countdown: React.PropTypes.number.isRequired,
        loading: React.PropTypes.bool.isRequired
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Next update in {this.props.countdown} seconds.
                </Text>
                <ActivityIndicatorIOS
                    animating={this.props.loading}
                    style={styles.indicator}
                />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 5,
        marginBottom: 10
    },
    indicator: {
        marginLeft: 5
    }
};