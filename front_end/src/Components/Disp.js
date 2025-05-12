import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Disp = () => {
  let [data,setData]=useState([])
  let [f,setF]=useState(true)

  let obj=useContext(Ct)

  let navigate=useNavigate()
  useEffect(()=>{
    if(obj.store.token=="")
    {
      navigate("/login")
    }
  })

  useEffect(()=>{
    axios.get("http://localhost:5000/getstd",{"headers":{"Authorization":obj.store.token}}).then((res)=>{
      setData(res.data)
    })
  },[f])

  let upd=(editobj)=>{
    obj.updstore(editobj)
    navigate("/edit")
  }
  let del=(hno)=>{
    axios.delete(`http://localhost:5000/del/${hno}`,{"headers":{"Authorization":obj.store.token}}).then((res)=>{
      setF(!f)
    })
  }
  return (
    <div className='dcon'>
      
      { data.length>0 && 
      <table>
        <tr><th>Sno</th><th>HallTicket No.</th><th>Name</th><th>Phno</th><th>Gender</th><th>DOB</th><th>Email</th><th>Telugu</th><th>Hindi</th><th>English</th><th>Maths</th><th>Science</th><th>Social</th></tr>
        {
          data.map((std,ind)=>{
            return(
              <tr>
                <td>{ind+1}</td>
                <td>{std._id}</td>
                <td>{std.name}</td>
                <td>{std.phno}</td>
                <td>{std.gen}</td>
                <td>{std.dob.slice(0,10)}</td>
                <td>{std.email}</td>
                <td>{std.tel}</td>
                <td>{std.hn}</td>
                <td>{std.eg}</td>
                <td>{std.m}</td>
                <td>{std.s}</td>
                <td>{std.sc}</td>
                <td><button onClick={()=>upd({"std":std})}>Edit</button></td>
                <td><button onClick={()=>del(std._id)}>Delete</button></td>
              </tr>
            )
          })
        }
      </table>
    }
    </div>
  )
}

export default Disp