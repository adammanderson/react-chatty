import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import THEMES from './themes'
import ChattyWrapper from './components/ChattyWrapper'
import Header from './components/Header'
import Chat from './components/Chat'
import Composer from './components/Composer'
import messages from './messages'

class Chatty extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFocused: true,
      isTyping: false
    }
  }

  onBlur() {
    this.setState(state => ({
      isFocused: false
    }))
  }

  isTyping(typing) {
    this.setState(state => ({
      isFocused: true,
      isTyping: typing
    }))
  }

  render() {
    const { isFocused } = this.state

    return (
      <ThemeProvider theme={THEMES[this.props.theme]}>
        <ChattyWrapper>
          <Header />
          <Chat
            conversation={messages}
            isFocused={isFocused}
          />
          <Composer
            isFocused={isFocused}
            isTyping={this.isTyping.bind(this)}
            onBlur={this.onBlur.bind(this)}
          />
        </ChattyWrapper>
      </ThemeProvider>
    )
  }
}

Chatty.defaultProps = {
  theme: 'light'
}

export default Chatty
