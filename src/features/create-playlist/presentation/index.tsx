import React from "react";
import Close from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
function CreatePlayList(params: any) {
    const [open, setOpen] = React.useState(true)
    return (
        <div
            className='create-play-list-dialog'
        >
            <div className='create-body'>
                <header>
                    <h4 className='title'>Create Playlist</h4>
                    <IconButton>
                        <Close />
                    </IconButton>
                </header>
                <form >
                    <div className="select-photo">
                       <figure>
                           <h5>Image</h5>
                           <div className="img"></div>
                       </figure>
                    </div>
                    <div className="playlist-fields">

                        Sunt ad est non ad fugiat.
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreatePlayList