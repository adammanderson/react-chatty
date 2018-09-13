import React from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'
import styled from 'react-emotion'

const BubbleWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 1.3em;
  align-items: ${props => props.theme.bubble.find(b => b.type === props.type).align}
`

const BubbleContent = styled.span`
  padding: 0.9em 1.2em;
  max-width: 70%;
  line-height: 1.5em;
  border-radius: ${props => props.type === 'user' ? '1.5em 1.5em 0 1.5em;' : '1.5em 1.5em 1.5em 0;'}
  background: ${props => props.theme.bubble.find(b => b.type === props.type).background};
  color: ${props => props.theme.bubble.find(b => b.type === props.type).color};
  p {
    margin: 0;
  }
`

const Bubble = (props) => (
  <BubbleWrapper type={props.type}>
    <BubbleContent
      type={props.type}
      dangerouslySetInnerHTML={{__html: marked(props.content)}}
    />
  </BubbleWrapper>
)

Bubble.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['user', 'agent', 'waiting']).isRequired
}

export default Bubble
