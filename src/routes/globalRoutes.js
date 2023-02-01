import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddUser } from '../components/addUser'
import { UserList } from '../components/userList'

export default function GlobalRoutes() {
  return (
    <Routes>
        <Route path='/' element={<UserList/>}/>
        <Route path='/AddUser' element={<AddUser/>}/>
    </Routes>
  )
}
