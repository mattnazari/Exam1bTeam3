/**
 * @format
 */

import 'react-native';
import React from 'react';
import Left from '../comps/Left';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Left />);
});
