import React from 'react';

function Book({ imageUrl, titre}) {

    return (
        <>
        <img src={imageUrl} alt="" />
        <h3>{titre}</h3>
        
        </>
    )
}

export default Book