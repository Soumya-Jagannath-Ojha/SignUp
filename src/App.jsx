import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 import './App.css'
import FormInput from './components/FormInput'
function App() {

  const [values,setvalues] = useState({
    username: "",
    email:"",
    birthday:"",
    password:"",
    conformPassword:"",
  });
  
const inputs = [
  {
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    errorMessage:"Username should be 3-16 characters and shouldn't includes any special character!",
    label:"Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id:2,
    name:"email",
    type:"email",
    placeholder:"Email",
    errorMessage:"It should be a valid email address!",
    label:"Email",
    required: true,
  },
  {
    id:3,
    name:"birthday",
    type:"Date",
    placeholder:"Birthday",
    label:"Birthday"
  },
  {
    id:4,
    name:"password",
    type:"password",
    placeholder:"Password",
    errorMessage:"Password should be 8-20 characters and includes at least 1 letter, 1 number and 1 spacial character!",
    label:"Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id:5,
    name:"conformPassword",
    type:"password",
    placeholder:"Conform Password",
    errorMessage:"Password don't match ",
    label:"Conform Password",
    pattern: values.password,
    required: true,
  }
  
]
  // const usernameRef = useRef();
  // console.log(usernameRef);
  const handleSubmit = (e) =>{
    e.preventDefault();
    
    console.log()
  }

  const onChange = (e) =>{
    setvalues({...values , [e.target.name]: e.target.value });
  }
  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input)=>(
              <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />

        ))}
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App
