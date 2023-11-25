import React from 'react'
import { Link } from 'react-router-dom'

export default function Navabr({login, setLogin}) {
  return (
    <div>
        <ul className='nav'>
   <li>
    <Link  className='nav_li'  to='/'>
    home</Link>
   </li>
   <li>
    <Link className='nav_li' to='/hero'>Hero</Link>
   </li>
   <li>
    <Link className='nav_li' to='/add'>
  add
    </Link>
   </li>
   <li>
    <Link className='nav_li' to='/products'>
    Products</Link>
   </li>
   <li>
    <Link to='/login'>
<button className='nav_btn' onClick={() => setLogin(!login)}>login</button>
    </Link>


   </li>
        </ul>
    </div>
  )
}
