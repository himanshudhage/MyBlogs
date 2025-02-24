import { useState ,useEffect } from 'react'
import './App.css'
import Login from './Login'
import Navbar from './Navbar'
import Home from './Home'
import Post from './Post'
import EditPost from './EditPost'
import Register from './Register'
import { createContext } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom' 
import axios from 'axios'
import CreatePost from './CreatePost'
export const userContext = createContext();

function App() {
axios.defaults.withCredentials = true;

  const [user, setUser] = useState({})

  useEffect(() => {
   axios.get('http://localhost:3001/')
   .then(user=>{
    setUser(user.data)
   })
   .catch(err=>console.log(err))
  }, [])
  
  return (
    <userContext.Provider value={user}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<CreatePost/>}></Route>
        <Route path="/post/:id" element={<Post/>}></Route>
        <Route path="/editpost/:id" element={<EditPost/>}></Route>
        {/* <Route path="/post/:id" element={<EditPost/>}></Route> */}
      </Routes>
      </BrowserRouter>
      </userContext.Provider>
  )
}

export default App
