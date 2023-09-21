import React from 'react';
import './Guides.css'

const Guides = () => {
    return (
        <div className='guides'>
            <div className='guides__tittle'>
                <h2>Our Famous Local Guides</h2>

                <p>Here is our travel local guide list</p>
            </div>

            <div className='guias'>
                <div className='guia__cards'>
                    <img src="./imagen/guia1.jpg" alt="" />
                    <h3>Jennie Gardner</h3>
                    <img src="./public/imagen/estrella.png" alt="" className='estrella' />
                    <h4>4.9</h4>
                    <p>Fluent In English</p>
                    <p>Chinatown</p>

                </div>

                <div className='guia__cards'>
                    <img src="./imagen/guia2.jpg" alt="" />
                    <h3>Laurie Downy</h3>
                    <img src="./public/imagen/estrella.png" alt="" className='estrella' /> <h4>4.5</h4>
                    <p>Fluent In English</p>
                    <p>Japantown</p>
                </div>

                <div className='guia__cards'>
                    <img src="./imagen/guia3.jpg" alt="" />
                    <h3>Aaron Abel</h3>
                    <img src="./public/imagen/estrella.png" alt="" className='estrella' />
                    <h4>4.7</h4>
                    <p>Fluent In English</p>
                    <p>Little Saigon</p>

                </div>


                <div className='guia__cards'>
                    <img src="./imagen/guia4.jpg" alt="" />
                    <h3>Abraham Bert</h3>
                    <img src="./public/imagen/estrella.png" alt="" className='estrella' />
                    <h4>4.8</h4>
                    <p>Fluent In English</p>
                    <p>Manilatown</p>

                </div>

            </div>

            <button className='guia__button'>Show All Guides</button>
        </div>
    )
}

export { Guides }