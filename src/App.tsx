import { ChangeEvent } from 'react';
import {FC, useRef} from 'react';
import Button from './components/Button';
import Input, { InputRef } from './components/Input';

const App: FC = () => {

  const inputRef = useRef<InputRef>(null);

  const clickSave = () => {
    inputRef.current?.setValue('Hello World');
  }

  const clickCancel = () => {
    console.log(inputRef.current?.getValue());
  }

  const changeInput = (value: string, e: ChangeEvent<HTMLInputElement>| undefined) => {
    console.log({e: e?.target.value});
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
    <Button variant="primary" onClick={clickSave}>Save</Button>
    <Button onClick={clickCancel}>Cancel</Button>
    <Button variant="success" onClick={() => alert('Exit')}>Exit</Button>
    <div>
      <Input ref = {inputRef} onChange = {changeInput}/>
    </div>
    </div>
  )
}
export default App;
