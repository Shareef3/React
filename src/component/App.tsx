
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import AboutUs from './AboutUs'
import AddNewMovie from './AddNewMovie'
import AllMoviesList from './AllMovieList'
import ContactUs from './ContactUs'
import EditMovie from './EditMovie'
import Home from './Home'
import MovieDescription from './MovieDescription'

export default function App() {
  return (
    <div>

<BrowserRouter>
<Routes>
<Route path="/" element={<Login />} />
<Route path="/home" element={<Home />} />
<Route path="/add" element={<AddNewMovie />} />
<Route path="/edit" element={<EditMovie />} />
<Route path="/all" element={<AllMoviesList />} />
<Route path="/about" element={<AboutUs />} />
<Route path="/contact" element={<ContactUs />} />
<Route path="/mDes" element={<MovieDescription />} />


</Routes>


</BrowserRouter>





    </div>
  )
}