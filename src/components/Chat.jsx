import React from 'react'
import styled from 'react-emotion'
import Message from './Message'

const ChatWrapper = styled.div`
  flex: 1;
  padding: 1.5em 0;
  background: ${props => props.theme.chat.background};
  overflow: scroll;
  scroll-behavior: smooth;
`

class Chat extends React.Component {

  componentDidMount() {
    this.focusChat()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.isFocused !== this.props.isFocused && this.props.isFocused) {
      this.focusChat()
    }
  }

  focusChat() {
    const chat = this.chat
    chat.scrollTop = chat.scrollHeight
  }

  render() {
    return (
      <ChatWrapper innerRef={node => this.chat = node}>
        {this.props.conversation.map((message, index) =>
          <Message
            key={index}
            message={message}
          />
        )}
      </ChatWrapper>
    )
  }
}

export default Chat
