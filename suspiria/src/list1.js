import React from 'react';
import list from './list'
import Baby from './list2'
 function Sia() {
     const person = list.map( ( list ) => <Baby id={list.id} completed={list.completed} text={list.task }/>)
     return (
         <div>
             {person}
         </div>
    )
}
export default Sia