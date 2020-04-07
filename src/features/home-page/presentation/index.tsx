import React from "react";


export default function HomePage(params: any) {
    return (
        <div className="home-container">
            <h1 className='home-main-title'>
                Made for you
             <p className='home-main-subtitle'>Music specially selected for you</p>
            </h1>
            <div className="home-grid-container">
                <div className="recommends">
                    <div className="recommend-item button">Weekly</div>
                    <div className="recommend-item">Trending Rock</div>
                    <div className="recommend-item">Trending Rock</div>
                    <div className="recommend-item">Trending Rock</div>
                    <div className="recommend-item">Trending Rock</div>
                </div>
                <div className="explore-genre">
                    <div className="explore-genre-title-container">
                        <span className="explore-by-genre-title">Explorer By Genre</span>
                        <span className="explore-by-genre-see-more button">See more</span>
                    </div>
                    <div className="explore-genre-item genre-item blues">Lorem lorem</div>
                    <div className="explore-genre-item genre-item jazz">Lorem lorem</div>
                    <div className="explore-genre-item genre-item african">Lorem lorem</div>
                    <div className="explore-genre-item genre-item pop">Lorem lorem</div>
                    <div className="explore-genre-item genre-item metal">Lorem lorem</div>
                </div>
                <div className="explore-genre">
                    <div className="explore-genre-title-container">
                        <span className="explore-by-genre-title">Radio</span>
                        <span className="explore-by-genre-see-more button">See more</span>
                    </div>
                    <div className="explore-genre-item genre-item blues">Lorem lorem</div>
                    <div className="explore-genre-item genre-item jazz">Lorem lorem</div>
                    <div className="explore-genre-item genre-item african">Lorem lorem</div>
                    <div className="explore-genre-item genre-item pop">Lorem lorem</div>
                    <div className="explore-genre-item genre-item metal">Lorem lorem</div>
                </div>
            </div>
        </div>
    )
}