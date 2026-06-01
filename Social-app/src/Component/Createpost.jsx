import React, { useContext, useRef } from 'react'
import { Postlist } from '../Hero/poststore'

function Createpost() {
  const { addPost } = useContext(Postlist)

  const posttitleElement = useRef()
  const postbodyElement = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()

    const title = posttitleElement.current.value
    const body = postbodyElement.current.value
    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 5,
      }),
    })
      .then(res => res.json())
      .then(post => addPost(post));
   

    // clear inputs
    posttitleElement.current.value = ""
    postbodyElement.current.value = ""
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-lg mx-4">

        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center text-gray-800">
          Create Post
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <input
            id='title'
            name='title'
            type="text"
            ref={posttitleElement}
            placeholder="Enter Title"
            className="w-full p-2 border rounded-md"
          />

          <textarea
            id='body'
            name='body'
            ref={postbodyElement}
            placeholder="Write your bio..."
            rows="4"
            className="w-full p-2 border rounded-md"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
            Create Post
          </button>

        </form>

      </div>

    </div>

  )
}

export default Createpost;
