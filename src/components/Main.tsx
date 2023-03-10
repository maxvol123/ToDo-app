import { useState } from "react";
import axios from "axios";
export function Main() {
    const [title,setTitle]=useState("")
    const [text,setText]=useState("")
    const changeTitle= (event: React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.target.value)
        }
        const changeText= (event: React.ChangeEvent<HTMLInputElement>)=>{
          setText(event.target.value)
          }
      function Create() {
        return axios.post("https://backendtodo-51m3.onrender.com/posts",{
          "title":title,
          "text":text
        })
      }
    return(
        <div className="flex justify-center">
  <form onSubmit={()=>Create()} className="flex flex-col">
  <input type="text" placeholder="Enter title..." className="bg-[#25273C] px-5 py-3 mb-5 rounded" value={title} onChange={changeTitle}/>
  <input type="text" placeholder="Enter desribtion..." className="bg-[#25273C] px-5 py-3 mb-5 rounded" value={text} onChange={changeText}/>
  <input type="submit" value="Create" className="bg-[#5aff3199] py-3" />
  </form>
</div>
    )
}