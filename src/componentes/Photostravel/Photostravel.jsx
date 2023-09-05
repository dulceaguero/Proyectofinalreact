import React from 'react';
import './Photostravel.css'
const Photostravel = () => {
    return(
        <div className='Photostravel'>

            <h2>Let's Travel For <br />
                More Experience
            </h2>
            <p>Let's take a trip to get rid of the boredom and make your day more colerful.</p>
<div className='photos'>
<img src="./public/imagen/pueblo.jpg" alt="" />
<img src="./public/imagen/camping.jpg" alt="" />
<img src="./public/imagen/reflejo.jpg" alt="" />
<img src="./public/imagen/cascada.jpg" alt="" />
<img src="./public/imagen/rascacielo.jpg" alt="" />
<img src="./public/imagen/nubes2.jpg" alt="" />

        </div>
        <div className='button' >
        <button className='buttonflecha'><img src="./public/imagen/flecha-izquierda.png" alt="" /></button>
            <button className='buttonflecha'><img src="./public/imagen/flecha-derecha.png" alt="" /></button>
           
        </div>
        </div>
    )
}

export { Photostravel }