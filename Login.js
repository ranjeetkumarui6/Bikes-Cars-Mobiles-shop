import { Link } from 'react-router-dom';
import './Login.css';
import './Register.css';
const Log =()=>{
    return(
        <>
        <div className="container">
            <div className="coll">
        <h1>Login Form</h1>
        <br />
        <br />
        <input type="text" className="m1" placeholder="UserName" />
        <br />
        <br />
        <br />
        <input type="password" className="m1" placeholder="Password" />
        <br />
        <br />
        <br />
        <button type="submit">Login</button>
        <br />
        <br />
       <label ><input type="checkbox" />Remember me</label> 
        <a className='a' href="#">Forget Passward?</a>
        <br /><br />
            <Link to='/College/Register'>Register Now</Link> 
        </div>
        </div>
        <br />
        </>
    )
}
export default Log;