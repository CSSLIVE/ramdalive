import {Block } from "reakit";
import React from "react";
import styled from 'styled-components';
import { InputGroup, InputGroupAddon,Input ,ListGroup,ListGroupItem,Badge} from 'reactstrap';


const SearchInput=()=>(
    <Block>
    <InputGroup>
       
       <Input placeholder="Filter" />
       <InputGroupAddon addonType="append">@</InputGroupAddon>
     </InputGroup>
    </Block>
      
)



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
     
     const categories=props.content
     console.log(categories);
    return ( <Block>
     <ListGroup>

     {
       categories.map((cat,index)=>(

         <StyledListGroupItem>
           <SearchListItem>
              <text >{cat.url}</text>
           </SearchListItem>
           <SearchListItem>
           <Badge color="primary" >{cat.title}</Badge>  
           </SearchListItem>
          
          
         </StyledListGroupItem>

       )) 
     }
     
     
   </ListGroup>
     </Block>
    )
}
const SearchBar=(props)=>(

    <SideBarContainer {...props}>
      <SearchInput />
      <SearchList {...props}/>
    </SideBarContainer>
)



export {SideBarContainer,SearchBar} ;