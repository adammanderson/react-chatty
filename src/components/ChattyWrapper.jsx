import styled from 'react-emotion'

const ChattyWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  background: ${props => props.theme.chat.background}
`
export default ChattyWrapper
