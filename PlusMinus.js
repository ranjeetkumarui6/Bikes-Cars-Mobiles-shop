import { useState } from 'react';
import './PlushMinus.css';
const Plus = ()=>{
    const[x,setx]=useState(0);
        function fun1(){
           setx(x+1)
         
        }
        function fun2(){
          setx(x-1)
         
        }
    return(
        
        <>
       
        <div id="m1" className="r4">{x}</div>
        <button  className='b' onClick={fun1}>+</button>
        <button className='b' onClick={fun2}>-</button>
        </>
    )
} 
export default Plus;