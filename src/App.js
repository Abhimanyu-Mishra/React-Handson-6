import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Student from './Components/Student'
import EditStudent from './Components/EditStudent'
import AddStudent from './Components/AddStudent'
import DataContext from './Components/DataContext'

import './App.css'

const App = () => {
  const [data, setdata] = useState([{
    name : 'Abhi',
    age : '22',
    course : 'btech',
    batch : '2018'
  },
  {
    name : 'Ankit',
    age : '22',
    course : 'btech',
    batch : '2018'
  }])
  const navigate = useNavigate();
  const home = () => {
navigate('/')
  }
  const student = () => {
    navigate('/student')
      }
      const contact = () => {
        navigate('/contact')
          }
  return (
    <div>
<div className='navbar'>
  <span onClick={home}>Home</span>
  <span onClick={student}>Student</span>
  <span onClick={contact}>Contact Us</span>

</div>
<div className='route-div'>
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/student' element={
  <DataContext.Provider value={{entries : data, updatefunc : setdata}}>
<Student />
  </DataContext.Provider>
  }/>
  <Route path='/addstudent' element={
  <DataContext.Provider value={{entries : data, updatefunc : setdata}}>
  <AddStudent />
  </DataContext.Provider>
  }/>
  <Route path='/contact' element={<Contact />}/>
 
  <Route path='/editstudent' element={
   <DataContext.Provider value={{entries : data, updatefunc : setdata}}>
  <EditStudent />
  </DataContext.Provider>
}/>
</Routes>
</div>

    </div>
  )
}

export default App
