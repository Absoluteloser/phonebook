import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
interface Person{
  id:number;
  name:string;
  number:string;
}
const App = () => {
  const [persons,setpersons]=useState<Person[]>([])
  useEffect(()=>{
    const initialpersons:Person[]=[
      {id:1,name:'Balaji Nagesh Motkulwar',number:'7498291295'},
      {id:2,name:'Ganesh Nagesh Motkulwar',number:'1323232323'},
      {id:3,name:'Vivek Uttamkumar Jagtap',number:'1323232323'},
    ]
    setpersons(initialpersons)
  },[])
  const addPerson=(newPerson:{id:number,name:string,number:string})=>{
    const newpersonwithId={...newPerson,id:persons.length+1}
    setpersons(persons.concat(newpersonwithId))
  }
  const deletePerson=(id:number)=>{
    const newarr=persons.filter((person)=>person.id!=id)
    setpersons(newarr)
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <PersonForm addPerson={addPerson}/>
      <h2>Data Of the users displayed here:</h2>
      <Persons persons={persons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App