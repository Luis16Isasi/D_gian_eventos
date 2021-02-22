import React,{Fragment} from 'react';
import {useState, useEffect} from 'react';
import { Link, withRouter} from 'react-router-dom';
import './header.css';
import logo from '../../imagenes/logo.jpg';

/* IMPORTANDO ICONOS DESDE FONT AWESOME*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';


const Header = props => {    
    const [navActivate, setnavActivate] = useState(false);

    useEffect(() => {
        //pintar la seccion selecionada 
        const prueba = document.getElementById(`${props.section}`);
        prueba.style.color = 'tomato';  
    })
    
    const desplegarNav = () => {
        const sections = document.getElementById('contentSections');    
        
        if(navActivate){
            sections.style.animation = 'desaparecerNav 0.5s';
            sections.style.right = '-100%';
            setnavActivate(false);
        }
        else{
            sections.style.animation = 'aparecerNav 0.5s';
            sections.style.right = '0%';
            setnavActivate(true);
        }
    }   


    return (
        <Fragment>
            <header id="header">
                <div id="content-logo">
                    <figure id="logo">
                        <img  src={logo} alt="logo" ></img>
                    </figure>
                    <div>
                        <h1>D´GIAN EVENTOS</h1>
                        <h6>TU SUEÑO HECHO REALIDAD</h6>
                    </div>
                </div>
                <nav>
                    <figure id="iconNav" onClick={desplegarNav}>
                        <FontAwesomeIcon icon={faBars}/>
                    </figure>
                    <ul id="contentSections">
                        <div id="btnNav">
                            <button type="button" onClick={desplegarNav}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </button>
                        </div>
                        <div id="sections">
                            <li>
                                <Link to={'/'} className="link" id="nosotros">Nosotros</Link>
                            </li>
                            <li>
                                <Link to={'/nuestrasExperiencias'} className="link" id="nuestrasExperiencias">Nuestras Experiencias</Link>
                            </li>
                            <li>
                                <Link to={'/cotizacion'} className="link" id="cotizacion">Cotización</Link>
                            </li>
                            <li>
                                <Link to={'/contactanos'} className="link" id="contactanos">Contáctanos</Link>
                            </li>
                        </div>
                    </ul>
                </nav>
            </header>
        </Fragment>
    )

}

export default withRouter(Header);