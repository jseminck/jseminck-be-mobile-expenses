import React, {PropTypes} from 'react';
import { View, Text, ActivityIndicator, TextInput } from 'react-native';

import CreateHeader from './../CreateHeader';
import CreateSubmit from './../CreateSubmit';

export default class Completed extends React.Component {
    static propTypes = {
        state: PropTypes.object.isRequired,

        onChangeDescription: PropTypes.func.isRequired,

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
                        {category} - {price}
                    </Text>

                    <TextInput
                        style={styles.textInput}
                        editable={true}
                        maxLength={120}
                        value={this.props.state.description}
                        onChangeText={(text) => this.props.onChangeDescription(text)}
                        placeholder='Expense description'
                    />

                  {this.props.state.loading && this.renderLoadingButton()}
                </View>
                <View>
                    <CreateSubmit
                        submitText="Save"
                        onNextScreen={() => {
                            this.props.onCompleted({
                                description: this.props.state.description,
                                price: Number(price),
                                category,
                                purchase_date: `${year}-${month}-${day} 00:00:00`
                            });
                        }}
                        onCancel={this.props.onCancel}
                    />
                </View>
            </View>
        );
    }

    renderLoadingButton() {
        return (
              <ActivityIndicator
                  animating={this.props.state.loading}
                  size='large'
                  style={styles.activityIndicator}
            />
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
        margin: 5
    },
    textInput: {
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
        padding: 10,
        height: 20,
        borderColor: 'gray',
        borderWidth: 1
    },
    activityIndicator: {
        marginTop: 20
    }
};