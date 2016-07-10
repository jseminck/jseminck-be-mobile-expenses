import React from 'react';
import { View } from 'react-native';

// Nothing here... not sure if needed...
export default class LoginAbout extends React.Component {
    render() {
        return (
            <View style={styles.about} />
        );
    }
}

const styles = {
    about: {
        flex: 0.2,
        backgroundColor: 'white'
    }
};