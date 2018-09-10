import React from 'react'
import styled from 'react-emotion'

const Header = styled.div`
  flex: 0 0 60px;
  background: ${props => props.theme.header.background};
`

export default () => (
  <Header>
  </Header>
)
