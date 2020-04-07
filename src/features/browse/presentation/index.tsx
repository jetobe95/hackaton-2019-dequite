import React from 'react'

export default function BrowsePage(params:any) {
    return (
        <div className="browser-containe">
            <p>
                <span className='button'>{" < "}</span>
                <span className='button'>{" > "}</span>
                <span>Nombre del artista</span>
            </p>
            <p>
                <span>Show All</span>
                <span>Solo Audio</span>
                <span>Solo lyrics</span>
            </p>

            <div className="song-list">
                <div className="song-item">
                    
                </div>
                
            </div>
        </div>
    )
}