import React from 'react';
import './Travelcard.css'

const Travelcard = () => {
    return (
        <div className='travel'>
            <div className="travel__tittle">
                <h2>Go-Trip Travel Packages</h2>
                <p>Get the fill package experience with all of your needs on the trips </p>
            </div>
            <div className='travel__cards'>

                <div className='travelimg'>

                    <img src="./imagen/travel-puestasol.jpg" />
                    <h3>Mount Pilatus</h3>
                    <img src="./imagen/localizacion.png" className='simbol' />
                    <img src="./public/imagen/estrella.png" alt="" className='estrella' />
                    <p>Switzerland</p><br /><p className='puntaje'>4.9</p>
                    <button className='button1'>Book Now</button>
                </div>
                <div className='travelimg'>

                    <img src="./imagen/travel-dubai.jpg" />
                    <h3>Bluewaters island</h3>
                    <img src="./imagen/localizacion.png" className='simbol' />
                    <img src="./public/imagen/estrella.png" alt="" className='estrella' />
                    <p>Dubai</p><br /><p className='puntaje'>4.7</p>
                    <button className='button1'>Book Now</button>

                </div>
                <div  className='travelimg'>

                    <img src="./imagen/travel-turquia.jpg" />
                    <h3>Hot air ballons</h3>
                    <img src="./imagen/localizacion.png" className='simbol' />
                    <img src="./public/imagen/estrella.png" alt="" className='estrella' />
                    <p>Turkey</p><br /><p className='puntaje'>5</p>
                    <button className='button1'>Book Now</button>
                </div>
                <div className='travelimg'>

                    <img src="./imagen/travel-finlandia.jpg" />
                    <h3>Santa CLaus Village</h3>
                    <img src="./imagen/localizacion.png" className='simbol' />
                    <img src="./public/imagen/estrella.png" alt="" className='estrella' />
                    <p>Finland</p><br /><p className='puntaje'>4.9</p>
                    <button className='button1'>Book Now</button>
                </div>
                <div className='travelimg'>

                    <img src="./imagen/travel-italia.jpg" />
                    <h3>Ancient temple</h3>
                    <img src="./imagen/localizacion.png" className='simbol' />
                    <img src="./public/imagen/estrella.png" alt="" className='estrella' />
                    <p>Italy</p><br /><p className='puntaje'>4.9</p>
                    
                        <button className='button1'>Book Now</button>
                    
                </div>
            </div>



        </div>


    )
}

export { Travelcard }