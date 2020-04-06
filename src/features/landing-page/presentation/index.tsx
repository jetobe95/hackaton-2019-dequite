import React from 'react';
import SocialButton from './components/social-button';

function LandingPage(params: any) {
    return (
        <div>
            <section className='landing-page-section section-1'>
                <article className="branding">
                    <h1 className='landing-main-title mb-1'>The House of music.</h1>
                    <p className='landing-main-subtitle mb-1'>Play and download music on your mobile, tablet and computer.</p>
                    <div className="socials-buttons-container">
                        <SocialButton
                            title='Facebook'
                            color='#486DC0'
                            logo={require('../../../assets/social-networks/facebook.png')}
                        />
                        <SocialButton
                            title='Twitter'
                            color='#1DA1F2'
                            logo={require('../../../assets/social-networks/twitter.png')}
                        />
                    </div>
                    <p className='mb-1' style={{ color: 'white' }}> - OR - </p>
                    <a href='/' style={{color:'white'}}> Try without logging in </a>
                </article>
            </section>
            <div className="black-gradient"></div>
            <section className='landing-page-section section-2'>
                <article className="branding">
                    <div>
                        <h1 className='landing-main-title'>Lorem ipsum dolor sit amet.</h1>
                        <p className='landing-main-subtitle text-align-right'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default LandingPage