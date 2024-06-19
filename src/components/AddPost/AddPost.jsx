import React, { useState } from 'react'
var headers = {
    "Content-Type": "application/json",                                                                                                
    "Access-Control-Origin": "*"
 }

function AddPost() {
    const [postForm,setPostForm]=useState({title:"",body:""});
    const changeHandler=(e)=>{
        setPostForm({...postForm,[e.target.name]:e.target.value})
    };
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(postForm)
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: headers,
        body:  JSON.stringify(postForm)
    })
    .then(function(response){ 
        console.log(response)
        return response.json(); 
    })
    .then(function(data){ 
        console.log(data)
    });
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