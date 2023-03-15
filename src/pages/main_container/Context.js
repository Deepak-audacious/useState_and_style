import React, { useState } from 'react'
import style from './style.module.css'
const Context = () => {
  const [firstname,setFirstName] = useState("")
  const [lastname,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] =useState("")



  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(`${firstname}  ${lastname}  ${email}  ${password}`)
  }
  return (
    <>
      <div className={style.Registration}>
          <form onSubmit={handleSubmit}>
          <lable className={style.label}>FirstName</lable>
          <input type="text"
          value={firstname}
          className={style.input}
          onChange={(e)=>setFirstName(e.target.value)}/>
          <br />




          <lable className={style.label}>LastName</lable>
          <input type="text"
          value={lastname}
          className={style.input}
          onChange={(e)=>setLastName(e.target.value)}/>
          <br />





          <lable className={style.label}>Email</lable>
          <input type="text"
          value={email}
          className={style.input}
          onChange={(e)=>setEmail(e.target.value)}/>
          <br />






          <lable className={style.label}>Password</lable>
          <input type="text"
          value={password}
          className={style.input}
          onChange={(e)=>setPassword(e.target.value)}/>
          <br />
            <button type="submit" className={style.button}>Submit</button>
          </form>
          
      </div>
    </>
  )
}

export default Context
