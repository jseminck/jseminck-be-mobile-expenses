import moment from 'moment';
import React from 'React';
import {View, TouchableHighlight, Text, Image} from 'react-native';

export default ({onPreviousMonth, onNextMonth, year, month}) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <TouchableHighlight
                    underlayColor='#A38BD7'
                    onPress={onPreviousMonth}
                >
                    <Image
                        source={require('./navigate.png')}
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
                    underlayColor='#A38BD7'
                    onPress={onNextMonth}
                >
                    <Image
                        source={require('./navigate.png')}
                        style={styles.nextButton}
                    />
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = {
    wrapper: {
        backgroundColor: '#A38BD7',
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
        marginRight: 20,
        transform: [{rotate: '180deg'}]
    }
};