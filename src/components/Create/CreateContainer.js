import React, {PropTypes} from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './createActions';
import routes from './../../scripts/routes';

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

        onRemovePrice: PropTypes.func.isRequired,

        // Completed
        onNextScreen: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
        onChangeTab: PropTypes.func.isRequired
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
            return (
                <MonthPicker
                    {...this.props}
                    onCancel={::this.onCancel}
                />
            );
        }
        else if (currentScreen === 'CATEGORY') {
            return (
                <CategoryPicker
                    {...this.props}
                    onCancel={::this.onCancel}
                />
            );
        }
        else if (currentScreen === 'PRICE') {
            return (
                <PricePicker
                    {...this.props}
                    onCancel={::this.onCancel}
                />
            );
        }
        else {
            return (
                <Completed
                    {...this.props}
                    onCancel={::this.onCancel}
                />
            );
        }
    }

    onCancel() {
        this.props.onCancel();
        this.props.onChangeTab();
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
