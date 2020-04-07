import React from 'react'


export interface GenreItemProps {
    genre: string,
    selectedGenres: string[],
    popGenre(genre: string): void
    appendGenre(genre: string): void
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
            key={genre}
            onClick={onPress}
            className={`genre-item ${genre} ${active ? 'active' : ''}`}>
            <h4 className={active ? 'genre-title-shadow' : ''}>
                Genre {genre}
            </h4>
        </div>)
}