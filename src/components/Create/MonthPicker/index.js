import React, {PropTypes} from 'react';
import { View } from 'react-native';

import CreateHeader from './../CreateHeader';
import CreateSubmit from './../CreateSubmit';

import MonthPickerHeader from './MonthPickerHeader';
import MonthPickerDays from './MonthPickerDays';

export default class MonthPicker extends React.Component {
    static propTypes = {
        state: PropTypes.object.isRequired,

        onPreviousMonth: PropTypes.func.isRequired,
        onNextMonth: PropTypes.func.isRequired,
        onSelectDay: PropTypes.func.isRequired,

        // Completed
        onNextScreen: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired
    };

    render() {
        return (
            <View>
                <CreateHeader title="Month" />
                <View style={styles.container}>
                    <MonthPickerHeader
                        year={this.props.state.year}
                        month={this.props.state.month}
                        onPreviousMonth={this.props.onPreviousMonth}
                        onNextMonth={this.props.onNextMonth}
                    />
                    <MonthPickerDays
                        year={this.props.state.year}
                        month={this.props.state.month}
                        selectedDay={this.props.state.day}
                        onSelectDay={this.props.onSelectDay}
                    />
                </View>
                <CreateSubmit
                    onNextScreen={this.props.onNextScreen}
                    onCancel={this.props.onCancel}
                />
            </View>
        );
    }
}

const styles = {
    container: {
        height: 400
    }
};
