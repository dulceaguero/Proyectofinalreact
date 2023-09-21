import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="form">
            <form action="" className='form__box'>
                <label htmlFor="">Ingrese su nombre</label><br />
                <input type="text" placeholder='Ingrese Su Nombre'/><br />
                <label htmlFor="">Ingrese su  Email</label><br />
                <input type="email" placeholder='Email'/><br />
                <label htmlFor="">Ingrese su numero de Contacto</label><br />
                <input type="tel" placeholder='Numero de Contacto'/><br />
                <p>Ingrese su Mensaje</p>   
                <textarea name="text" id="" cols="30" rows="10" placeholder='Ingrese su mensaje'></textarea> <br />
                <button type="submit">Enviar</button>    
            </form>
            </div>



        </div>
    )
}

export { Contact }