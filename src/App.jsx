import { useState } from 'react'
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import "./index.css";
import Result from './components/Result.jsx';


const initUserInput = {
  initalInvesment: 10000,
  annualInvesment: 1200,
  expectedReturn: 10,
  duration: 6
}

function App() {

  const [userInput, setUserInput] = useState(initUserInput)

  const handleChange = (inputIdentidy, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentidy]: newValue
      }
    })
  }


  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      <Result input={userInput} />
    </>
  )
}

export default App
