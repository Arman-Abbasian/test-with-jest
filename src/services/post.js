import { initilaPostForm } from "../components/AddPost/AddPost";

export const fetchData = async (setPosts) => {
    try {
      const response = await fetch('http://localhost:4000/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const posts = await response.json();
      setPosts(posts);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

export const postData=async(postForm,setPosts,setPostForm)=>{
    try {
        const response = await fetch('http://localhost:4000/posts',{
            method: "POST",
            body:  JSON.stringify(postForm)
        });
        const data = await response.json();
        setPostForm(initilaPostForm)
        await fetchData(setPosts);
        console.log(data)
        return data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
};
