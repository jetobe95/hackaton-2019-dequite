import React from 'react'
import Genre from '../../../../core/models/genres'


export interface GenreItemProps {
    genre: Genre,
    selectedGenres: Genre[],
    popGenre(genre: Genre): void
    appendGenre(genre: Genre): void
}
export default function GenreItem({ genre, selectedGenres, appendGenre, popGenre }: GenreItemProps) {
    const active = selectedGenres.some((genreItem) => genre === genreItem)
    function onPress() {
        if (active) {
            popGenre(genre)
        } else {
            appendGenre(genre)
        }
    }
    return (
        <div
            key={genre.name}
            onClick={onPress}
            className={`genre-item ${genre.name} ${active ? 'active' : ''}`}>
            <h4 className={active ? 'genre-title-shadow' : ''}>
                {`Genre ${genre.name}`}
            </h4>
        </div>)
}