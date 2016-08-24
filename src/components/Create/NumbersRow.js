import React from 'react';
import { View } from 'react-native';
import Number from './Number';

export default ({numbers}) => (
    <View style={styles.container}>
      {numbers.map(number => (
          <Number
              key={number}
              value={number}
          />
      ))}
    </View>
);

const styles = {
    container: {
        marginTop: 10,
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row'
    }
};
