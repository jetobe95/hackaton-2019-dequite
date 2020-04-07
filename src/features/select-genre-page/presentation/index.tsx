import React from 'react';
import { genres } from '../data/genres';
import GenreItem from './components/genre-item';


export default function SelectGenrePage(props: any) {
    const [selectedGenres, setSelectedGenres] = React.useState<string[]>([genres[0]])

    const genresComponents = genres.map((genre) => (
        <GenreItem
            selectedGenres={selectedGenres}
            popGenre={popGenre}
            appendGenre={appendGenre}
            genre={genre} />))

    function popGenre(genre: string): void {
        const newGenres = selectedGenres.filter((item) => genre !== item)
        setSelectedGenres(newGenres)
    }
    function appendGenre(genre: string): void {
        const newGenres = [...selectedGenres, genre]
        setSelectedGenres(newGenres)
    }
    const showContinueButton = selectedGenres.length > 0;
    return (
        <div className="select-genre-container">
            <div className="welcome-message-container">
                <div className='welcome-message'>
                    Welcome, Jeffrey
                     <p>Select genres of your intereset</p>
                </div>
                {showContinueButton ?
                    <p className='skip'>Continue >>></p>
                    :
                    <p className='skip'>Skip >>></p> 
                }
            </div>
            <div className="select-genre-grid">
                {genresComponents}
            </div>
        </div>)
}