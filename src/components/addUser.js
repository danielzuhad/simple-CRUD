import React, { useState } from 'react'

export const AddUser = () => {

  const [values, setValues] = useState({
    name:'',
    email:'',
  })

  const handleAddUser = () => {
    setValues({name:'', email:''})
    console.log(values)
  }

  return (
    <div id='AddUser' className='flex flex-col'>
      
      <label>Name</label>
      <input
      className='bg-gray-200 py-2 px-3 border-2 outline-none'
      label="name"
      type='text'
      onChange={(e) => setValues({...values, name: e.target.value})}
      value={values.name}
      placeholder='ur name'
      />
      <label>Email</label>
      <input
      className='bg-gray-200 py-2 px-3 border-2 outline-none'
      label="Email"
      type='text'
      onChange={(e) => setValues({...values, email: e.target.value})}
      value={values.email}
      placeholder='urname@gmail.com'
      />
      
      <button onClick={handleAddUser}>Submit</button>
      
    </div>
  )
}
