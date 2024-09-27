import { ChangeEvent, FormEvent, useState } from 'react'
interface PersonFormProps{
  addPerson:(person:{id:number,name:string,number:string})=>void
}
const PersonForm:React.FC<PersonFormProps> = ({addPerson}) => {
  const [name,setname]=useState('')
  const [number,setnumber]=useState('')
  const handleSubmit=(event:FormEvent)=>{
    event.preventDefault()
    addPerson({id:Math.random()*1000,name,number})
    setname('')
    setnumber('')
  }
  const handleChangename=(event:ChangeEvent)=>{
    setname((event.target as HTMLInputElement).value)
  }
  const handleChangenumber=(event:ChangeEvent)=>{
    setnumber((event.target as HTMLInputElement).value)
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          Name:<input value={name} onChange={handleChangename}/>
        </div>
        <div>
          Number:<input value={number} onChange={handleChangenumber}></input>
        </div>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default PersonForm