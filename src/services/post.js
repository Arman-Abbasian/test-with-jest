export const fetchData = async (setPosts) => {
    try {
      console.log('Fetching data...');
      const response = await fetch('http://localhost:4000/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const posts = await response.json();
      console.log('Fetched posts:', posts);
      setPosts(posts);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error (e.g., show an error message to the user)
    }
  };

export const postData=async(postForm,setPosts)=>{
    try {
        const response = await fetch('http://localhost:4000/posts',{
            method: "POST",
            body:  JSON.stringify(postForm)
        });
        const data = await response.json();
        const getRespose = await fetch('http://localhost:4000/posts');
      const posts = await getRespose.json();
      setPosts(posts);
        return data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
};


