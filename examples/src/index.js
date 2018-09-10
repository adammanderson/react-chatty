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
    min-height: 600px;
    height: 100%;
  }
`

const Wrapper = styled.div`
  height: 100vh;
  max-width: 400px;
`

const App = () => (
  <Wrapper>
    <Chatty theme="dark"/>
  </Wrapper>
)

render(<App />, document.getElementById("root"))
