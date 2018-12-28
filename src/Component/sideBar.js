import {Block } from "reakit";
import React from "react";
import styled from 'styled-components';
import { InputGroup, InputGroupAddon,Input ,ListGroup,ListGroupItem} from 'reactstrap';

const SearchInput=()=>(
    <Block>
    <InputGroup>
       
       <Input placeholder="Filter" />
       <InputGroupAddon addonType="append">@</InputGroupAddon>
     </InputGroup>
    </Block>
      
)



const  SideBarContainer=styled.div`
       width:200px;
       height:100%;
       position:absolute;
       left:0;
       top:100;
       background-color:rgba(255, 255, 255, 1);
       border:1px solid rgba(94, 254, 250, 1);
       

`

const  SearchList=(props)=>(

     <Block>
     <ListGroup>
     <ListGroupItem>Cras justo odio</ListGroupItem>
     <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
     <ListGroupItem>Morbi leo risus</ListGroupItem>
     <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
     <ListGroupItem>Vestibulum at eros</ListGroupItem>
   </ListGroup>
     </Block>
)
const SearchBar=(props)=>(

    <SideBarContainer>
      <SearchInput />
      <SearchList/>
    </SideBarContainer>
)



export {SideBarContainer,SearchBar} ;