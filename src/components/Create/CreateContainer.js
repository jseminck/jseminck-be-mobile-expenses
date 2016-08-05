import React, {PropTypes} from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './createActions';

import MonthPicker from './MonthPicker';
import CategoryPicker from './CategoryPicker';
import PricePicker from './PricePicker';
import Completed from './Completed';

class CreateContainer extends React.Component {
    static propTypes = {
        state: PropTypes.object.isRequired,

        // MonthPicker
        onPreviousMonth: PropTypes.func.isRequired,
        onNextMonth: PropTypes.func.isRequired,
        onSelectDay: PropTypes.func.isRequired,

        onSelectCategory: PropTypes.func.isRequired,

        // Completed
        onNextScreen: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired
    };

    render() {
        return (
            <View style={styles.container}>
                {this.getScreen()}
            </View>
        );
    }

    getScreen() {
        const {currentScreen} = this.props.state;

        if (currentScreen === 'MONTH') {
            return <MonthPicker {...this.props} />;
        }
        else if (currentScreen === 'CATEGORY') {
            return <CategoryPicker {...this.props} />;
        }
        else if (currentScreen === 'PRICE') {
            return <PricePicker {...this.props} />;
        }
        else {
            return <Completed {...this.props} />;
        }
    }
}

const styles = {
    container: {
        height: 1000,
        backgroundColor: '#fff'
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
