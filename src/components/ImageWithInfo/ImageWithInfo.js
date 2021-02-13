import React from 'react';

function ImageWithInfo({id, name, caption, url}) {
    return (
        <div className="w-33 h-50 text-center without-padding">
            <div className="mt-2">
                <p className="font-weight-bold">{name}</p>
                <p>{caption}</p>
            </div>
            <div className="mt-3 mb-5">
                <img style={{width: '50%'}} src={url} alt="source is not available."/>
            </div>
        </div>
    )
}

export default ImageWithInfo;