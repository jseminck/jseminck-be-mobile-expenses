import React, {PropTypes} from 'react';
import { View, Text } from 'react-native';

import CreateHeader from './../CreateHeader';
import CreateSubmit from './../CreateSubmit';

export default class Completed extends React.Component {
    static propTypes = {
        state: PropTypes.object.isRequired,

        // Completed
        onCompleted: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired
    };

    render() {
        const {year, month, day, category, price} = this.props.state;

        return (
            <View>
                <CreateHeader title="Completed" />
                <View style={styles.container}>
                    <Text style={styles.value}>
                        {year} - {month} - {day}
                    </Text>
                    <Text style={styles.value}>
                        {category}
                    </Text>
                    <Text style={styles.value}>
                        {price}
                    </Text>
                </View>
                <CreateSubmit
                    submitText="Save"
                    onNextScreen={() => {
                        this.props.onCompleted({
                            description: '',
                            price: Number(price),
                            category,
                            purchase_date: `${year}-${month}-${day} 00:00:00`
                        });
                    }}
                    onCancel={this.props.onCancel}
                />
            </View>
        );
    }
}

const styles = {
    container: {
        paddingTop: 50,
        height: 400,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
    },
    value: {
        margin: 20
    }
};