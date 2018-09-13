import React from 'react'
import styled from 'react-emotion'

const ComposerWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-height: 105px;
  overflow: scroll;
  border-top: 1px solid ${props => props.theme.composer.borderColor};
`

const ComposerInput = styled.div`
  flex: 1;
  padding: 1.5em;
  color: ${props => props.theme.composer.color};
  outline: none;
  &:empty:before {
    content: attr(placeholder);
    display: block;
  }
`

class Composer extends React.Component {
  handleTyping(e) {
    this.props.isTyping()
  }
  
  render() {
    const { isFocused, onBlur } = this.props

    return (
      <ComposerWrapper innerRef={node => this.composer = node}>
        <ComposerInput
          innerRef={node => this.composerInput = node}
          contentEditable
          onBlur={onBlur.bind(this)}
          onInput={(e) => this.handleTyping(e)}
          placeholder="Type a message..."
        />
      </ComposerWrapper>
    )
  }
}

export default Composer
