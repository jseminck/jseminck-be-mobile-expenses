import 'react-native';
import React from 'react';
import LoginInput from './../LoginInput';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly without password', () => {
    const tree = renderer.create(
        <LoginInput
            icon="glass"
            placeholder="myPlaceholder"
            onChangeText={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

it('renders correctly with password', () => {
    const tree = renderer.create(
        <LoginInput
            icon="myIcon"
            placeholder="myPlaceholder"
            password={true}
            onChangeText={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});