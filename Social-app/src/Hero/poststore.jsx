import React, { createContext, useReducer,useState,useEffect } from 'react';

// Create Context
export const Postlist = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
});

// Reducer
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } 
   else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
     }
  else if (action.type === "ADD_POST") {
    newPostList = [ action.payload.post,...currPostList];
  }

  return newPostList; // ✅ FIXED
};



// Provider
const PostlistProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer( postListReducer, [] );
   const [ fetching, setfetching ] = useState(false);

  

  const addPost = (post) => {
    
    dispatchPostList({
      type: 'ADD_POST',
      payload: { post },
    });
  };
  // adds initial posts from the server to the post list
  const addinitialPosts = (posts ) => {
    
    dispatchPostList({
      type: 'ADD_INITIAL_POSTS',
      payload: {posts},
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: 'DELETE_POST',
      payload: { postId },
    });
  };
  useEffect(() => {
    setfetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://dummyjson.com/posts',{signal})
      .then(res => res.json())
      .then(data => {
        addinitialPosts(data.posts);
        setfetching(false);
      });
      return () => {

        // controller.abort();
      };

  }, []);

  return (
    <Postlist.Provider value={{ postList,fetching, addPost, addinitialPosts, deletePost }}>
      {children}
    </Postlist.Provider>
  );
};

export default PostlistProvider;
