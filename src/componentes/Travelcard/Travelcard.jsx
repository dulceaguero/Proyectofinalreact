import React from 'react';
import './Travelcard.css'

const Travelcard= () => {
    return (
        <div className='travel'>
<h2>Go-Trip Travel Packages</h2>
<p className='resumen'>Get the fill package experience with all of your needs on the trips </p>


<div className='card-switzerland'>

<img src="" alt="" />
<h3>Mount Pilatus</h3>
<img src="" alt="" /><p>Switzerland</p><p>4.9</p>
<button>Book Now</button>
</div>
<div className='card-dubai'>

<img src="" alt="" />
<h3>Bluewaters island</h3> 
<img src="" alt="" /><p>Dubai</p><p>4.7</p>
<button>Book Now</button>

</div>
<div className='card-turkey'>

<img src="" alt="" />
<h3>Hot air ballons</h3>
<img src="" alt="" /><p>Turkey</p><p>5</p>
<button>Book Now</button>
</div>
<div className='card-finland'>

<img src="" alt="" />
<h3>Santa CLaus Village</h3>
<img src="" alt="" /><p>Finland</p><p>4.9</p>
<button>Book Now</button>
</div>
<div className='card-switzerland'>

<img src="" alt="" />
<h3>Ancient temple</h3>
<img src="" alt="" /><p>Italy</p><p>4.9</p>
<button>Book Now</button>
</div>



        
        </div>


    )
}

export { Travelcard }