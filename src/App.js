// import React from "react"
import React, { useState } from "react"
import {Postform} from "./Containers/Postform"
import {Postcard} from "./Containers/Postcard"

export const App= () => {
  const [update , setUpdate] = useState(null)
  
  const [dataDetail, setDetail] = useState( [{
      title: "Console1",
       id: 1,
      para: `Browsers will use this whenever a piece of text with the font-family myFirstFont should render
      This way you can have many @font-face rules for the same font`,
  }
  ],)
  //   pass data to the parent
   const handleSubmit = (value)=>{
      setDetail([...dataDetail, value])
   }
   const handleupdate=(value)=>{
       const index = dataDetail.findIndex(item => item.id === value.id)
       let newArr = [...dataDetail];
           newArr[index].title = value.title
           newArr[index].para = value.para
     setDetail(newArr)
   }
  const handleEdit = (value) =>{
    let [setArray] = dataDetail.filter(item=> item.id === value)
    setUpdate(setArray)
  }
  const handleDelete = (deleteid) =>{
     let arrayDel = dataDetail.filter(item=> item.id !== deleteid)
     setDetail(arrayDel)
}
      return(
          <>
          <div className="post">
              <Postform submit={handleSubmit} update={update} onUpdate={handleupdate}/>
              <Postcard data={dataDetail} onEdit={handleEdit} onDelete={handleDelete}/>
          </div>
          </>
      )
  }

export default App;
;