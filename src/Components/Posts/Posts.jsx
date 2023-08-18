import React, { useEffect, useState } from 'react'
import './Posts.css'
import axios from 'axios';
import { API_URL } from '../../URL';
import { useNavigate } from 'react-router-dom';



const Posts = () => {
  const navigate = useNavigate();
  const [posts,setPosts]=useState([]);

  useEffect(() => {
    const fetchPosts =async()=>{
      const {data} =await axios.get(API_URL);
      setPosts(data);
    };
    fetchPosts();

  },[]);

  const deleteUser = async (id) =>{
    console.log(API_URL)
    await axios.delete(API_URL + id)
  }




  return (
    <div className='post'>
      <div className='container'> 
      <button onClick={()=>navigate('/post/new')} className='btn btn-primary'>New Post</button>
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
       <tbody>
        {posts.map((post)=>(
          <tr key={post.id}>
            <td>{post.title}</td>
            <td>{post.content}</td>
            <td><button  
           onClick={()=> navigate(`/post/${post.id}`)}
            className="btn btn-primary">Update</button></td>
            <td><button  
            onClick={()=>deleteUser(post.id)}
            className="btn btn-danger">Delete</button></td>
          </tr>
          ))}
       </tbody>
      </table>
      </div>
    </div>
  )
}

export default Posts