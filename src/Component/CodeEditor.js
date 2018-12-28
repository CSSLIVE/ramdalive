import React from 'react';
import styled from 'styled-components';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live';
// import {Grid} from "reakit";
// const template = `
//   "a a b" ;
//   "a a b" ;
//   "a a c" ;
// `;
const CodeContainer=styled(LiveProvider)`
    width:90%;
    margin:0 auto;
    background-color:'#e9ecef';
    box-shadow: rgba(20, 20, 20, 0.27) 0.0555556rem 0.0555556rem 1.11111rem;
    border-radius:4px;
    padding:5px;
  
`
const   Code=styled(LiveEditor)`
        
        border-radius:0px;
        
 `;       
        
  
const  Preview=styled(LivePreview)`
      background-color:papayawhip;
      border:1px solid rgba(222,222,222,.2);
      border-radius:0px;
      padding:5px;
      :hover{background-color:red;
      transition: background-color 1s;
      }
`
const  Error=styled(LiveError)`
      
      background-color:yellow;
      height:1fr;
      border:1px solid rgba(222,222,222,.2);
      border-radius:3px;
      padding:10px;
  `    

  const CodeEditor=(props)=>{
    const code=props.code;
    const scope=props.scope;
    const text=props.content;
        return (
      
      
      <CodeContainer code={code} scope={scope} noInline={true}>
            <Code />
            <Error />
            <Preview/>
       </CodeContainer>
    )
    };
// const CardInfo = (props) => {
//   return (
//     <div>
//       <Jumbotron width="100%">
        
      
//           <CodeContainer code={code} scope={scope} noInline={true}>
//                 <Code />
//                 <LiveError />
//                  <Preview/>
//           </CodeContainer>
        
//       </Jumbotron>
//     </div>
//   );
// };

export  {CodeEditor};