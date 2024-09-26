import React from 'react';
import Header1, { Footer, Main, Shop } from './CarHeader';
import './Pagec1.css';
const Bike = () => {
    return (
             <>
               <Shop></Shop>
                  <div className="r2">
                    <Header1 />
                <div className="c2">
                    <Main offer="4356" name="Honda Bike" Price="75999-/" Pic={require('./bikes/bike1.webp')} />
                    <Main offer="4356" name="Honda Bike" Price="86534-/" Pic={require('./bikes/bike2.avif')} />
                    <Main offer="4356" name="Honda Bike" Price="89523-/" Pic={require('./bikes/bike3.avif')} />
                    <Main offer="4356" name="Honda Bike" Price="91299-/" Pic={require('./bikes/bike4.jpg')} />
                    <Main offer="4356" name="Kawasaki Rider Bike" Price="281999-/" Pic={require('./bikes/bike5.png')} />
                    <Main offer="4356" name="Kawasaki Rider Bike" Price="281459-/" Pic={require('./bikes/bike6.webp')} />
                    <Main offer="4356" name="Kawasaki Rider Bike" Price="438920-/" Pic={require('./bikes/bike7.jpg')} />
                    <Main offer="4356" name="Kawasaki Rider Bike" Price="536551-/" Pic={require('./bikes/bike8.jpg')} />
                    <Main offer="4356" name="Jawa Rider Bikes" Price="835435-/" Pic={require('./bikes/bike9.webp')} />
                    <Main offer="4356" name="Jawa Rider Bikes" Price="756435-/" Pic={require('./bikes/bike10.jpg')} />
                    <Main offer="4356" name="Jawa Rider Bikes" Price="836435-/" Pic={require('./bikes/bike11.avif')} />
                    <Main offer="4356" name="Jawa Rider Bikes" Price="896435-/" Pic={require('./bikes/bike12.png')} />
                    <Main offer="4356" name="BMW bikes" Price="3556435-/" Pic={require('./bikes/bike13.jpg')} />
                    <Main offer="4356" name="BMW bikes" Price="4056435-/" Pic={require('./bikes/bike15.jpg')} />
                    <Main offer="4356" name="BMW bikes" Price="5956435-/" Pic={require('./bikes/bike16.jpg')} />
                    <Main offer="4356" name="BMW bikes" Price="3456435-/" Pic={require('./bikes/bike16.jpg')} />

                </div>
            </div>
            <Footer />
       </>
    )
}
export default Bike;