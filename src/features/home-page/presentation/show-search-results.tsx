import React from 'react'
import UserContext, { IUserContext } from '../../../core/user-context';
import PlayerContext from '../../../core/player-context';
import HomePageBloc from '../bloc/home-page-bloc';
import { YoutubeSearch } from '../../../core/domain/entities/youtube-search';
import SongRowItem from '../../browse/presentation/components/song-row';

export default function ShowSearchResults(props: any) {
    const homePageBloc = new HomePageBloc()
    const userContext: IUserContext = React.useContext(UserContext);
    const [searchResults, setSearchResults] = React.useState<YoutubeSearch[]>([])
    const [isSearching, setIsSearching] = React.useState<boolean>(false)
    const player = React.useContext(PlayerContext);





    React.useEffect(() => { search() }, [userContext.searchQuery])

    async function search() {
        if (!isSearching) {
            setIsSearching(true)
            const response = await homePageBloc.search(userContext.searchQuery)
            setIsSearching(false)
            if (response.success) {
                setSearchResults(response.response);
            }
        }
    }


    function onPressSong(search: YoutubeSearch) {
        player.setSong(search)
    }

    return (
        <div className='show-search-container'>
            <h1>Resultados de busqueda {userContext.searchQuery}</h1>
            {
                searchResults.map((result) => {
                    return (
                        <SongRowItem
                            key={result.id.videoId}
                            duration='1'
                            onClick={() => onPressSong(result)}
                            songName={result.snippet.title}
                            albumName={result.snippet.channelTitle}
                            coverImage={result.snippet.thumbnails.medium.url}
                        />
                    )
                })
            }
        </div>
    )
}