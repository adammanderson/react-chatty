import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'emotion-theming'
import THEMES from '../src/themes'
import Bubble from '../src/components/Bubble';

test('Bubble renders with theme', () => {
  const component = renderer.create(
    <ThemeProvider theme={THEMES.light}>
      <Bubble
        content="Test"
        type="user"
      />
    </ThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
