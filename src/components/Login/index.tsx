import { forwardRef, useImperativeHandle, Fragment, ForwardRefRenderFunction, ChangeEvent, useRef } from 'react';
import Button from 'components/Button';
import Input, { InputRef, InputProps } from 'components/Input';

export interface LoginRef{
    setUsernameValue(username: string): void;
    getUsernameValue(): string;

    setPasswordValue(password: string): void;
    getPasswordValue(): string;
}

const Login: ForwardRefRenderFunction<LoginRef, InputProps> = (props, ref) => {

    const usernameRef = useRef<InputRef>(null);
    const passwordRef = useRef<InputRef>(null);

    useImperativeHandle(ref, () => ({
        setUsernameValue(username) {
            usernameRef.current?.setValue(username);
        },
        getUsernameValue() {
            return (usernameRef.current?.getValue() || '');
        },
        setPasswordValue(password) {
            passwordRef.current?.setValue(password);
        },
        getPasswordValue() {
            return (passwordRef.current?.getValue() || '');
        }
    }));

    const changeInput = (value: string, e: ChangeEvent<HTMLInputElement>| undefined) => {
        console.log({e: e?.target.value});
    }

    const clickSubmit = () => {
        console.log(usernameRef.current?.getValue());
        console.log(passwordRef.current?.getValue());
    }

    return(
        <Fragment>
            <span>Username </span>
            <div>
                <Input type="text" ref={usernameRef} onChange={changeInput}/>
            </div>
            <span>Password </span>
            <div>
                <Input  ref={passwordRef} onChange={changeInput}/>
            </div>
            <div>
                <Button onClick={clickSubmit}>Login</Button>
            </div>
        </Fragment>
    )
}

export default forwardRef(Login);