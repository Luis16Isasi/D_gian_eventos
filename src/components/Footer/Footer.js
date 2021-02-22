import React from 'react';
import './Footer.css';

/* IMPORTANDO ICONOS DESDE FONT AWESOME*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp,
         faFacebookSquare,
         faInstagram,
         faTwitterSquare
        } 
from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = props => {
    
    if(props.section){
        return(
            <footer style={{
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <p>Copyright © D´Gian Eventos 2020 - Todos los derechos reservados</p>
            </footer>
        )
    }
    return(
        <footer>
            <div id="linksRedesFooter">
                <figure id="whatsapp">
                    <a  
                        target="_blank" 
                        rel="noopener noreferrer"
                        href="https://wa.me/51918689505?text=Hola%20D´Gian%20Eventos,%20quiero%20información%20sobre%20tus%20servicios">
                        <FontAwesomeIcon  icon={faWhatsapp} />
                    </a>
                </figure>
                <figure id="facebook">
                    <a  
                        className="fab fa-facebook-square"
                        target="_blank" 
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/giancarlo.herrerasanchez.1">
                        <FontAwesomeIcon  icon={faFacebookSquare} />
                    </a>
                </figure>
                <figure id="instagram">
                    <a  
                        className="fab fa-instagram"
                        target="_blank" 
                        rel="noopener noreferrer"
                        href="https://www.instagram.com">
                        <FontAwesomeIcon  icon={faInstagram} />
                    </a>
                </figure>
                <figure id="twitter">
                    <a  
                        className="fab fa-twitter-square"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com">
                        <FontAwesomeIcon  icon={faTwitterSquare} />
                    </a>
                </figure>
            </div>
            <div id="infoFooter">
                <p> <FontAwesomeIcon icon={faPhoneAlt} /> 918689505</p>
                <p> <FontAwesomeIcon icon={faEnvelope} /> Giancarlo@gmail.com</p>
            </div>
            <p>Copyright © D´Gian Eventos 2020 - Todos los derechos reservados</p>
        </footer>
    )
}

export default Footer;
