import React from 'react';
import './Photostravel.css'
const Photostravel = () => {
    return (
        <div className='Photostravel'>

            <h2>Let's Travel For <br />
                More Experience
            </h2>
            <p>Let's take a trip to get rid of the boredom and make your day more colerful.</p>
            <div className='photos__mozaico'>
                <img className='photo6' src="./public/imagen/nubes2.jpg" alt="" />
                <img className='photo4' src="./public/imagen/cascada.jpg" alt="" />
                <img className='photo1' src="./public/imagen/pueblo.jpg" alt="" />
                <img className='photo2' src="./public/imagen/camping.jpg" alt="" />
                <img className='photo3' src="./public/imagen/reflejo.jpg" alt="" />
                <img className='photo5' src="./public/imagen/rascacielo.jpg" alt="" />

            </div>
            <div className='buttonphoto' >
                <button className='buttonflecha'><img src="./public/imagen/flecha-izquierda.png" alt="" /></button>
                <div className="space"></div>
                <button className='buttonflecha'><img src="./public/imagen/flecha-derecha.png" alt="" /></button>

            </div>
        </div>
    )
}

export { Photostravel }