import React from 'react';
import SearchIcon from '@material-ui/icons/Search'
interface TextInputProps {
    onChangeText(string: string): void,
    onFocus?():void
}
export default function TextInput(props: TextInputProps) {
    function onChange(string: string) {
        props.onChangeText && props.onChangeText(string)
    }
    return (
        <div className="text-input-container">
            <div className="icon-container">
                <SearchIcon />
            </div>
            <input
                onFocus={props.onFocus}
                onChange={({ target: { value } }) => onChange(value)}
                type="text"
                placeholder='Search'
                className='text-input'
            />
        </div>
    )
}