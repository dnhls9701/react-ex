import { ChangeEvent } from 'react';
import {FC, useRef} from 'react';
import Button from './components/Button';
import Input, { InputRef } from './components/Input';

const App: FC = () => {

  const inputRef = useRef<InputRef>(null);

  // const clickSave = () => {
  //   inputRef.current?.setValue('Hello World');
  // }

  // const clickCancel = () => {
  //   console.log(inputRef.current?.getValue());
  // }

  const changeInput = (value: string, e: ChangeEvent<HTMLInputElement>| undefined) => {
    console.log({e: e?.target.value});
  }

  const clickSubmit = () => {
    console.log(inputRef.current?.getUsernameValue());
    console.log(inputRef.current?.getPasswordValue());
  }

  return(
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </header>
    <div>
      <Input ref = {inputRef} onChange = {changeInput}/>
      <div>
        <Button onClick={clickSubmit}>Login</Button>
      </div>
    </div>
    </div>
  )
}
export default App;
