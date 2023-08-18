import React, { useEffect, useState } from 'react'
import { API_URL } from '../../URL';
import './Post.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const Post = () => {

const navigate = useNavigate();


  const {id} =useParams();
const [post, setPost]= useState({
  title:'',
  content:''
});
useEffect(()=>{
  if(id === 'new') return;

  const fetchPost =async()=>{
    const{data} = await axios.get(`${API_URL}/${id}`);
    setPost(data);
  };
  fetchPost();
}, [id])
console.log(post)

const handleChange =(e) =>{
  const postClone = {...post};
  postClone[e.target.name]=e.target.value;
  setPost(postClone)
}


const handleSubmit = async (e) =>{
  e.preventDefault();

try {
  if(id === 'new'){
    axios.post(API_URL,post);
    return navigate('/')
  }else{
    axios.put(API_URL + '/' + id,post);
    return navigate('/')
}
} catch (error) {
  console.log(error)
}

};
  return (
    <div className='postline'>
    <div className='container'> 
      <form className='post'>
        <input type='text' placeholder='title...' name='title' value={post.title} onChange={handleChange}/>
        <input type='text' placeholder='content...' name='content' value={post.content} onChange={handleChange}/>  
        <button onClick={handleSubmit} className='btn btn-primary'>
          {id === 'new'? 'Post':"Update"}</button>
      </form>   
    </div>
    </div>
  )
  }

export default Post