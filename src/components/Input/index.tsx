import { forwardRef, useImperativeHandle, Fragment } from 'react';
import { ForwardRefRenderFunction } from 'react';
import { ChangeEvent, useState, useRef} from 'react';

export interface InputRef{
    setUsernameValue(username: string): void;
    getUsernameValue(): string;

    setPasswordValue(password: string): void;
    getPasswordValue(): string;
}

export interface InputProps{
    onChange?( value: string, e: ChangeEvent<HTMLInputElement>| undefined): void;
}

const Input: ForwardRefRenderFunction<InputRef, InputProps> = (props, ref) => {
    const [ currentUsernameValue, setUsernameCurrentValue ] = useState('');
    const [ currentPasswordValue, setPasswordCurrentValue ] = useState('');
    const eventRef = useRef<ChangeEvent<HTMLInputElement>>();
    
    useImperativeHandle(ref, () => ({
        setUsernameValue(username) {
            setUsernameCurrentValue(username);
        },
        getUsernameValue() {
            return currentUsernameValue;
        },
        setPasswordValue(password) {
            setPasswordCurrentValue(password);
        },
        getPasswordValue() {
            return currentPasswordValue;
        }
    }));

    const changeUsernameInput = (e: ChangeEvent<HTMLInputElement>) => {
        eventRef.current = e;
        setUsernameCurrentValue( e.target.value );
    }

    const changePasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
        eventRef.current = e;
        setPasswordCurrentValue( e.target.value );
    }
        
    return(
        <Fragment>
            <span>Username </span>
            <div>
                <input type="text" value={currentUsernameValue} onChange={changeUsernameInput}/>
            </div>
            <span>Password </span>
            <div>
                <input type="password" value={currentPasswordValue} onChange={changePasswordInput}/>
            </div>
        </Fragment>
    )
}

export default forwardRef(Input);