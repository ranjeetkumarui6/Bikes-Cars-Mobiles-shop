import { Link } from 'react-router-dom';
import Log from './Login';
import './Login.css';
import './Register.css';
import './Pagec1.css';
import React from 'react';
const Shop=()=>{
    return(
        <>
           <div className='r1'>My shop</div>
        </>
    )
}
 const Header1 =()=>{
    return(
        <>
        <div className="c1">
            <ol>
                    <li>Home</li>
                    <li>Product</li>
                    <li><Link to='/College/Login'>Login</Link></li>

            </ol>
                <ul>
                    <li><Link to='/College/Page1'>Car</Link></li>
                    <li><Link to='/College/Page2'>Bike</Link></li>
                    <li><Link to='/College/Page3'>Mobile</Link></li>
                </ul>
            </div>
        </>
    )
}
const Main=(props)=>{
    return(
        <>
           <div className="m1"><img src={props.Pic} alt="" />
                <h4>{props.name}</h4>
                <p>Price:{props.Price} offer:{props.offer}</p>
                <button>Buy Now</button>
                </div>
        </>
    )
}

const Footer=()=>{
    return(
        <>
           <div className='r3'>this design is given by ranjeet kumar</div>
        </>
    )
}
export default Header1;
export{Shop,Footer,Main}