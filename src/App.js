import React, { Component } from 'react'
import {CodeEditor} from './Component/CodeEditor';
import {codes} from './Code/code';
import * as R from 'ramda';
import styled from 'styled-components';
import { Provider,Block,Box } from "reakit";
import theme from "reakit-theme-default";
import  {SideBarContainer,SearchBar} from "./Component/sideBar";
import {MainNav} from './Component/NavBar';

const scope={R,styled}
export default class App extends Component {
  render() {
    return (
      <Provider theme={theme}>
      <Box>
      <Block>
        <MainNav/>
      </Block>
      
      <Block>
         <SearchBar/>
      </Block>
      <Block color="red">
     
      
       {  codes.map((code,i)=>(
              <CodeEditor code={code.code} scope={scope} ></CodeEditor>
          )) 
        }
        </Block>
       </Box>
      </Provider>
    )
  }
}
