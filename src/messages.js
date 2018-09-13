const messages = [
  {
    type: 'agent',
    content: 'Hey there, _how_ can I help?'
  },
  {
    type: 'user',
    content: 'Is it going to rain today?'
  },
  {
    type: 'agent',
    content: 'Here\'s the forecast: Tonight will start dry with clear periods. Cloud may thicken through the last few hours of the night. A gentle southwesterly breeze can be expected.'
  },
  {
    type: 'waiting',
    content: '...'
  },
  {
    type: 'user',
    content: '**Here\'s the forecast: Tonight will start dry with clear periods.**Cloud may thicken through the last few hours of the night. A gentle southwesterly breeze can be expected.'
  },
  {
    type: 'agent',
    content: 'Here\'s the forecast: Tonight will start dry with clear periods. Cloud may thicken through the last few hours of the night. A gentle southwesterly breeze can be expected.'
  }
]

export default messages
