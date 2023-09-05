import React from 'react';
import './Feedback.css'

const Feedback = () => {
    return(
        <div>
<div className="feedback">

<div className="feedback__travel">
    <img src="./public/imagen/mundo2.png" alt="" />
<p><strong>We Travelled</strong></p>
<b>20.000</b>
</div>
<div className="feedback__countries">
<img src="./public/imagen/mundolocalizacion.png" alt="" />
<p><strong>Countries</strong></p>
<b>50+</b>
</div>
<div className="feedback__contract">
<img src="./public/imagen/tratado.png" alt="" />
<p><strong>Contracted</strong></p>
<b>Best Price</b>
</div>
<div className="feedback__users">
<img src="./public/imagen/servicio-al-cliente.png" alt="" />
<p><strong>Our Users</strong></p>
<b>20.000+</b>
</div>

</div>





        </div>
    )
}

export { Feedback }