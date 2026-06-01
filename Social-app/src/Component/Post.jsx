import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { Postlist } from '../Hero/poststore';

function Post({ post }) {
  const { deletePost } = useContext(Postlist);

  return (
   
    
    <div className="relative p-5 mx-4 sm:mx-auto mt-6 mb-5 hover:shadow-xl rounded-xl shadow-lg w-full max-w-3xl bg-white hover:-translate-y-1 transition duration-300">
         
      <span 
        className="absolute -top-3 right-4 bg-red-400 text-white p-2 rounded-full cursor-pointer hover:bg-red-500"
        onClick={() => deletePost(post.id)}
      >
        <MdDelete size={18} />
      </span>

      <h3 className="text-2xl font-bold mb-2 text-blue-500">
        {post.title}
      </h3>

      <p className="text-black ">{post.body}</p>
     
    </div>
  )
}


export default Post;