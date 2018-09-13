const messages = [
  {
    type: 'agent',
    content: 'Hey there, _how_ can I help?',
    time: '2018-09-13T15:09:13+01:00'
  },
  {
    type: 'user',
    content: 'Is it going to rain today?',
    time: '2018-09-13T15:12:13+01:00'

  },
  {
    type: 'agent',
    content: 'Here\'s the forecast: Tonight will start dry with clear periods. Cloud may thicken through the last few hours of the night. A gentle southwesterly breeze can be expected.',
    time: '2018-09-13T14:09:13+01:00'
  },
  {
    type: 'waiting',
    content: '...'
  },
  {
    type: 'user',
    content: '**Here\'s the forecast: Tonight will start dry with clear periods.** Cloud may thicken through the last few hours of the night. A gentle southwesterly breeze can be expected.',
    time: '2018-09-13T14:10:13+01:00'
  },
  {
    type: 'agent',
    content: 'Here\'s the forecast: Tonight will start dry with clear periods. Cloud may thicken through the last few hours of the night. A gentle southwesterly breeze can be expected.',
    time: '2018-09-13T13:13:13+01:00'

  }
]

export default messages
