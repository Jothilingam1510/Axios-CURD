import React from 'react'
import Posts from './Components/Posts/Posts'
import Post from './Components/Post/Post'
import{ Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
   <Routes>
    <Route path='/' element={<Posts/>}/>
    <Route path='/post/:id' element={<Post/>}/>
   </Routes>
    </>
  )
}

export default App