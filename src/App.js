
import React, { useState,useEffect} from 'react';
import Filter from './components/Filter';
import Person from './components/Person';
import PersonForm from "./components/PersonForm";
import personService from "./services/persons"
import Notification from './components/Notification';
const App = () => {
  
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter,setFilter] = useState('')
  const [message,setMessage] = useState('') 
  const [showMsg,setShowMsg] = useState(false)
  
  const handleFiter =(e) =>{
      setFilter(e.target.value)  
  }
  useEffect(()=>{
    console.log("effect")
    
    personService
      .getAll()
      .then(initialPerson =>{
        setPersons(initialPerson)
      })
      .catch(error => {
          console.log('fail')
      })

  },[])
  console.log('render', persons.length, 'persons')


  const handleSubmit = (e) => {
      e.preventDefault()
      const personObject ={
          name : newName,
          number: newNumber,
          
      }
      const personFinder = persons.find(person => person.name == newName)
     
      if(typeof personFinder !== 'undefined' ){
        const result = window.confirm(`${newName} is already added in phonebook, replace with new phone number?`)
        if(result){
           const changePerson = {...personFinder, number: newNumber} 
           personService
              .update(personFinder.id, changePerson)
                .then(returnedPerson => console.log(returnedPerson))
           window.location.reload(false)     
        }
      } 
      else{
         personService
          .create(personObject)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))

         setMessage(`Added ${newName}`)
         
         setShowMsg(true)
         
        
         setNewName('')

         setNewNumber('')
          
        })
      }  
      
    }
      
  

  const handleNameChange = (e) =>{
      setNewName(e.target.value)
  }
  const handleNumberChange = (e) =>{
    setNewNumber(e.target.value)
  }
  const handleDelete =(deleteId,deleteName,e) =>{
      
      const result = window.confirm(`Delete ${deleteName}?`);
      if(result){
        personService
        .deleteObj(deleteId)
        window.alert("Deleted successfully")
        window.location.reload(false)   
      }
      
  }
  // const handleMessage =() =>{
  //   setTimeout(()=><Notification msg={message}/>,5000)
  // }


  return (
    <div>
      <h1>Phonebook</h1>

      {showMsg ? <Notification msg={message}/> :""}
      
      <Filter handleFiter={handleFiter}/>
      
      <h2>Add a New</h2>

      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange} handleSubmit={handleSubmit}/>
      
      <h2>Numbers</h2>
      <div >
        <Person persons ={persons} filter={filter} handleDelete={handleDelete}/>
          
      </div>
      
    </div>
  )
}

export default App