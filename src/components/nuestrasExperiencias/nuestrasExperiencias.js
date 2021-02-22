import React, {Fragment} from 'react';
import {useEffect, useState} from 'react';
import './nuestrasExperencias.css';
import VER_HORI from './ver_hori';
import HORI_VER from './hori_ver';


const NuestrasExperiencias = () => {
    const [openModal, setOpenModal] = useState(false);
    const [imageSeleted, setImageSeleted] = useState({
        src: '',
        alt: ''
    });

    const onClickImage = imageData => {
        setOpenModal(true);
        setImageSeleted({
            src: imageData.src,
            alt: imageData.alt
        })
    }   
        
    const closeModal = () => {
        setOpenModal(false);
        setImageSeleted({
            src: '',
            alt: ''
        })
                    
    }
    
    useEffect(() => {
        const handler = e => {
            /*con codigo se pueden reconocer que tecla es tambien desde que parte del teclado viene*/ 
            if ( e.keyCode === 27 ) {
                closeModal();
            }
        };
        
        /* cuando se presiona "ESC" se escucha el evento de KEYUP(cuando se suelta una tecla)*/
        document.addEventListener('keyup', handler);

        return () => {
            if(openModal){
                document.removeEventListener('keyup', handler); 
            }
        }
        
    }, [openModal])

return(
    <Fragment>
    <div id="expe">
        <div id="letraExpe">
            <h1>- Experiencias -</h1>
            <p>
                A lo largo de todos nuestros servicios en 
                diferentes eventos, adquirimos mucha experiencias y 
                eso no respalda para que tú confíes en nosotros y 
                seguiremos creciendo por ti y para ti. 
            </p>
        </div>
        <div id="contentExpe">
            <div className="column">
                <VER_HORI 
                    onClickImage={onClickImage}
                />
            </div>
            <div className="column">
                <HORI_VER 
                    onClickImage={onClickImage}
                />            
            </div>
        </div>
    </div>

    <div 
        id="myModal"  
        className="modal"
        style={{
            display: openModal ? 'block' : 'none',
        }}
    >
        <span className="close" onClick={closeModal}>&times;</span>
        <img className="modal-content" id="img01" alt={imageSeleted.alt} src={imageSeleted.src}/>
        <div id="caption">{imageSeleted.alt}</div>
    </div>
    </Fragment>
)
}

export default NuestrasExperiencias;