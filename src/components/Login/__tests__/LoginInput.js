import 'react-native';
import React from 'react';
import LoginInput from './../LoginInput';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <LoginInput />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});