import React, {PropTypes} from 'react';
import { View, ScrollView } from 'react-native';

import CreateHeader from './../CreateHeader';
import CreateSubmit from './../CreateSubmit';

import CategoryValue from './CategoryValue';

const categories = [
    'Clothes', 'Cosmetic', 'Eating Out', 'Education', 'Entertainment', 'Fashion', 'Gas', 'Groceries',
    'Home', 'Internet', 'Loan', 'Medical', 'Pets', 'Presents', 'Rent', 'Sports', 'Study', 'Transport',
    'Travel', 'Work Lunch'
];

export default class CategoryPicker extends React.Component {
    static propTypes = {
        state: PropTypes.object.isRequired,

        onSelectCategory: PropTypes.func.isRequired,
        onNextScreen: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired
    };

    render() {
        return (
            <View>
                <CreateHeader title="Category" />
                <ScrollView
                    style={styles.container}
                >
                    <View style={styles.center}>
                        {categories.map(category => (
                            <CategoryValue
                                key={category}
                                value={category}
                                isSelected={category === this.props.state.category}
                                onSelectCategory={this.props.onSelectCategory}
                            />
                        ))}
                    </View>
                </ScrollView>
                <View style={styles.buttons}>
                    <CreateSubmit
                        onNextScreen={this.props.onNextScreen}
                        onCancel={this.props.onCancel}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        marginTop: 50,
        height: 300
    },
    buttons: {
        marginTop: 50
    },
    center: {
        alignItems: 'center'
    }
};