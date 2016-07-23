import React, {PropTypes} from 'react';
import { View } from 'react-native';

import CreateHeader from './CreateHeader';
import CreateSubmit from './CreateSubmit';

export default class CategoryPicker extends React.Component {
    static propTypes = {
        state: PropTypes.object.isRequired,

        // Completed
        onNextScreen: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired
    };

    render() {
        return (
            <View>
                <CreateHeader title="Category" />

                <CreateSubmit
                    onNextScreen={this.props.onNextScreen}
                    onCancel={this.props.onCancel}
                />
            </View>
        );
    }
}
