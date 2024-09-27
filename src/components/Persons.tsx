import React from 'react'
interface Person{
  id:number;
  name:string;
  number:string;
}
const Persons:React.FC<{persons:Person[],deletePerson:(id:number)=>void}> = ({persons,deletePerson}) => {
  return (
    <div>
      <ul>
        {
          persons.map((person)=>{
            return (
              <li key={person.id}>
                {person.name} {person.number}
                <button onClick={()=>deletePerson(person.id)}>Delete the user</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
export default Persons