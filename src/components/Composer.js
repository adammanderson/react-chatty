import React from 'react'
import styled from 'react-emotion'

const ComposerWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-height: 105px;
  overflow: scroll;
  margin: 0 1em;
  border-top: 1px solid rgba(255,255,255,0.2);
`

const ComposerInput = styled.div`
  flex: 1;
  padding: 1.5em;
  color: white;
  outline: none;
`

class Composer extends React.Component {
  render() {
    return (
      <ComposerWrapper innerRef={node => this.composer = node}>
        <ComposerInput
          innerRef={node => this.composerInput = node}
          contentEditable
          onClick={this.props.onActive}
        />
      </ComposerWrapper>
    )
  }
}

export default Composer
