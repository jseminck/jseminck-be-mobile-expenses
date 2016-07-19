import React, {PropTypes} from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class CreateSubmit extends React.Component {
    static propTypes = {
        state: PropTypes.object.isRequired,

        onPreviousMonth: PropTypes.func.isRequired,
        onNextMonth: PropTypes.func.isRequired
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.cancelButton}>
                    <Text style={styles.cancelButtonText}>
                        Cancel
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.submitButton}>
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
        marginTop: 100,
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    cancelButton: {
        borderColor: 'red',
        borderWidth: 1,
        padding: 10
    },
    cancelButtonText: {
        color: 'red',
        fontSize: 24
    },
    submitButton: {
        borderColor: 'green',
        borderWidth: 1,
        marginLeft: 10,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 10
    },
    submitButtonText: {
        color: 'green',
        fontSize: 24
    }
};
