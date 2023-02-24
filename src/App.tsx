import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "./components/Modal";

function App() {

  const [modal,setModal]=useState(false)
  const [login,setLogin]=useState(false)
  const [email,setEmail]=useState("")
  const [error,setError]=useState(false)

  const [password,setPassword]=useState("")  
  useEffect(()=>{
  if (localStorage.getItem("Token")) {
    setLogin(false)
  }  
  })

  const changeEmail= (event: React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(event.target.value)
    setError(false)
    }
    const changePassword= (event: React.ChangeEvent<HTMLInputElement>)=>{
      setPassword(event.target.value)
    setError(false)
      }
      const notDefoult = async(event: React.FormEvent)=>{
        event.preventDefault()
    }
  function Login() {
      return axios.post("http://localhost:777/login",{
        "email":email,
        "password":password
      }).then((res)=>{localStorage.setItem("Token",res.data.token);
      setModal(false)})
    .catch((err)=>{
      setError(true);
    })

  }
  return (
<>
{modal&&<Modal title="Login">
  <form className="text-black flex justify-center flex-col px-[40%]" onSubmit={notDefoult}>
    {error&&<div className="text-red-600">Incorect Email or password</div>}
    <input type="email" placeholder="email" className="bg-[#25273C] px-5 py-3 mb-5 rounded" value={email} onChange={changeEmail}/>
    <input type="password" placeholder="password" className="bg-[#25273C] px-5 py-3 mb-5 rounded" value={password} onChange={changePassword}/>
    <input type="submit" value="Login" className="bg-[#5aff3199] py-3" onClick={()=>{Login()}}/>
  </form>
</Modal>}
<div className="">
<header className='text-[96px] ml-9 flex flex-row justify-around'>TODO 
{login&&<button className='text-[50px] bg-black ml-9 rounded px-5 py-3' onClick={()=>setModal(true)}>SignUp</button>}
</header>

</div>
</>
  );
}

export default App;
