import React, { useState, useEffect} from 'react'

// to get the data from local Storage
const getLocalItem =()=>{
    let data = localStorage.getItem("data")
    console.log(data);

}
 export const Card =()=> {
    const {update} = ("")
    const [list,setEvent] = useState("")
    // input is store in ampty Array
    const [items,setItems] = useState(getLocalItem())
    const [indexName, setIndexName] = useState("")

    const itemEvent =(event)=>{
        // input update is add here
        // when it update then list will b changed
        setEvent(event.target.value);
    }
    const itemlist =()=>{
        // access list in array(old data include)
            setItems([...items, list]);
            setEvent(""); 
    }
   const deleteItems =(del)=>{
       let arrDel = items.filter(item => item !== del)
       setItems(arrDel); 
   }
   const onEdit =(value)=>{
        setIndexName(value)
       let [arr] = items.filter(item => item === value)

    setEvent(arr)
    // console.log(arr)
   }
   console.log(indexName,items,"list")
   
const onUpdate=()=>{
           const index = items.findIndex(item => item === indexName)
           let newArr = [...items];
              newArr[index] = list
         setItems(newArr)
        //  through function input will be empty or clear
         setEvent("");
       }
        // add data in local Storage using hooks(Using useEffect) 
    //    (when item value is changed)
    useEffect(()=>{
        if(update){
            setIndexName("")
            setItems("")
        }
     },[update])
    return (
        <div>
            <h1>Todo List</h1>
            <input type= "text"  value={list} placeholder ="write something"  onChange={itemEvent}/>
             <button onClick={itemlist}>Login</button>
             <button onClick={onUpdate}>Update</button>
            <ul>
             {/* through map method one by one data is add in Array(items) */}
               {items.map(item =>{
                   return (
                       <li>
                        {item}
                    <button onClick={()=>deleteItems(item)}>X</button>
                    <button onClick={()=>onEdit(item)}>Edit</button>
                    </li>
                   )
               })
}
            </ul>
        </div>
    )
}
