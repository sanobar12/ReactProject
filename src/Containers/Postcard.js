import React from 'react'
import "./../App.css"

export const Postcard = (props) => {
    
    return (
        <div className="card">
            {props.data?.map((item, index) => {
                return(
                    <div key={index} className="head1">
                    <h2>{item.title}</h2>
                    <p>{item.para}</p>
                    <button onClick={() => props.onEdit(item.id)}>Edit</button>
                    <button onClick={() => props.onDelete(item.id)}>Delete</button>
                </div>
                )
            }) 
        }
        </div>
    )
}
