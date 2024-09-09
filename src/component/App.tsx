import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs'
import AddNewMovie from './AddNewMovie'
import AllMoviesList from './AllMovieList'
import ContactUs from './ContactUs'
import EditMovie from './EditMovie'
import Home from './Home'
import Login from './Login'
import MovieDescription from './MovieDescription'
import Register from './Register'

export default function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
<Route path="/" element={<Login />} />
<Route path="/home" element={<Home />} />
<Route path="/add" element={<AddNewMovie />} />
<Route path="/edit/:id" element={<EditMovie />} />
<Route path="/all" element={<AllMoviesList />} />
<Route path="/about" element={<AboutUs />} />
<Route path="/contact" element={<ContactUs />} />
<Route path="/mDes/:id" element={<MovieDescription />} />
{/* <Route path="/register" element={<Register />} /> */}


</Routes>


</BrowserRouter>





    </div>
  )
}