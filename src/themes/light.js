const light = {
  header: {
    background: '#823be3',
  },
  chat: {
    background: 'white'
  },
  bubble: [
    {
      type: 'user',
      color: '#ffffff',
      background: '#823be3',
      align: 'flex-end'
    },
    {
      type: 'agent',
      color: '#031931',
      background: '#ecf3f9',
      align: 'flex-start'
    },
    {
      type: 'waiting',
      color: '#031931',
      background: '#ecf3f9',
      align: 'flex-start'
    }
  ],
  composer: {
    borderColor: '#dce9f1',
    background: '#ffffff',
    color: '#031930'
  }
}

export default light
