import { useState } from 'react';
import './Calculatorll.css';
const Calc = () => {
   const[x1,setx1]=useState()
   const[x2,setx2]=useState()
   let[x3,setx3]=useState()
   function fun1(){
    setx3(parseInt(x1)+parseInt(x2));
   }
   function fun2(){
    setx3(parseInt(x1)-parseInt(x2));

   }
   function fun3(){
    setx3(parseInt(x1)*parseInt(x2));

   }
   function fun4(){
    setx3(parseInt(x1)/parseInt(x2));

   }
    return (

        <>
            <div className='c'>
                Enter NO
                <br/>
                <input type='text' id="m1"  className="r1" 
                onChange={(e)=>setx1(e.target.value)}></input>
                <br/>
                Enter NO
                <br/>
                <input type='text' id="m2"  className="r1"
                onChange={(e)=>setx2(e.target.value)}></input>
                <br/>
                Result
                <input type='text' id="m3" value={x3}  className="r1"></input>
                <button onClick={fun1}>+</button>
                <button onClick={fun2}>-</button>
                <button onClick={fun3}>*</button>
                <button onClick={fun4}>/</button>
            </div>
        </>
    )
}
export default Calc;