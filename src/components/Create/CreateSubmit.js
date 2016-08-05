import React, {PropTypes} from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class CreateSubmit extends React.Component {
    static propTypes = {
        onNextScreen: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={this.props.onCancel}
                    style={styles.cancelButton}
                >
                    <Text style={styles.cancelButtonText}>
                        Cancel
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this.props.onNextScreen}
                    style={styles.submitButton}
                >
                    <Text style={styles.submitButtonText}>
                        Next
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = {
    container: {
        marginTop: 0,
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    cancelButton: {
        borderColor: '#FFB59A',
        backgroundColor: '#FFB59A',
        borderRadius: 8,
        borderWidth: 1,
        padding: 10
    },
    cancelButtonText: {
        color: 'white',
        fontSize: 24
    },
    submitButton: {
        borderColor: '#82D8B1',
        backgroundColor: '#82D8B1',
        borderRadius: 10,
        borderWidth: 1,
        marginLeft: 10,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 10
    },
    submitButtonText: {
        color: 'white',
        fontSize: 24
    }
};
