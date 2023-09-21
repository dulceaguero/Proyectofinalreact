import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer__logo">
                <img src="./public/imagen/logo.png" /> <h4>Go trip</h4>

                    <p>Our main goal is ranger <br />
                        You can visit world wide with us by <br />
                        low cost. </p>
                    <div className="footer__redes">
                        <img src="./public/imagen/facebook.png" alt="" />
                        <img src="./public/imagen/instagram.png" alt="" />
                        <img src="./public/imagen/linkedin.png" alt="" />
                        <img src="./public/imagen/twitter.png" alt="" />
                    </div>
<div className="columnas">
                    <div className="footer__aboutus">
                        <h4>About us</h4>
                        <p>About</p>
                        <p>Features</p>
                        <p>Experience</p>
                        <p>Careers</p>
                        <p>Culture</p>
                    </div>
                    <div className="footer__company">
                        <h4>Company</h4>
                        <p>Why Go-Trip?</p>
                        <p>FaQ</p>
                        <p>Reviews</p>
                        <p>Updates</p>
                        <p>Blog</p>
                    </div>
                    <div className="footer__support">
                        <h4>Support</h4>
                        <p>Support Center</p>
                        <p>Feedback</p>
                        <p>Team</p>
                        <p>Help Center</p>
                        <p>Chat Support</p>
                    </div>
                    <div className="footer__contactus">
                        <h4>Contact Us</h4>
                        <p>+358 50 134 45 82</p>
                        <p>go-tripoffice@gmail.com</p>
                        <p>0700 Helsinski, Finland</p>
                        </div>


                        
             
            </div>


</div>

</div>

<div className="footer__final">
    <p><strong>Go Trip</strong>Travel Agency</p> <p>Copyright &copy; 2021 Foolish Developer</p>
</div>


        </div>
    )
}

export { Footer }