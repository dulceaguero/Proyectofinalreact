import React from 'react';

import './Header.css'



const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className="trip">
                    <img src="./public/imagen/logo.png" alt="" />
                    <h3 className='logo'>Go Trip</h3>
                </div>
                <div className="menu">
                    <nav className='menunav'>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#About">About Us</a></li>
                            <li><a href="#Opinions">Blog</a></li>
                            <li><a href="#Contact">Contact Us</a></li>
                        </ul>
                    </nav>
              
                <button className='signin'>Sign In</button>
                </div>
                <div className='Home'>
                    <h1>It's Time To New <br />
                        Adventures</h1>

                    <p>To get the best out of your adventure, you just need <br />
                        to leave and go where you like.</p>

                   <div className="buttons2">
                 <button className='started'>Get Started</button> <button className='video' >Play Video </button>
                  </div>
                   <div className="navegacion2">
                    <nav className='header__navegacion'>

                        <ul>
                            <li><a href="">Located In</a></li>
                            <input type="locatizacion" name="Located In" id="" />
                            <li><a href=""></a></li>
                            <input type="date" name="" id="" />
                            <li><a href=""></a></li>
                            <input type="filter" name='' />
                            <button className='busqueda'><img src="./public/imagen/simbbusqueda.png" alt="" /></button>
                        </ul>
                    </nav>
                    </div>
                </div>
            </div>
        </div>


    )
}

export { Header }