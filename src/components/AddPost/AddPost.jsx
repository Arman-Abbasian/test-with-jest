import React, { useState } from 'react'
import { postData } from '../../services/post';


function AddPost({setPosts}) {
    const [postForm,setPostForm]=useState({title:"",body:""});
    const changeHandler=(e)=>{
        setPostForm({...postForm,[e.target.name]:e.target.value})
    };
    const submitHandler=(e)=>{
        e.preventDefault();
        postData(postForm,setPosts);
    };
    
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='title'>title </label>
                <input type='text' name='title' id="title" value={postForm.title} onChange={changeHandler} />
            </div>
            <div>
                <label htmlFor='body'>body</label>
                <input type='text' name='body' id="body" value={postForm.body} onChange={changeHandler} />
            </div>
            <div>
                <input type='submit' value="Add" />
            </div>
        
        </form>
    </div>
  )
}

export default AddPost