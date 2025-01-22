import {Link, useNavigate} from 'react-router-dom';
import { BiCameraMovie, BiSearch } from 'react-icons/bi';
import './Navbar.css'
import { useState } from 'react';


export default function Navbar() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(search)

    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch('')
  }
    return (
        <>
        <div id='navbar'>
          <nav >
            <h2>
                <Link to='/'>
                    <BiCameraMovie/>
                    MoviesLib
                </Link>
            </h2>
          </nav>
          <form onSubmit={handleSubmit}>
            <input 
              type="text"
              placeholder='Busque um filme'
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button type='submit'>
                <BiSearch/>
            </button>
          </form>
        </div>
        </>
    )
}