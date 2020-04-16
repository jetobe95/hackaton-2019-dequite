import React from 'react';
import SearchIcon from '@material-ui/icons/Search'
interface TextInputProps {
    onChangeText(string: string): void,
    onFocus?():void
}
export default function TextInput(props: TextInputProps) {
    const [value,setValue] = React.useState<string>('')
    function onChange(string: string) {
        setValue(string);
    }
    return (
        <form className="text-input-container"  onSubmit={(e)=>{
            e.preventDefault()
            props.onChangeText && props.onChangeText(value);
        }}>
            <div className="icon-container">
                <SearchIcon />
            </div>
            <input

               
                onChange={({ target: { value } }) => onChange(value)}
                type="text"
                placeholder='Search'
                className='text-input'
            />
        </form>
    )
}