import React from 'react'
import { render } from 'react-dom'
import Chatty from '../../src'
import styled from 'react-emotion'
import { injectGlobal } from 'emotion'

injectGlobal`
  body, html {
    min-height: 100%;
    margin: 0;
    font-size: 15px;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
  }
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`

const Wrapper = styled.div`
  height: 550px;
  width: 360px;
`

const App = () => (
  <Wrapper>
    <Chatty theme="light"/>
  </Wrapper>
)

render(<App />, document.getElementById("root"))
