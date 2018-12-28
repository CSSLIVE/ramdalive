import React, { Component } from 'react'
import {CodeEditor} from './Component/CodeEditor';
import {codes} from './Code/code';
import * as R from 'ramda';
import styled from 'styled-components';
import { Provider,Box } from "reakit";
import theme from "reakit-theme-default";
const scope={R,styled}
export default class App extends Component {
  render() {
    return (
      <Provider theme={theme}>
      <Box color="red">
      
      
       {  codes.map((code,i)=>(
              <CodeEditor code={code.code} scope={scope} ></CodeEditor>
          )) 
        }
        </Box>
      </Provider>
    )
  }
}
