import React, {PropTypes} from 'react';
import { View, ScrollView } from 'react-native';
import CreateHeader from './../CreateHeader';
import CreateSubmit from './../CreateSubmit';
import NumbersRow from './NumbersRow';
import TotalPrice from './TotalPrice';

const numbers = [
  ['7', '8', '9'],
  ['4', '5', '6'],
  ['1', '2', '3'],
  ['0', '.']
];

export default class PricePicker extends React.Component {
    static propTypes = {
        state: PropTypes.object.isRequired,

        onRemovePrice: PropTypes.func.isRequired,

        onSelectCategory: PropTypes.func.isRequired,
        onNextScreen: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired
    };

    render() {
        return (
            <View>
                <CreateHeader title="Price" />
                <ScrollView style={styles.container}>
                    <View style={styles.center}>
                        <TotalPrice
                            price={this.props.state.price}
                            onRemovePrice={this.props.onRemovePrice}
                        />
                        {numbers.map((numbersRow, index) => (
                            <NumbersRow
                                key={index}
                                numbers={numbersRow}
                                onAddPrice={this.props.onAddPrice}
                            />
                        ))}
                    </View>
                </ScrollView>
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
        height: 400,
        flex: 1
    },
    center: {
        alignItems: 'center'
    }
};