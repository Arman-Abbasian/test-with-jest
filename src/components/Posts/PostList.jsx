import React, { useEffect, useState } from 'react'
import AddPost from '../AddPost/AddPost';
import { fetchData } from '../../services/post';



function PostList() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
      fetchData(setPosts)
    },[])
  return (
    <div>
      <AddPost setPosts={setPosts} />
    <h1>post list</h1>
    <div>
      {posts.map(item=>{
        return <p data-testid={item.id} key={item.id}>{item.title}</p>
      })}
    </div>
    </div>
  )
}
export default PostList