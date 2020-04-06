import React from 'react'
interface SocialButtonProps {
    title: string,
    logo: string,
    color: string
}
function SocialButton(props: SocialButtonProps) {
    return (
        <a className='social-button' href='/' style={{ 'backgroundColor': props.color }}>
            <img src={props.logo} alt={props.title} />
            <span className='social-icon-title'>{props.title}</span>
        </a>
    )
}

export default SocialButton;