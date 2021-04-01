import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifFridItem } from './GifFridItem';

export const GifGrid = ({ category }) => {

    const { data:images , loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__slideInLeft"> { category } </h3>

            { loading && <p className=" animate__animated animate__flash animate__infinite 	infinite animate__slow 	1s">Loading...</p> }

            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifFridItem 
                            key = { img.id }
                            { ...img }
                        />                      
                    ))
                }

            </div>
        </>
    )
}
