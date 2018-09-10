import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

const BubbleWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 1.3em;
  align-items: ${props => props.theme.bubble.find(b => b.type === props.type).align}
`

const BubbleContent = styled.span`
  padding: 0.7em 1em;
  max-width: 70%;
  border-radius: 1.3em;
  line-height: 1.5em;
  background: ${props => props.theme.bubble.find(b => b.type === props.type).background};
  color: ${props => props.theme.bubble.find(b => b.type === props.type).foreground};
`

const Bubble = (props) => (
  <BubbleWrapper type={props.type}>
    <BubbleContent type={props.type}>
      {props.content}
    </BubbleContent>
  </BubbleWrapper>
)

Bubble.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['user', 'agent', 'waiting']).isRequired
}

export default Bubble
