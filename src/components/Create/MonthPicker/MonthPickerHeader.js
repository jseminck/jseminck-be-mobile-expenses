import moment from 'moment';
import React from 'React';
import {View, TouchableHighlight, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({onPreviousMonth, onNextMonth, year, month}) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <TouchableHighlight
                    underlayColor='#eee'
                    onPress={onPreviousMonth}
                >
                    <Icon
                        name="arrow-circle-left"
                        size={30}
                        style={styles.previousButton}
                    />
                </TouchableHighlight>
                <Text style={styles.monthValue}>
                    {year}
                </Text>
                <Text style={styles.monthName}>
                    {moment(`${year} ${month}`, 'YYYY MM').format('MMMM')}
                </Text>
                <TouchableHighlight
                    underlayColor='#eee'
                    onPress={onNextMonth}
                >
                    <Icon
                        name="arrow-circle-right"
                        size={30}
                        style={styles.nextButton}
                    />
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = {
    wrapper: {
        backgroundColor: '#eee',
        marginTop: 40
    },
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 20
    },
    monthValue: {
        color: 'black',
        fontSize: 20,
        width: 50
    },
    monthName: {
        color: 'black',
        marginLeft: 15,
        fontSize: 20,
        width: 120
    },
    nextButton: {
        marginLeft: 20
    },
    previousButton: {
        marginRight: 20
    }
};