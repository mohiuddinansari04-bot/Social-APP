import React, { useContext, useEffect, useState, } from 'react'
import Post from './Post'
import { Postlist as PostlistData } from '../Hero/poststore'
import WelcomeMessage from './WelcomeMessage';
import Lodingspinner from './Lodingspinner';

function Postlist() {
  const { postList, fetching } = useContext(PostlistData);
  return (
    <>
      {fetching && <Lodingspinner />}
      {
        !fetching && postList.length === 0 && <WelcomeMessage />
      }
      {!fetching && postList.map((post) =>

        <Post key={post.id} post={post} />)}

    </>
  )
}

export default Postlist;