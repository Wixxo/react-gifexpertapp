import React from 'react'

export const GifFridItem = ( {id, title, url} ) => {

    console.log(id,title,url)

    return (
        <div className="card animate__animated animate__slideInLeft">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
