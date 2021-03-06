import React from 'react'
import marked from 'marked'
import Moment from 'react-moment'
import styled from 'react-emotion'

const BubbleWrapper = styled.div`
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

const BubbleTime = styled.div`
  margin: 0.8em 0 0 0;
  font-size: 0.9em;
  text-align: right;
  line-height: 1.1em;
  opacity: 0.7;
  user-select: none;
`

const Bubble = (props) => (
  <BubbleWrapper type={props.message.type}>
    <div
      dangerouslySetInnerHTML={{__html: marked(props.message.content)}}
    />
    { props.message.time &&
      <BubbleTime>
        <Moment
          date={props.message.time}
          format="HH:mma"
        />
      </BubbleTime>
    }
  </BubbleWrapper>
)

export default Bubble
