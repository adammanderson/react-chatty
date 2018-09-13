import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import Bubble from './Bubble'
import Avatar from './Avatar'

const MessageWrapper = styled.div`
  display: flex;
  flex-flow: ${props => props.type === 'agent' ? 'row nowrap' : 'row-reverse nowrap'};
  margin-bottom: 1.8em;
  align-items: flex-end;
`

const Message = (props) => (
  <MessageWrapper type={props.message.type}>
    <Avatar />
    <Bubble message={props.message} />
  </MessageWrapper>
)

Message.propTypes = {
  message: PropTypes.shape({
    type: PropTypes.oneOf(['user', 'agent', 'waiting']).isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
}

export default Message
