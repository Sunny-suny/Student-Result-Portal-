import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Edit = () => {
    let obj=useContext(Ct)

    let [data,setData]=useState({"dob":"",...obj.store.std})

    let navigate=useNavigate()
    useEffect(()=>{
        if(obj.store.token=="")
        {
            navigate("/login")
        }
    })

    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    let upd=()=>{
        axios.put("http://localhost:5000/upd",data,{"headers":{"Authorization":obj.store.token}}).then((res)=>{
            // setData(res.data)
            navigate("/disp")
        })
    }
  return (
    <div className='edcon'>
        <div className='edform'>
            <h1>..Update Student Data..</h1>
        <div className='ep1'>
            <input type='text' placeholder='Hno' value={data._id} readOnly/>
            <input type='text' placeholder='Enter Name' name='name' onChange={fun} value={data.name}/>
            <input type='number' placeholder='Enter Phno' name='phno' onChange={fun} value={data.phno}/>
            <input type='date' name='dob' onChange={fun} value={data.dob.slice(0,10)}/>
            </div>
            <div onChange={fun}>Gender :
                <input type='radio' name='gen' value='male' checked={data.gen==='male'}/>Male
                <input type='radio' name='gen' value='female' checked={data.gen==='female'}/>female
            </div>
            <div className='ep2'>
            <input type='email' placeholder='Enter E-mail' name='email' onChange={fun} value={data.email}/>
            <input type='text' placeholder='Telugu'name='tel' onChange={fun} value={data.tel}/>
            <input type='text' placeholder='Hindi' name='hn' onChange={fun} value={data.hn}/>
            <input type='text' placeholder='English' name='eg' onChange={fun} value={data.eg}/>
            <input type='text' placeholder='Maths' name='m' onChange={fun} value={data.m}/>
            <input type='text' placeholder='Science' name='s' onChange={fun} value={data.s}/>
            <input type='text' placeholder='Social' name='sc'  onChange={fun} value={data.sc}/>
            </div>
            <button onClick={upd}>Update</button>
        </div>
    </div>
  )
}

export default Edit