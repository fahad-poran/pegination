import axios from 'axios';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom';

import Header from "./Components/Header/Header";
import Home from './Components/Home/Home';
import Pagination from './Components/Pagination';
import Post from './Components/Post';

function App() {
const [posts,setPosts] = useState([]);
const [loading,setLoading] = useState(false);
const [currentPage,setCurrentPage] = useState(1);
const [postsPerPage] = useState(10);

useEffect(()=>{
  //cant make async direcly on useEffect 
  const fetchPosts = async()=>{
    setLoading(true);
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(res.data);
    setLoading(false);
  }
  fetchPosts();

},[]); //only run when it mount * []
console.log(posts);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPost = posts.slice(indexOfFirstPost,indexOfLastPost);

const paginate = pageNumber =>{
  setCurrentPage(pageNumber);
}
  return (
   <div className='container mt-5'>
<h2 className='text-primary mb-3'>
My Blogs</h2>
<br /><br />
<Post loading={loading} posts={currentPost}></Post>

<Pagination paginate={paginate} postsPerPage={postsPerPage} totalPosts={posts.length}></Pagination>
    
   </div>
  );
}

export default App;
