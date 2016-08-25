import React, {PropTypes} from 'react';
import { View, Text } from 'react-native';

import CreateHeader from './../CreateHeader';
import CreateSubmit from './../CreateSubmit';

export default class Completed extends React.Component {
    static propTypes = {
        state: PropTypes.object.isRequired,

        // Completed
        onNextScreen: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired
    };

    render() {
        return (
            <View>
                <CreateHeader title="Completed" />
                <View style={styles.container}>
                    <Text style={styles.value}>
                        {this.props.state.year} - {this.props.state.month} - {this.props.state.day}
                    </Text>
                    <Text style={styles.value}>
                        {this.props.state.category}
                    </Text>
                    <Text style={styles.value}>
                        {this.props.state.price}
                    </Text>
                </View>
                <CreateSubmit
                    submitText="Save"
                    onNextScreen={this.props.onNextScreen}
                    onCancel={this.props.onCancel}
                />
            </View>
        );
    }
}

const styles = {
    container: {
        paddingTop: 50,
        height: 400,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
    },
    value: {
        margin: 20
    }
};