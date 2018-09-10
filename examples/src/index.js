import React from 'react'
import { render } from 'react-dom'
import Chatty from '../../src'
import styled from 'react-emotion'
import { injectGlobal } from 'emotion'

injectGlobal`
  body, html, {
    min-height: 100%;
    margin: 0;
  }
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 650px;
    height: 100%;
  }
`

const Wrapper = styled.div`
  height: 600px;
  width: 400px;
  background: #efefef;
`;

const App = () => (
  <Wrapper>
    <Chatty />
  </Wrapper>
)

render(<App />, document.getElementById("root"))
