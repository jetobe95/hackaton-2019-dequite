import React from 'react';
import imageLoading from '../../../assets/loading-page/loading-icon.png';

export default function LoadingPage(props:any) {
    return (
        <div className="loading-page-container">
            <img src={imageLoading} alt="" />
        </div>
    )
}