import React from 'react';
import { View, TextInput } from 'react-native';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LoginInput extends React.Component {
    static propTypes = {
        icon: React.PropTypes.string.isRequired,
        placeholder: React.PropTypes.string.isRequired,
        password: React.PropTypes.bool,

        // event handlers
        onChangeText: React.PropTypes.func.isRequired
    };

    getInputImageStyles() {
        return [
            styles.inputImage
        ];
    }

    render() {
        const {icon, placeholder, password} = this.props;

        return (
            <View style={styles.input}>
                <Icon
                    name={icon}
                    style={this.getInputImageStyles()}
                />
                <TextInput
                    style={styles.inputField}
                    autoCapitalize='none'
                    placeholder={placeholder}
                    password={password}
                    placeholderTextColor='black'
                    onChangeText={this.props.onChangeText}
                />
            </View>
        );
    }
}

const styles = {
    input: {
        flexDirection: 'row',
        marginTop: 30,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent',
        width: Dimensions.get('window').width
    },
    inputImage: {
        flex: 0.15,
        marginLeft: 50,
        fontSize: 30,
        color: 'black',
        opacity: 0.8
    },
    inputField: {
        flex: 0.85,
        paddingTop: 3,
        height: 30,
        color: 'black'
    }
};
