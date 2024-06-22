import React, { useEffect, useState } from 'react'



function PostList() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:4000/posts');
          const posts = await response.json();
          setPosts(posts);
        } catch (error) {
          // Handle errors (e.g., network issues)
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    },[])
  return (
    <div>
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