import React from 'react';
import './Recenttravel.css'

const Recenttravel = () => {
    return (
        <div>
            <div className="recenttravel">
                <h2> Recent Travel Trends </h2>
                <p>Here are some latest joyful tours</p>

                <div className="recenttravel__photos">
                    <div className="photo">
                        <img src="./imagen/niagara.jpg" alt="" />
                        <h3>Niagara Falls</h3>
                        <img src="./public/imagen/estrella.png" alt="" className='estrella' />
                        <h4>4.9</h4>
                        <button className='button__photos'>Book Now</button>
                    </div>
                    <div className="photo">
                        <img src="./imagen/muralla.jpg" alt="" />
                        <h3>Great Wall</h3>
                        <img src="./public/imagen/estrella.png" alt="" className='estrella' />
                        <h4>4.7</h4>
                        <button className='button__photos'>Book Now</button>
                    </div>
                    <div className="photo">
                        <img src="./imagen/playa.jpg" alt="" />

                        <h3>Patong Beach</h3><img src="./public/imagen/estrella.png" alt="" className='estrella' />
                        <h4>4.6</h4>
                        <button className='button__photos'>Book Now</button>
                    </div>
                    <div className="photo">
                        <img src="./imagen/buckighan.jpg" alt="" />

                        <h3>Buckinghan</h3>
                        <img src="./public/imagen/estrella.png" alt="" className='estrella' /><h4>5.0</h4>
                       
                        <button className='button__photos'>Book Now</button>
                    </div>
                    </div>
                    <div className='button__recent' >
                        <button className='buttonflecha'><img src="./public/imagen/flecha-izquierda.png" alt="" /></button>
                        <div className='space'>    </div>
                        <button className='buttonflecha'><img src="./public/imagen/flecha-derecha.png" alt="" /></button>
                    </div>
          



            </div>










        </div>
    )
}

export { Recenttravel }