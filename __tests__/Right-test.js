/**
 * @format
 */

import 'react-native';
import React from 'react';
import Right from '../comps/Right';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders Right correctly', () => {
  renderer.create(<Right />);
});