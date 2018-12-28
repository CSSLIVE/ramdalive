import {Block } from "reakit";
import React,{Component} from "react";
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
       
       <Input placeholder="Filter"  onChange={() => this.setState({searchinput: 'a'})}/>
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
       border:1px solid rgba(94, 254, 250, 0.2);
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

const  StyledBadge=styled(Badge)`
    display:inline-block;
    width:50;
    
`
      

const  SearchList=(props)=>{
     
   const categories=props.content;
     
    return ( 
      
    <Block>
     <ListGroup>

     {
       categories.map((cat,index)=>{

        let color=getType(cat.title)

        return ( <StyledListGroupItem>
           <SearchListItem>
              <text >{cat.url}</text>
           </SearchListItem>
           <SearchListItem>
             <StyledBadge color={color}>{cat.title}</StyledBadge>  
           </SearchListItem>
          
          
         </StyledListGroupItem>
        )
       }) 
     }
    </ListGroup>
     </Block>
    )
    };

class SearchBar extends Component {
    constructor(props) {
      super(props);
       this.state={
         searchinput:null
       }
    }
   render(props) {
     return (
            <SideBarContainer {...props}>
            <SearchInput {...props}/>
            <SearchList {...props}/>
            </SideBarContainer>
     )
   }
 }
 

// class  SideBar extends Component {
    
//   constructor (props) {
//     super(props);
//     this.setState({"List":props.content});
//     this.setState({"searchinput":""});
//     //this.searchUpdated=this.searchUpdated.bind(this);
//   }
  
  

  
//   render(props) {
    
    
//     return (
//       <SideBarContainer {...props}>
//          <SearchInput />
//          <SearchList {...props}/>
//       </SideBarContainer>
//     )
//   };

//   // const  searchUpdated=(e)=>{

//   //   this.setState({'searchinput':e.text})
//   // } 
// };





export {SideBarContainer,SearchBar} ;


// [
//   {username: 'bob', age: 30, tags: ['work', 'boring']},
//   {username: 'jim', age: 25, tags: ['home', 'fun']},
//   {username: 'jane', age: 30, tags: ['vacation', 'fun']}
// ]

// R.filter(R.where({tags: R.contains('fun')}),arr)
