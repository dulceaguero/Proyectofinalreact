import React from 'react';
import './Recenttravel.css'

const Recenttravel = () => {
    return (
        <div>
            <div className="recenttravel">
                <h2> Recent Travel Trends </h2>
                <p>Here are some latest joyful tours</p>

                <div className="recenttravel__photos">
                    <div className="photos__niagara">
                        <h3>Niagara Falls</h3>
                        <img src="./public/imagen/estrella.png" alt="" />
                        <h4>4.9</h4>
                        <button className='photos__button'>Book Now</button>
                    </div>
                    <div className="photos_greatwall">
                        <h3>Great Wall</h3>
                        <img src="./public/imagen/estrella.png" alt="" />
                        <h4>4.7</h4>
                        <button className='photos__button'>Book Now</button>
                    </div>
                    <div className="photos__patongbeach">
                        <h3>Patong Beach</h3><img src="./public/imagen/estrella.png" alt="" />
                        <h4>4.6</h4>
                        <button className='photos__button'>Book Now</button>
                    </div>
                    <div className="photos__buckingam">
                        <h3>Buckinghan</h3>
                        <img src="./public/imagen/estrella.png" alt="" />
                        <h4>5.0</h4>
                        <button className='photos__button'>Book Now</button>
                    </div>
                    <div className='button' >
                        <button className='buttonflecha'><img src="./public/imagen/flecha-derecha.png" alt="" /></button>
                        <button className='buttonflecha'><img src="./public/imagen/flecha-izquierda.png" alt="" /></button>
                    </div>
                </div>



            </div>










        </div>
    )
}

export { Recenttravel }