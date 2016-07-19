import React, {PropTypes} from 'react';
import { View } from 'react-native';

import CreateHeader from './CreateHeader';
import MonthPickerHeader from './MonthPickerHeader';
import MonthPickerDays from './MonthPickerDays';
import CreateSubmit from './CreateSubmit';

export default class MonthPicker extends React.Component {
    static propTypes = {
        state: PropTypes.object.isRequired,

        onPreviousMonth: PropTypes.func.isRequired,
        onNextMonth: PropTypes.func.isRequired
    };

    render() {
        return (
            <View>
                <CreateHeader title="Month" />
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
                />
                <CreateSubmit />
            </View>
        );
    }
}
