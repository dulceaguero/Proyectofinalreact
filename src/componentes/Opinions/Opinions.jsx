import React from 'react';
import './Opinions.css'
const Opinions = () => {
    return (
        <div>
            <div className="opinions">
<h2>Customers feedback <br />
    about our services
</h2>

<p>Our satisfacied customers says about </p>

                <div className="opinions__cards">
                <div className="opinions__individual">
                    <h3>Awesome Tour!</h3>
                    <p>Ryan was an amazing guide!
                        He Was fun, educational, and very
                        personable. We highly recommend
                        this tou as well as Ryan </p>
                    <img src="./public/imagen/opinion1.jpg" alt="" />
                    <h4>Johi Smitha</h4>
                    <b>Student of University</b>
                </div>
                <div className="opinions__individual">
                    <h3>Quack Quack!</h3>
                    <p>Thoroughly enjoyed this tour!
                        Our guide was the "Chowder Champ"!
                        Very smooth, knowledgeable &
                        amusing narration!</p>
                    <img src="./public/imagen/opinion2.jpg" alt="" />
                    <h4>Devid koling</h4>
                    <b>Manager in Agency</b>

                </div>
                <div className="opinions__individual">
                    <h3>Great Tour!</h3>
                    <p>Carlos form Sao Paolo was
                        extremely knowledgeable about
                        the history of Newport. Made he
                        tour extremely enjoyable.</p>
                    <img src="./public/imagen/opinion3.jpg" alt="" />
                    <h4>Pholid Mons</h4>
                    <b>Bussines owner</b>
                </div>
            </div>
            </div>
            <div className='button__cards' >
                <button className='buttonflecha'><img src="./public/imagen/flecha-izquierda.png" alt="" /></button>
                <div className="space"></div>
                <button className='buttonflecha'><img src="./public/imagen/flecha-derecha.png" alt="" /></button>
            </div>



        </div>
    )
}

export { Opinions }