import React from 'react';
import { View } from 'react-native';
import getDaysForYearAndMonth from './util/getDaysForYearAndMonth';
import MonthPickerDay from './MonthPickerDay';
import MonthPickerWeek from './MonthPickerWeek';

export default ({year, month, selectedDay}) => {
    const days = getDaysForYearAndMonth(year, month);

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <MonthPickerDay day="Mon" />
                <MonthPickerDay day="Tue" />
                <MonthPickerDay day="Wed" />
                <MonthPickerDay day="Thu" />
                <MonthPickerDay day="Fri" />
                <MonthPickerDay day="Sat" />
                <MonthPickerDay day="Sun" />
            </View>
            {days.map((week, index) => {
                return (
                    <MonthPickerWeek
                        key={index}
                        week={week}
                        selectedDay={selectedDay}
                    />
                );
            })}
        </View>
    );
};

const styles = {
    wrapper: {
        backgroundColor: '#DCD0F6'
    },
    container: {
        marginTop: 10,
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row'
    }
};