import {Block } from "reakit";
import React ,{Component}from "react";
import styled from 'styled-components';
import { InputGroup, InputGroupAddon,Input ,ListGroup,ListGroupItem,Badge} from 'reactstrap';
import  * as R from 'ramda';


const getType=(type)=>{
    let color="";
   switch (type) {
    case 'Function':
       color="primary";
      break;
    case  'List':
       color="success";
       break;
    default:
      color="info";
      break;
  }
  return color;
};

const  SearchInput=(props)=> {
  return (
    <Block>
    <InputGroup>
       
       <Input placeholder="Filter" />
       <InputGroupAddon addonType="append">@</InputGroupAddon>
     </InputGroup>
    </Block>
  )
}

const  SideBarContainer=styled.div`
       width:250px;
       height:100%;
       position:absolute;
       left:0;
       top:100;
       background-color:rgba(255, 255, 255, 1);
       border:1px solid rgba(94, 254, 250, 1);
       

`
const StyledListGroupItem=styled(ListGroupItem)`
    display:flex;
    flex-direction:row;
    justify-content:'space-between';
    :hover{
        background-color:rgba(95, 98, 104, 0.4);
        transition: background-color 1s;
    }
`
const  SearchListItem=styled.div`
       display:inline-block;
       flex:1;

`


      

const  SearchList=(props)=>{
     
   const categories=props.content;
     
    return ( 
      
    <Block>
     <ListGroup>

     {
       categories.map((cat,index)=>(

         <StyledListGroupItem>
           <SearchListItem>
              <text >{cat.url}</text>
           </SearchListItem>
           <SearchListItem>
           <Badge color={getType(cat.title)} >{cat.title}</Badge>  
           </SearchListItem>
          
          
         </StyledListGroupItem>

       )) 
     }
    </ListGroup>
     </Block>
    )
    };


 


const SearchBar = (props) => {
  const content=props.content
  return (
    
    <SideBarContainer>
    <SearchInput />
    <SearchList content={content}/>
    </SideBarContainer>
  
  )
}





export {SideBarContainer,SearchBar} ;