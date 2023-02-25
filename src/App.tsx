import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Modal } from "./components/Modal";
import { Post } from "./components/Post";

function App() {

  const [modal,setModal]=useState(false)
  const [me,setMe]=useState(false)
  const [login,setLogin]=useState(false)
  const [email,setEmail]=useState("")
  const [error,setError]=useState(false)
  const [memail, setMemail]=useState("")
  const [name, setname]=useState("")
  const [password,setPassword]=useState("")  
  const [posts,setPosts]=useState([]); 

  useEffect(()=>{
    Get()
  if (localStorage.getItem("Token")) {
    setLogin(false)
    axios.get("http://localhost:777/me",{
      headers:{
        authorization:localStorage.getItem("Token")
      }
    })
    .then((res)=>{
     setMemail(res.data.email)
     setname(res.data.fullname)
    })
  }else{
    setLogin(true)
  }  
  },[])
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
  function Get() {
    return axios.get("http://localhost:777/posts",{
      headers:{
        authorization:localStorage.getItem("Token")
      }
    }).then((res)=>{setPosts(res.data)
      console.log(res.data);
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
{me&&<Modal title="Me">
  <div className="px-10">
  <div className="text-xl text-black">Your email: {memail}</div>
  <div className="text-xl text-black">Your fullname: {name}</div>

  </div>
</Modal>}
<div className="">
<header className='text-[96px] ml-9 flex flex-row justify-around'>TODO 
{login?(<button className='text-[50px] bg-black ml-9 rounded px-5 py-3' onClick={()=>setModal(true)}>SignUp</button>):(<button className='text-[50px] bg-black ml-9 rounded px-5 py-3' onClick={()=>setMe(true)}>Me</button>)}
</header>
<div className="text-center bg-[#25273C] w-[666px] items-center center">
{posts?.map(post=><Post post={post}></Post>)}
</div>
</div>
</>
  );
}

export default App;
