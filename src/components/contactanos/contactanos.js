import React from 'react';
import './contactanos.css';
import Facebook from '../../imagenes/facebook.png';
import Instagram from '../../imagenes/instagram.png';
import Twitter from '../../imagenes/twitter.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contactanos = () => {
    return(
        <div id="divContactanos">
            <figure id="fondoContactanos">
                <h3>Contacta con nosotros</h3>
            </figure>  
            <div id="contentContactanos">
                <h3>Información de contacto</h3>
                <ul>
                    <li>
                        <p><b>Correo:</b></p>
                        <p>Giancarlo@gmail.com</p>
                    </li>
                    <li>
                        <p><b>Celular:</b></p>
                        <p>918689505</p>
                    </li>
                    <li id="whatsapp">
                        <p><b>WhatsApp a solo un click:</b></p>
                        <div>
                            <a id="linkWstp" href="https://wa.me/51918689505?text=Hola%20D´Gian%20Eventos,%20quiero%20información%20sobre%20tus%20servicios" 
                            target="_blank" 
                            rel="noopener noreferrer"   
                            >
                                <FontAwesomeIcon icon={faWhatsapp} style={{
                                    margin: '0px 8px 0px 0px'
                                }}/>
                                918689505    
                            </a>
                        </div>
                    </li>
                    <li id="redesSociales">
                        <p><b>Redes sociales:</b></p>
                        <div>
                            <figure id="facebook">
                                <a target="_blank" 
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/giancarlo.herrerasanchez.1">
                                    <img src={Facebook} alt="Facebook"></img>
                                </a>
                            </figure>
                            <figure id="instagram">
                                <a target="_blank" 
                                    rel="noopener noreferrer"
                                    href="https://www.instagram.com">
                                    <img src={Instagram} alt="Instagram" ></img>
                                </a>
                            </figure>
                            <figure id="twitter">
                                <a target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://twitter.com">
                                    <img src={Twitter} alt="Twitter"></img>
                                </a>
                            </figure>
                        </div>
                    </li>
                </ul>
            </div>  

        </div>
    )
}

export default Contactanos;