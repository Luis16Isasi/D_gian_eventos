import React from 'react';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './nosotros.css';
import fraseNosotros from '../../imagenes/fraseNosotros.png';

const Nosotros = () => {
    
    useEffect(() => {
        const myWidth = window.innerWidth; 
        const myHeight = window.innerHeight; 

        if(myWidth >= 320 && myWidth <= 599){
            document.getElementById('fondoNosotros').style.height = `${myHeight - 80}px`;
        }else{
            document.getElementById('fondoNosotros').style.height = `${myHeight - 100}px`;
        }
    }, []);

    return(
        <div id="componentNosotros">
            <figure id="fondoNosotros"> 
                <div>
                    <h2>Obtén la mejor experiencia en atención y organización para tu evento</h2>
                    {/* <p>¡Tu sueño hecho realidad!</p> */}
                </div>
            </figure>
            <div id="contentNosotros">
                <div id="nuestrosComienzos">
                    <h3>Nuestros Comienzos</h3>
                    <p>
                        D´Gian Eventos comenzó con la mejor accesoria de ica, un joven llamado
                        Giancarlo empezó a tener el gusto por el mundo de los eventos y a 
                        descubrir lo que en verdad quiso dedicar su vida, tuvimos la mayor 
                        experiencia de trabajar con las mejores promotoras de eventos en 
                        el departamento de ica, adquirimos muchas experiencias a lo largo de todos
                        los eventos organizados por nosotros que aseguran que su evento este 
                        en buenas manos.
                    </p>
                </div>
                <figure id="frase">
                    <img src={fraseNosotros} alt="Philip Kotler"></img>
                </figure>
                <div id="queOfrecemos">
                    <h3>¿Qué Ofrecemos?</h3>
                    <p>
                        Ofrecemos organizar todo tipo de eventos (Reuniones, Cumpleaños, Quinceañeros,
                        Bodas, etc.), garantizamos el mejor servicio de Decoraciones, Bartender, mozos, Bufé, 
                        Seguridad, Etc. todo lo que tu evento necesita nosotros te lo ofrecemos. 
                    </p>
                </div>
                <div id="miTrabajo">
                    <h3>Mira nuestro trabajo</h3>
                    <div>
                        <Link to={'/nuestrasExperiencias'} id="linkMiTrabajo">Galería de nuestras experiencias</Link>
                    </div>
                </div>
                <div id="nuestraMision">
                    <h3>Nuestra Misión</h3>
                    <p>
                        Que nuestros servicios de organización de eventos y atención al 
                        cliente sean los mejores, hacerte sentir cómodo con nosotros y expandir nuestros
                        servicios a otros lugares del Perú, seguiremos avanzado para llegar a ofrecer 
                        el mejor servicio a ustedes nuestros clientes. 
                    </p>
                </div>
            </div>
        </div>        
    )
}

export default Nosotros