import './Register.css';
const Register=()=>
{
    return(
        <>
        <div className="containerr">
            <div className="col">
                <h1>REGISTATION FORM</h1>
                <br /><br />
                <label htmlFor="Fname">First Name: <input type="text" placeholder="Enter First Name" className="m2" id="Fname" /></label>
                <br /><br /><br />
                <label htmlFor="lname">Last Name: <input type="text" placeholder="Enter Last Name"className="m2" id="lname" /></label>
                <br />
                <br /><br />
                <label htmlFor="pname">Password: <input type="password" placeholder="Enter Your Passward"className="m2" id="pname" /></label>
                <br />
                <br /><br />
                <label htmlFor="mname">Mobile No: <input type="text" placeholder="Enter Mobile No"className="m2" id="mname" /></label>
                <br />
                <br /><br />
                <label htmlFor="g">
                Gender: <input type="radio" value='m' name='gender' />Male
                         <input type="radio" value='f' name='gender'/>Female
                </label>
                <br /><br />
                <br />
                <label htmlFor="ename">Email ID:   <input type="email" placeholder="Enter Email Id"className="m2" id="ename" /></label>
                <br />
                <br /><br />
                <label htmlFor="lname">Address:   <textarea  placeholder='Enter Your Address' cols='40' rows='2'></textarea></label>
                <br /><br />
                <br />
                <label htmlFor="cname">Check:   <input type="checkbox" required  id="ename" /></label>
                <br />
                <br /><br />
                <button type='submit'>Submit</button>
                <button type='reset'>Reset</button>


            </div>
        </div>
        </>
    )
}
export default Register;