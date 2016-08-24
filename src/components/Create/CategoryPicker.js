import React, {PropTypes} from 'react';
import { View, ScrollView } from 'react-native';

import CreateHeader from './CreateHeader';
import CategoryValue from './CategoryValue';
import CreateSubmit from './CreateSubmit';

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
                <ScrollView style={styles.container}>
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