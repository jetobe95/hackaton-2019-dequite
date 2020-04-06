import React from 'react';

export default function SelectGenrePage(props: any) {
    const genres = Array(5 * 5).fill(0).map((_, index) => {
        return (
        <div className='genre-item'>
            <h4>
            Genre {index}
            </h4>
        </div>)
    })
    return (
        <div className="select-genre-container">
            <div className="welcome-message-container">
                <h1 className='welcome-message'>Welcome, Jeffrey </h1>
                <p>Select genres of your intereset</p>
            </div>
            <p className='skip'>Skip >>></p>
            {genres}
        </div>)
}