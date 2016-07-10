import React from 'react';
import { View, Image, ActivityIndicatorIOS, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from './loginActions';

import routes from './../../scripts/routes';

import LoginInput from './LoginInput';
import LoginButton from './LoginButton';

class LoginScreen extends React.Component {
    static propTypes = {
        navigator: React.PropTypes.object.isRequired,

        // State
        state: React.PropTypes.object.isRequired,

        // Actions
        onStartupLogin: React.PropTypes.func.isRequired,
        onUsernameChange: React.PropTypes.func.isRequired,
        onPasswordChange: React.PropTypes.func.isRequired,
        onLoginClick: React.PropTypes.func.isRequired
    };

    componentDidMount() {
        if (!this.props.state.loggedIn) {
            this.props.onStartupLogin();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.state.loggedIn !== this.props.state.loggedIn && nextProps.state.loggedIn) {
            let route = routes.getAwsRoute();
            this.props.navigator.replace(route);
        }
    }

    onLoginClick() {
        this.props.onLoginClick({
            username: this.props.state.username,
            password: this.props.state.password
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <Image
                        source={require('./cloud.png')}
                        style={styles.containerLogoImage}
                    />
                    <LoginInput
                        icon='user'
                        placeholder='Username'
                        password={false}
                        onChangeText={this.props.onUsernameChange}
                    />
                    <LoginInput
                        icon='lock'
                        placeholder='Password'
                        password={true}
                        onChangeText={this.props.onPasswordChange}
                    />
                </View>
                <View style={styles.containerLogin}>
                    <LoginButton
                        style={styles.loginButton}
                        onPress={::this.onLoginClick}
                    />
                    { this.props.state.errorMessage && (
                        <View style={styles.errorMessage}>
                            <Text style={styles.errorMessageText}>
                                {this.props.state.errorMessage}
                            </Text>
                        </View>
                    )}
                </View>
                <ActivityIndicatorIOS
                    animating={this.props.state.loading}
                    size='large'
                    style={styles.activityIndicator}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {state: state.login};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(loginActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    containerLogo: {
        flex: 0.66,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerLogoImage: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    containerLogin: {
        flex: 0.33
    },
    loginButton: {
        flex: 0.8,
        height: 100
    },
    errorMessage: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    errorMessageText: {
        fontSize: 20,
        color: 'red'
    },
    activityIndicator: {
        marginTop: 15
    }
};
