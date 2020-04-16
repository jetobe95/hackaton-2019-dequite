import React, { useContext } from 'react';
import { genres } from '../data/genres';
import GenreItem from './components/genre-item';
import Genre from '../../../core/models/genres';
import UserContext, { IUserContext } from '../../../core/user-context';


export default function SelectGenrePage(props: any) {
    const [selectedGenres, setSelectedGenres] = React.useState<Genre[]>([genres[0]])
    const userContext: IUserContext = useContext(UserContext);

    const genresComponents = genres.map((genre) => (
        <GenreItem
            selectedGenres={selectedGenres}
            popGenre={popGenre}
            appendGenre={appendGenre}
            genre={genre} />
    )
    );

    function popGenre(genre: Genre): void {
        const newGenres = selectedGenres.filter((item) => genre !== item)
        setSelectedGenres(newGenres)
    }
    function appendGenre(genre: Genre): void {
        const newGenres = [...selectedGenres, genre]
        setSelectedGenres(newGenres)
    }
    function saveGenres(skip: boolean) {
        if (skip) {
            userContext.setUser(userContext.user.copyWith({ genres: [{ name: 'skipped' }] }))
        } else {
            userContext.setUser(userContext.user.copyWith({ genres: selectedGenres }))
        }


        props.history.replace('/')
       

    }
    const showContinueButton = selectedGenres.length > 0;
    return (
        <div className="select-genre-container">
            <div className="welcome-message-container">
                <div className='welcome-message'>
                    Welcome, {userContext.user.name}
                    <p>Select genres of your intereset</p>
                </div>
                {showContinueButton ?
                    <p
                        className='skip'
                        onClick={() => saveGenres(false)}
                    >
                        Continue >>>
                    </p>
                    :
                    <p
                        className='skip'
                        onClick={() => saveGenres(true)}
                    >
                        Skip >>>
                    </p>
                }
            </div>
            <div className="select-genre-grid">
                {genresComponents}
            </div>
        </div>)
}