import React from 'react';
import Header1, { Footer, Main,Shop } from './CarHeader';
import './Pagec1.css';

const Car=()=>{
    return(
        <>
        <Shop></Shop>
        <div className="r2">
            <Header1/>
            <div className="c2">
                <Main offer="34656" name="Hundai" Price="800000-/" Pic={require('./images/car11.webp')}/>
                <Main offer="34656" name="Hundai" Price="800000-/" Pic={require('./images/car1.jpg')}/>
                <Main offer="34656" name="Hundai" Price="950000-/" Pic={require('./images/car2.jpg')}/>
                <Main offer="34656" name="Hundai" Price="1387399-/" Pic={require('./images/car3.jpg')}/>
                <Main offer="34656" name="Hundai" Price="158999-/" Pic={require('./images/car4.jpg')}/>
                <Main offer="34656" name="Mahindra" Price="2889999-/" Pic={require('./images/car6.jpg')}/>
                <Main offer="34656" name="Hundai" Price="3576992-/" Pic={require('./images/car7.avif')}/>
                <Main offer="34656" name="Hundai" Price="4638920-/" Pic={require('./images/car8.jpg')}/>
                <Main offer="34656" name="Range Rover" Price="5366551-/" Pic={require('./images/car9.jpg')}/>
                <Main offer="34656" name="Range Rover" Price="7556435-/" Pic={require('./images/car12.webp')}/>
                <Main offer="34656" name="Range Rover" Price="8356435-/" Pic={require('./images/car13.jpg')}/>
                <Main offer="34656" name="Range Rover" Price="8956435-/" Pic={require('./images/car13.webp')}/>
                <Main offer="34656" name="Jaguar" Price="10056435-/" Pic={require('./images/car14.webp')}/>
                <Main offer="34656" name="Jaguar" Price="13056435-/" Pic={require('./images/car15.jpg')}/>
                <Main offer="34656" name="Jaguar" Price="9956435-/" Pic={require('./images/car16.jpg')}/>
                <Main offer="34656" name="Hundai" Price="4638920-/" Pic={require('./images/car8.jpg')}/>           
               <Footer/>

            </div>
        </div>
       
        </>
    )
}
export default Car;




 //  <Calc/>
   {/* <Plus/<*/}

  //  <BrowserRouter>
  //  <Routes>
  //    <Route exact path='/College/Page1' element={<Car/>}></Route>
  //    <Route exact path='/College/Page2' element={<Bike/>}></Route>
  //    <Route exact path='/College/Page3' element={<Mobile/>}></Route>
  //    <Route exact path='/College/Login' element={<Log/>}></Route>
  //    <Route exact path='/College/Register' element={<Register/>}></Route>
  //  </Routes>    
  // </BrowserRouter>

   // import Car from './College/Page1.js';
// import Mobile from './College/Page3';
// import Bike from './College/Page2';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Log from './College/Login.js';
// import Register from './College/Register.js';

