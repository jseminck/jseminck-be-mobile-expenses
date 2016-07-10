import moment from 'moment';
import React, {PropTypes} from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './createActions';

import getDaysForYearAndMonth from './util/getDaysForYearAndMonth';

class CreateContainer extends React.Component {
    static propTypes = {
        state: PropTypes.object.isRequired,

        onPreviousMonth: PropTypes.func.isRequired,
        onNextMonth: PropTypes.func.isRequired
    };

    render() {
        const days = getDaysForYearAndMonth(this.props.state.year, this.props.state.month);

        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleValue}>
                        Month
                    </Text>
                </View>
                <View style={styles.monthContainer}>
                    <TouchableHighlight
                        onPress={this.props.onPreviousMonth}
                        underlayColor='#fff'
                    >
                        <Image
                            source={require('./navigate.png')}
                            style={styles.previousButton}
                        />
                    </TouchableHighlight>
                    <Text style={styles.monthValue}>
                        {this.props.state.year}
                    </Text>
                    <Text style={styles.monthName}>
                        {moment(`${this.props.state.year} ${this.props.state.month}`, 'YYYY MM').format('MMMM')}
                    </Text>
                    <TouchableHighlight
                        onPress={this.props.onNextMonth}
                        underlayColor='#fff'
                    >
                        <Image
                            source={require('./navigate.png')}
                            style={styles.nextButton}
                        />
                    </TouchableHighlight>
                </View>
                <View style={styles.daysContainer}>
                    <Text style={styles.daysValue}>
                        Mo
                    </Text>
                    <Text style={styles.daysValue}>
                        Tu
                    </Text>
                    <Text style={styles.daysValue}>
                        We
                    </Text>
                    <Text style={styles.daysValue}>
                        Th
                    </Text>
                    <Text style={styles.daysValue}>
                        Fr
                    </Text>
                    <Text style={styles.daysValue}>
                        Sa
                    </Text>
                    <Text style={styles.daysValue}>
                        Su
                    </Text>
                </View>
                {days.map(week => {
                    return (
                        <View style={styles.daysContainer}>
                            {week.map(day => {
                                if (day === this.props.state.day) {
                                    return (
                                        <Text style={{...styles.daysValue, ...styles.selectedValue}}>
                                            {day > 0 ? day : ''}
                                        </Text>
                                    );
                                }
                                else {
                                    return (
                                        <Text style={{...styles.daysValue}}>
                                            {day > 0 ? day : ''}
                                        </Text>
                                    );
                                }
                            })}
                        </View>
                    );
                })}

                <View style={styles.submitContainer}>
                    <TouchableHighlight style={styles.cancelButton}>
                        <Text style={styles.cancelButtonText}>
                            Cancel
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>
                            Next
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
    },
    titleContainer: {
        alignSelf: 'center',
        marginTop: 40
    },
    titleValue: {
        fontSize: 36
    },
    monthContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 40,
        padding: 20
    },
    monthValue: {
        fontSize: 20,
        width: 50
    },
    monthName: {
        marginLeft: 15,
        fontSize: 20,
        width: 120
    },
    daysContainer: {
        marginTop: 10,
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    daysValue: {
        width: 30,
        fontSize: 14,
        fontWeight: 'bold'
    },
    selectedValue: {
        color: 'blue'
    },
    nextButton: {
        marginLeft: 20
    },
    previousButton: {
        marginRight: 20,
        transform: [{rotate: '180deg'}]
    },
    submitContainer: {
        marginTop: 100,
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    cancelButton: {
        borderColor: 'red',
        borderWidth: 1,
        padding: 10
    },
    cancelButtonText: {
        color: 'red',
        fontSize: 24
    },
    submitButton: {
        borderColor: 'green',
        borderWidth: 1,
        marginLeft: 10,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 10
    },
    submitButtonText: {
        color: 'green',
        fontSize: 24
    }
};

function mapStateToProps(state) {
    return {
        state: state.create,
        token: state.login.token,
        loggedIn: state.login.loggedIn
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateContainer);
