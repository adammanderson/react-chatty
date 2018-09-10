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
      isFocused: true
    }
  }

  toggleFocus() {
    this.setState(state => ({
      isFocused: !state.isFocused
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
            onActive={this.toggleFocus.bind(this)}
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
