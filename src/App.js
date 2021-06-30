import React, { Components, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Postform} from "./Containers/Postform"
import  Form from  "./Components/Form"
import {NewForm} from "./Components/New";


export const App =()  => {
  return (
    <Router>
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand"to="/">Navbar</Link>
  <button className="navbar-toggler" type="button" 
  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
  aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/NewForm">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Postform">About</Link>
      </li>
      <li className="nav-item dropdown">
        <Link
         className="nav-link" to="/Form">
          Images
        </Link>
      </li>
    </ul>
  </div>
</nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>/
          <Route path="/NewForm">
            <NewForm/>
          </Route>
          <Route path="/Postform">
            <Postform/>
          </Route>
          <Route path="/Form">
            <Form/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


// export const App= () => {
//   const [update , setUpdate] = useState(null)

//   const [dataDetail, setDetail] = useState( [{
//       title: "Console1",
//        id: 1,
//       para: `Browsers will use this whenever a piece of text with the font-family myFirstFont should render
//       This way you can have many @font-face rules for the same font`,
//   }
//   ],)
//   //   pass data to the parent
//    const handleSubmit = (value)=>{
//       setDetail([...dataDetail, value])
//    }
//    const handleupdate=(value)=>{
//        const index = dataDetail.findIndex(item => item.id === value.id)
//        let newArr = [...dataDetail];
//            newArr[index].title = value.title
//            newArr[index].para = value.para
//      setDetail(newArr)
//    }
//   const handleEdit = (value) =>{
//     let [setArray] = dataDetail.filter(item=> item.id === value)
//     setUpdate(setArray)
//   }
//   const handleDelete = (deleteid) =>{
//      let arrayDel = dataDetail.filter(item=> item.id !== deleteid)
//      setDetail(arrayDel)
// }
// return(
// <>
{
  /* <div className="post"> */
}
{
  /* <Postform submit={handleSubmit} update={update} onUpdate={handleupdate}/> */
}
{
  /* <Postcard data={dataDetail} onEdit={handleEdit} onDelete={handleDelete}/> */
}
{
  /* <Form/> */
}
{
  /* <Card/> */
}
{
  /* </div> */
}
// </>
// )
//
