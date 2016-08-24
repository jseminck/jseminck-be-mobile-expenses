import React, {PropTypes} from 'react';
import { View, ScrollView } from 'react-native';
import CreateHeader from './CreateHeader';
import CreateSubmit from './CreateSubmit';
import NumbersRow from './NumbersRow';
import TotalPrice from './TotalPrice';

const numbers = [
  ['9', '8', '7'],
  ['6', '5', '4'],
  ['3', '2', '1'],
  ['0', ',']
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
        height: 450,
        flex: 1
    },
    center: {
        alignItems: 'center'
    }
};