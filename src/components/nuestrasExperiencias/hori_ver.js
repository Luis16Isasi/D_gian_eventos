import React from 'react';

const HORI_VER = props => {
    const {onClickImage} = props;
    
    const Imghori_ver = [
        {
            hori: {
                src: process.env.PUBLIC_URL + '/img/imgHorizontal/horizontal8.jpeg',
                alt: 'Alex y Diana',
            },
            ver1: {
                src: process.env.PUBLIC_URL + '/img/imgVertical/vertical15.1.jpeg',
                alt: 'Bartender',
            },
            ver2: {
                src: process.env.PUBLIC_URL + '/img/imgVertical/vertical5.jpeg',
                alt: 'Boda',
            }
        },
        {
            hori: {
                src: process.env.PUBLIC_URL + '/img/imgHorizontal/horizontal18.jpeg',
                alt: 'Nuestros mozos',
            },
            ver1: {
                src: process.env.PUBLIC_URL + '/img/imgVertical/vertical17.jpeg',
                alt: 'Decoración de mezas',
            },
            ver2: {
                src: process.env.PUBLIC_URL + '/img/imgVertical/vertical18.jpeg',
                alt: 'Decoración de mezas',
            }
        },
        {
            hori: {
                src: process.env.PUBLIC_URL + '/img/imgHorizontal/horizontal13.jpeg',
                alt: 'Luzmila',
            },
            ver1: {
                src: process.env.PUBLIC_URL + '/img/imgVertical/vertical15.jpeg',
                alt: 'Bartender',
            },
            ver2: {
                src: process.env.PUBLIC_URL + '/img/imgVertical/vertical13.jpeg',
                alt: 'Decoración de mezas',
            }
        }
    ]
    return(
        Imghori_ver.map( (img, index)=> {
            return(
                <div id="hori_ver" key={index}>
                    <figure>
                    {/* imagen en horizontal */}
                        <img 
                            className="myImg" 
                            src={img.hori.src} 
                            alt={img.hori.alt}
                            onClick={() => {
                                onClickImage({
                                    alt: img.hori.alt,
                                    src: img.hori.src
                                })      
                            }} 
                        />
                    </figure>
                    <div>
                        <figure>
                        {/* primera en vertical */}
                            <img 
                                className="myImg" 
                                src={img.ver1.src} 
                                alt={img.ver1.alt}
                                onClick={() => {
                                    onClickImage({
                                        alt: img.ver1.alt,
                                        src: img.ver1.src
                                    })      
                                }}  
                            />
                        </figure>
                        {/* segunda en vertical */}
                        <figure>
                            <img 
                                className="myImg" 
                                src={img.ver2.src} 
                                alt={img.ver2.alt}
                                onClick={() => {
                                onClickImage({
                                    alt: img.ver2.alt,
                                    src: img.ver2.src
                                })      
                            }} 
                            />
                        </figure>
                    </div>
                </div>
            )
        })
    )
}

export default HORI_VER;