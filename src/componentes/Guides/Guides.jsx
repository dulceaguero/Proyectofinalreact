import React from 'react';
import './Guides.css'

const Guides = () => {
    return (
        <div className='Guides'>

            <h2>Our Famous Local Guides</h2>

            <p>Here is our travel local guide list</p>
            <div className='guia'>
                <div className='guia1'>
                    <b className='guia1__photo'>$ 40.00</b><b className='guia1__photo'>/Per trip</b>
                    <div className='guia1__name'>
                        <h3>Jennie Gardner</h3>
                        <img src="./public/imagen/estrella.png" alt="" />
                        <h4>4.9</h4>
                        <p>Fluent In English</p>
                        <p>Chinatown</p>
                    </div>
                </div>

                <div className='guia2'>
                    <b className='guia2__photo'>$ 47.00</b><b className='guia2__photo'>/Per trip</b>
                    <div className='guia2__name'>
                        <h3>Laurie Downy</h3>
                        <img src="./public/imagen/estrella.png" alt="" />
                        <h4>4.5</h4>
                        <p>Fluent In English</p>
                        <p>Japantown</p>
                    </div>
                </div>

                <div className='guia3'>
                    <b className='guia3__photo'>$44.00</b><b className='guia3__photo'>/Per trip</b>
                    <div className='guia3__name'>
                        <h3>Aaron Abel</h3>
                        <img src="./public/imagen/estrella.png" alt="" />
                        <h4>4.7</h4>
                        <p>Fluent In English</p>
                        <p>Little Saigon</p>
                    </div>
                </div>


                <div className='guia4'>
                    <b className='guia4__photo'>$51.00</b><b className='guia4__photo'>/Per trip</b>
                    <div className='guia4__name'>
                        <h3>Abraham Bert</h3>
                        <img src="./public/imagen/estrella.png" alt="" />
                        <h4>4.8</h4>
                        <p>Fluent In English</p>
                        <p>Manilatown</p>
                    </div>
                </div>

            </div>

            <button className='guia__button'>Show All Guides</button>
        </div>
    )
}

export { Guides }