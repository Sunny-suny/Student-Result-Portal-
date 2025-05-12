import React, { useContext, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  let [data,setData]=useState({"_id":"","pwd":""})
  let [msg,setMsg]=useState("")
  let obj=useContext(Ct)
  let navigate=useNavigate()
  let fun=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  let login=()=>{
    axios.post("http://localhost:5000/login",data).then((res)=>{
      if(res.data.token!=undefined)
      {
        obj.updstore(res.data)
        navigate("/disp")
      }
      else{
        setMsg(res.data.msg)
      }
    })
  }
  return (
    <div className='lgcon'>
    <div className='lgform'>
      <div>{msg}</div>
      <div className='lginp'>
          <input type='text' placeholder='Enter ID' onChange={fun} name='_id' value={data._id}/>
          <input type='password' placeholder='password' onChange={fun} name='pwd' value={data.pwd}/>
          <button onClick={login}>Login</button>
      </div>
    </div>
    </div>
  )
}

export default Login