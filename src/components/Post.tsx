import axios from "axios"

export function Post(post:any) {  
    function Delete() {
        console.log(123);
        
        axios.delete(`https://backendtodo-51m3.onrender.com/posts/${post.post._id}`,{
            headers:{
              authorization:localStorage.getItem("Token")
            }
          })
          window.location.reload()
    }  
    return (
        <div>
            <div className=" mb-5 pt-5 flex justify-between px-10"><input type="radio" onClick={()=>Delete()}/> {post.post.title} {post.post.text}</div>
            <div className=" h-0.5 bg-gray-700"></div>
        </div>
    )
}