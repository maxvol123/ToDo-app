import axios from "axios";
import { useState } from "react";
import { Modal } from "./components/Modal";

function App() {
  const [modal,setModal]=useState(false)

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const changeEmail= (event: React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(event.target.value)
    }
    const changePassword= (event: React.ChangeEvent<HTMLInputElement>)=>{
      setPassword(event.target.value)
      }
      const notDefoult = async(event: React.FormEvent)=>{
        event.preventDefault()
    }
  function Login() {
    return axios.post("http://localhost:777/login",{
      "email":email,
      "password":password
    }).then((res)=>{localStorage.setItem("Token",res.data.token);console.log(res);
    
    setModal(false)})
  }
  return (
<>
{modal&&<Modal title="Login">
  <form className="text-black flex justify-center flex-col px-[40%]" onSubmit={notDefoult}>
    <input type="email" placeholder="email" className="bg-[#25273C] px-5 py-3 mb-5 rounded" value={email} onChange={changeEmail}/>
    <input type="password" placeholder="password" className="bg-[#25273C] px-5 py-3 mb-5 rounded" value={password} onChange={changePassword}/>
    <input type="submit" value="Login" className="bg-[#5aff3199] py-3" onClick={()=>{Login()}}/>
  </form>
</Modal>}
<div className="">
<header className='text-[96px] ml-9 flex flex-row justify-around'>TODO 
<button className='text-[50px] bg-black ml-9 rounded px-5 py-3' onClick={()=>setModal(true)}>SignUp</button>
</header>

</div>
</>
  );
}

export default App;
