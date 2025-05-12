import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Ct from './Ct'

const Nav = () => {
  let obj=useContext(Ct)
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/reg'>Std_Register</NavLink>
        <NavLink to='/ht'>Print_HT</NavLink>
        {obj.store.token=="" && <NavLink to='/login'>Admin_login</NavLink>}
        {obj.store.token!="" && <NavLink to='/disp'>Display</NavLink>}
        {obj.store.token!="" && <NavLink to='/logout'>Logout</NavLink>}
        {obj.store.token!="" && <div>{obj.store.name}</div>}
    </nav>
  )
}

export default Nav