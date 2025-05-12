import axios from 'axios'
import React, { useState } from 'react'

const Home = () => {
  let [hno,setHno]=useState("")
  let [data,setData]=useState({})
  let fun=(e)=>{
    setHno(e.target.value)
  }
  let getrslt=()=>{
    axios.get(`http://localhost:5000/res/${hno}`).then((res)=>{
      setData(res.data)
      setHno("")
    })
  }
  return (
    <div className='hmcon'>
       <h1>..Get Results..</h1>
      <div className='hmform'>
        {!data && <div className='err'>Check Details!</div>}
        <input type='text' placeholder='Enter hno' onChange={fun}/>
        <button onClick={getrslt}>Results</button>
      </div>
      {data && "_id" in data &&
        <table>
        <tr><th>HallTicket</th><td>{data._id}</td></tr>
        <tr><th>Photo</th><td>{<img src={`http://localhost:5000/pic/${data.photo}`}/>}</td></tr>
        <tr><th>Name</th><td>{data.name}</td></tr>
        <tr><th>DOB</th><td>{data.dob}</td></tr>
        <tr><th>Phone No.</th><td>{data.phno}</td></tr>
        <tr><th>E-mail</th><td>{data.email}</td></tr>
        <tr><th>Telugu</th><td>{data.tel}</td></tr>
        <tr><th>Hindi</th><td>{data.hn}</td></tr>
        <tr><th>English</th><td>{data.eg}</td></tr>
        <tr><th>Maths</th><td>{data.m}</td></tr>
        <tr><th>Science</th><td>{data.s}</td></tr>
        <tr><th>Social</th><td>{data.sc}</td></tr>
        <tr><th>Total</th><td>{data.tel+data.hn+data.eg+data.m+data.s+data.sc}</td></tr>
        </table>
      }

    </div>
  )
}

export default Home