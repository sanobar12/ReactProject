import React, { useEffect, useState } from "react";
import "./../App.css";

export const Postform = (props) => {
    const {update} = props
    const [name, setName] = useState("")
    const [textname, setTextname] = useState("")

    const formsubmit=(e)=> {
        e.preventDefault()
        const datavalue = {
            title: name, 
            para: textname,
            id: Math.random()
        }
        props.submit(datavalue)
        setTextname("")
        setName("")
    }
    const formupdate=(e)=>{
        e.preventDefault()
        const data ={
            title:name,
            para:textname,
            id: update.id
        }
        props.onUpdate(data)
        setTextname("")
        setName("")
    }
     useEffect(()=>{
        if(update){
            setTextname(update.para)
            setName(update.title)
        }
     },[update])
    return(
        <>
        <form  className="postform">
        <div className="form">
      <label>Name</label>
      <input type="text" value={name} placeholder="Please enter your name" onChange={(e) => setName(e.target.value)}/>
      <label>Description</label>
      <textarea rows="4" value={textname} cols="30" onChange={(e) => setTextname(e.target.value)}></textarea>
      <div className="btn">
        <button onClick={(e)=> formupdate(e)}>Update</button>
        <button onClick={(e)=> formsubmit(e)}>Submit</button>
      </div>
      </div>
    </form>
    </>
    )
}