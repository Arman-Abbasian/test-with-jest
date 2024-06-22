import React, { useState } from 'react'


function AddPost() {
    const [postForm,setPostForm]=useState({title:"",body:""});
    const changeHandler=(e)=>{
        setPostForm({...postForm,[e.target.name]:e.target.value})
    };
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(postForm)
        fetch("http://localhost:4000/posts", {
            method: "POST",
            
            body:  JSON.stringify(postForm)
        })
        .then(function(response){ 
            console.log(response)
            setPostForm({title:"",body:""})
            return response.json(); 
        })
        .then(function(data){ 
            console.log(data)
        });
    };
    
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='title'>title </label>
                <input type='text' name='title' id="title" value={postForm.title} onChange={changeHandler} />
            </div>
            <div>
                <label htmlFor='body'>body </label>
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