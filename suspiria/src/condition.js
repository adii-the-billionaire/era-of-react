import React from 'react';
 function Tip(props){
     return (
         <div>
             {
                 props.isLoading?<h1>Loading....</h1>:<h1>Some cool stuff about conditional rendering</h1>
             }
         </div>
         
     )
   }
    

 
export default Tip;