import React from "react";


 {/* {persons.map(person => <Person key ={person.id} person ={person}/>)} */}
const Person = ({persons,filter,handleDelete}) =>{
   
    return (
        <div className='input'>
            {persons.filter(person=> 
                person.name.toLowerCase().includes(filter.toLowerCase())).map(
                    perName =>
                    <div key={perName.id}>{perName.name} {perName.number} <button onClick={()=>handleDelete(perName.id,perName.name)}>Delete</button></div> )}
           
        </div>
        )
}




export default Person;