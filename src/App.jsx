import React from 'react'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Routes> 
           <Route path='/' element={<Home/>} exact/>
           <Route path='/post' element={<CreatePost/>} exact/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
