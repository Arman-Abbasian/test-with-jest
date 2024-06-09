import axios from 'axios'
import React, { useEffect, useState } from 'react'

function PostList() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            console.log(res.data)

        }).catch((err)=>console.log(err))
    },[])
  return (
    <div>PostList</div>
  )
}

export default PostList