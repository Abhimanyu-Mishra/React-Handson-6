import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './AddStudent.css'
import DataContext from './DataContext'

const AddStudent = () => {
  const context = useContext(DataContext);
const navigate = useNavigate()
const goback = () => {
navigate('/student')
}
const [s, sets] = useState({
  name : '',
  age : '',
  course : '',
  batch : ''
})

const studentchange = (e) => {

  
  
  console.log(e.target.value)
  sets({...s,[e.target.name] : e.target.value})
  console.log(s)



}
const submitdata = (e) => {
  e.preventDefault();
  context.updatefunc( (prevObj)=>{
    prevObj.push(s);
    return (prevObj)
  })
console.log(context.entries)
navigate('/student')
}


  return (
    <div>
    <div className='studentaddclass'>
<form >
            <label >Name :</label>
            <br />
            <input type="text" value={s.name} onChange={studentchange} name="name" ></input>
            <br />
            <label>Age :</label>
            <br />
            <input type="text" value={s.age} onChange={studentchange} name="age" ></input>
            <br />
            <label>Course :</label>
            <br />
            <input type="number" value={s.course} onChange={studentchange} name="course" ></input>
            <br />
            <label>Batch :</label>
            <br />
            <input type="number" value={s.batch} onChange={studentchange} name="batch" ></input>
            <br />
            <button onClick={goback} className='button-cancel' >Cancel</button>
            <button onClick={submitdata} className='button-submit' >Submit</button>
          </form>
          </div>
    </div>
  )
  }

export default AddStudent

// // import React, { useContext, useState } from 'react'
// // import { useNavigate } from 'react-router-dom'

// // import './AddStudent.css'
// // import DataContext from './DataContext'

// // const AddStudent = () => {
// //   const context = useContext(DataContext);
// // const navigate = useNavigate()
// // const goback = () => {
// // navigate('/student')
// // }
// // const [obj, setobj] = useState({
// //   name : '',
// //     age : '',
// //     course : '',
// //     batch : ''

// // })


// // const studentchange = (e) => {

  
  
// //   console.log(e.target.value)
// //   setobj({[e.target.name] : e.target.value})
 



// // }
// // const submitdata = (e) => {
// //   e.preventDefault();
// //   context.updatefunc( (prevobj)=>{
// //     prevobj.push(obj)
// //   })
// // console.log(context.entries)
// // navigate('/student')
// // }


// //   return (
// //     <>
// //     <div className='studentaddclass'>
// // <form >
// //             <label >Name :</label>
// //             <br />
// //             <input type="text" onChange={studentchange} name="name" ></input>
// //             <br />
// //             <label>Age :</label>
// //             <br />
// //             <input type="text" onChange={studentchange} name="age" ></input>
// //             <br />
// //             <label>Course :</label>
// //             <br />
// //             <input type="number" onChange={studentchange} name="course" ></input>
// //             <br />
// //             <label>Batch :</label>
// //             <br />
// //             <input type="number" onChange={studentchange} name="batch" ></input>
// //             <br />
// //             <button onClick={goback} className='button-cancel' >Cancel</button>
// //             <span onClick={submitdata} className='button-submit' >Submit</span>
// //           </form>
// //           </div>
// //     </>
// //   )
// // }

// // export default AddStudent