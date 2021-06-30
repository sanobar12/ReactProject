import React, { useEffect } from 'react'
import "./../index.css"

const Form = () => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation();
    const submit = {
      email: email,
      password: password
    }
    localStorage.setItem('user-info', JSON.stringify(submit))
}
let getData = localStorage.getItem('user-info')
const get = ()=>{
  console.log(getData);
  if(getData){
    let data = JSON.parse(getData)
    return data
  }
}

useEffect(()=>{
    console.log(getData, "infoooo")
},[getData])

console.log(get(), "info")
    return (
        <>
        <h2>Sign In</h2>
        <form className="form" >
         <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp"  value={email} onChange={((e) =>  setEmail(e.target.value))}/>
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
       </div>
      <div className="form-group">
    <label for="exampleInputPassword1">Passwrd</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password}  onChange={(e)=> setPassword(e.target.value)}/>
      </div>
      <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Keep me Signed in</label>
     </div>
    <button onClick={(e) =>  handleSubmit(e)}  className="btn btn-primary">Sign In</button>
    </form>
        </>
    )
}

export default Form;
