import React from 'react';

const VER_HORI = props => {
    const {onClickImage} = props;

    const Imgver_hori = [
        {   
            ver1: {
                src: process.env.PUBLIC_URL + '/img/imgVertical/vertical14.1.jpeg',
                alt: 'Boda',
            },
            ver2: {
                src: process.env.PUBLIC_URL + '/img/imgVertical/vertical3.jpeg',
                alt: 'Bodega Nyrla Lévano',
            },
            hori: {
                src: process.env.PUBLIC_URL + '/img/imgHorizontal/horizontal10.jpeg',
                alt: 'Nuestros mozos'
            }
        },
        {
            ver1: {
                src: process.env.PUBLIC_URL + '/img/imgVertical/vertical6.jpeg',
                alt: 'Decoración de mezas',
            },
            ver2: {
                src: process.env.PUBLIC_URL + '/img/imgVertical/vertical16.jpeg',
                alt: 'La mejor atención',
            },
            hori: {
                src: process.env.PUBLIC_URL + '/img/imgHorizontal/horizontal26.jpeg',
                alt: 'Nuestros mozos'
            }
        },
        {
            ver1: {
                src: process.env.PUBLIC_URL + '/img/imgVertical/vertical18.jpeg',
                alt: 'Decoración de mezas',
            },
            ver2: {
                src: process.env.PUBLIC_URL + '/img/imgVertical/vertical7.jpeg',
                alt: 'Bodega Nyrla Lévano',
            },
            hori: {
                src: process.env.PUBLIC_URL + '/img/imgHorizontal/horizontal21.jpeg',
                alt: 'Decoración de mezas'
            }
        }
    ];
return(
    Imgver_hori.map( (img, index) => {
        return(
            <div id="ver_hori" key={index}>
                <div>
                    <figure>
                    {/* primera imagen en vertical */}
                        <img 
                            className="myImg" 
                            src={img.ver1.src}
                            alt={img.ver1.alt}
                            onClick={() => {
                                onClickImage({
                                    alt: img.ver1.alt,
                                    src: img.ver1.src,
                                })
                            }}       
                        />
                    </figure>
                    <figure>
                    {/* segunda imagen en vertical */}
                        <img
                            className="myImg" 
                            src={img.ver2.src}
                            alt={img.ver2.alt}
                            onClick={() => {
                                onClickImage({
                                    alt: img.ver2.alt,
                                    src: img.ver2.src,
                                })
                            }}       
                        />
                    </figure>
                </div>
                <figure>
                    {/* imagen en horizontal */}
                    <img 
                        className="myImg" 
                        src={img.hori.src} 
                        alt={img.hori.alt} 
                        onClick={() => {
                            onClickImage({
                                alt: img.hori.alt,
                                src: img.hori.src,
                            })
                        }}       
                    />
                </figure>
            </div>  
    )            
})   
)
}

export default VER_HORI;