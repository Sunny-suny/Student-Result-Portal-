import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    let [data,setData]=useState({"name":"","phno":"","dob":"","gen":"","email":"","photo":""})
    let [msg,setMsg]=useState("")
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
        // console.log("data =",data)
    }

    let fun1=(e)=>{
        setData({...data,"photo":e.target.files[0]})
    }
    let reg=()=>{
        let fd=new FormData()
        for(let p in data)
        {
            fd.append(p,data[p])
        }        
        axios.post("http://localhost:5000/reg",fd).then((res)=>{
            if("msg" in res.data)
            {
                setMsg(res.data.msg)
                setData({"name":"","phno":"","dob":"","gen":"","email":"","photo":""})
            }
            else{
                setMsg(res.data.err)
                // console.log(res.data)
            }
        }).catch((err)=>{
            console.log(err.message)
        })
    }
  return (
    <div className='rcon'>
         <h1>..Student Registeration..</h1>
        <div className='rform'>
            {msg!="" && <div>{msg}</div>}
            <div className='rp1'>
               <input type='text' placeholder='Enter Name' name='name' onChange={fun} value={data.name}/>
               <input type='number' placeholder='Enter Phno' name='phno' onChange={fun} value={data.phno}/>
               <input type='date' name='dob' onChange={fun} value={data.dob}/>
            </div>
            <div onChange={fun}>Gender :
                <input type='radio' name='gen' value='male' checked={data.gen==='male'}/>Male
                <input type='radio' name='gen' value='female' checked={data.gen==='female'}/>female
            </div>
            <div className='rp2'>
               <input type='email' placeholder='Enter E-mail' name='email' onChange={fun} value={data.email}/>
               <input type='file' onChange={fun1}/>
            
            </div>
            <button onClick={reg}>Register</button>
        </div>

    </div>
  )
}

export default Register