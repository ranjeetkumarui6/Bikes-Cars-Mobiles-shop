import './Page2.css';
import React from 'react';
import Header1, { Footer, Main ,Shop } from './CarHeader';

const Mobile=()=>{
    return(
        <>
               <Shop></Shop>
        <div className="r2">
           <Header1/>
            <div className="c2">
            
            <Main offer="3456"  name="Oppo" Price="8300-/" Pic={require('./mobiles/mob20.png')} />
            <Main offer="3456" name="Vivo" Price="13500-/" Pic={require('./mobiles/mob12.webp')} />
            <Main offer="3456" name="Oppo" Price="13599-/" Pic={require('./mobiles/mob19.png')} />
            <Main offer="3456" name="1+ Never Settle" Price="32999-/" Pic={require('./mobiles/mob20.png')} />
            <Main offer="3456" name="1+ Never Settle" Price="28999-/" Pic={require('./mobiles/mob6.webp')} />
            <Main offer="3456" name="Vivo Y2000" Price="19992-/" Pic={require('./mobiles/mob8.avif')} />
            <Main offer="3456" name="Vivo Y2000" Price="23920-/" Pic={require('./mobiles/mob9.jpg')} />
            <Main offer="3456" name="iPhone 14 " Price="53551-/" Pic={require('./mobiles/mob10.webp')} />
            <Main offer="3456" name="1+ Never Settle" Price="86435-/" Pic={require('./mobiles/mob13.webp')} />
            <Main offer="3456" name="iPhone 14" Price="75435-/" Pic={require('./mobiles/mob7.webp')} />
            <Main offer="3456" name="iPhone 14" Price="86435-/" Pic={require('./mobiles/mob14.png')} />
            <Main offer="3456" name="iPhone 14" Price="86435-/" Pic={require('./mobiles/mob15.webp')} />
            <Main offer="3456" name="Oppo" Price="56435-/" Pic={require('./mobiles/mob16.jpg')} />
            <Main offer="3456" name="Oppo" Price="33200-/" Pic={require('./mobiles/mob17.png')} />
            <Main offer="3456" name="Oppo" Price="99435-/" Pic={require('./mobiles/mob18.png')} />
            <Main offer="3456" name="Oppo" Price="99335-/" Pic={require('./mobiles/mob18.png')} />
            </div>
        </div>
       <Footer/>
        </>
    )
}
export default Mobile;