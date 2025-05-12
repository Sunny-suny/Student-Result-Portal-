import axios from 'axios'
import React, { useState } from 'react'

const HallTkt = () => {
  let [optn,setOptn]=useState("")
  let [val,setVal]=useState("")
  let [data,setData]=useState("")
  let fun=(e)=>{
    setOptn(e.target.value)
  }
  let fun1=(e)=>{setVal(e.target.value)
  }
  let ght=()=>{
    axios.get(`http://localhost:5000/hal/${optn}/${val}`).then((res)=>{
      // console.log(res.data)
      setData(res.data)
    })
  }
  return (
    <div className='hcon'>
      <h1>..Download HallTicket..</h1>
      <div className='hform'>
        <div>
            <input type='radio' name='optn' value='phno' onChange={fun}/>Phone No.
            <input type='radio' name='optn' value='email' onChange={fun}/>E-mail
        </div>
            <input type='text' onChange={fun1}/>
        <div>
            <button onClick={ght}>Get HallTkt</button>
        </div>
      </div>
      {data!=="" && data.length==0 && <div>Check details</div>}
      {data!=="" && data.length>0 && <div className='card'>
        <img src={`http://localhost:5000/pic/${data[0].photo}`}/>
        <p>Hall Ticket No :{data[0]._id}</p>
        <p>Name :{data[0].name}</p>
      </div>}
    </div>
  )
}

export default HallTkt