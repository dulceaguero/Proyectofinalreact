import React from 'react';

import  './Header.css'



const Header = () => {
    return (
        <div>
            <div className='header'>
<h3 className='logo'>Go Trip</h3>

            <nav className='menu'>
                <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>

            <button className='signin'>Sign In</button>
<div className='Home'>
    <h1>It's Time To New <br />
    Adventures</h1>

    <p>To get the best out of your adventure, you just need <br />
    to leave and go where you like.</p>

    <button className='started'>Get Started</button> <button className='video'>Play Video</button>
<nav className='header__navegacion'>
    <ul>
    <li><a href="">Located In</a></li>
    <input type="locatizacion" name="Located In" id="" />
    <li><a href=""></a></li>
    <input type="date" name="" id="" />
    <li><a href=""></a></li>
    <input type="filter" name=''/>
    <button className='busqueda'><img src="./public/imagen/simbbusqueda.png" alt="" /></button>
    </ul>
</nav>

</div>
</div>
        </div>


    )
}

export { Header }