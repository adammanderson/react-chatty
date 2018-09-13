import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'emotion-theming'
import THEMES from '../src/themes'
import Message from '../src/components/Message'

const testMessage =  {
    type: 'user',
    content: '**Here\'s the forecast: Tonight will start dry with clear periods.** Cloud may thicken through the last few hours of the night. A gentle southwesterly breeze can be expected.',
    time: '2018-09-13T14:10:13'
}

test('Message renders with theme', () => {
  const component = renderer.create(
    <ThemeProvider theme={THEMES.light}>
      <Message
        message={testMessage}
      />
    </ThemeProvider>
  );
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
