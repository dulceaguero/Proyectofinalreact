import React from 'react';
import './About.css'

const About = () => {
    return (

        <div className='About'>


            <div className="about__tittle">
                <h2>Reasons For Choosing Us</h2>
                <p>Our supportand processes make your jpurney enjoyable.</p>
            </div>

            
    <div className="cardbox">
            <div className='card'>
                <img src="./public/imagen/apreton-de-manos.png" />
                <h3>Tried & Trusted</h3>
                <p>We are trusted worlwide by 20 
                    million travelers just like you. </p>
            </div>
            <div className='card'>
                <img src="./public/imagen/servicio-al-cliente.png" alt="" />
                <h3>Reliable Support</h3>

                <p>We are for you. Reach out of us <br />
                    anytime by phone, email or chat.</p>
            </div>
            <div className='card'>
                <img src="./public/imagen/mundo2.png" alt="" />
                <h3>Travel Partner</h3> <p> We Have got <br />
                    your antire trip convered.</p>
                    </div>
            </div>
            </div>
    )
}

export { About }