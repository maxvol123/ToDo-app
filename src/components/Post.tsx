export function Post(post:any) {    
    return (
        <div className="">
            <div className="w-full mb-10">{post.post.title} {post.post.text}</div>
        </div>
    )
}