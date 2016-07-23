import React, {PropTypes} from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './createActions';
import MonthPicker from './MonthPicker';

class CreateContainer extends React.Component {
    static propTypes = {
        state: PropTypes.object.isRequired,

        // MonthPicker
        onPreviousMonth: PropTypes.func.isRequired,
        onNextMonth: PropTypes.func.isRequired,
        onSelectDay: PropTypes.func.isRequired

    };

    render() {
        return (
            <View style={styles.container}>
                <MonthPicker {...this.props} />
            </View>
        );
    }
}

const styles = {
    container: {
        height: 1000,
        backgroundColor: '#ECE5FB'
    }
};

function mapStateToProps(state) {
    return {
        state: state.create,
        token: state.login.token,
        loggedIn: state.login.loggedIn
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContainer);
