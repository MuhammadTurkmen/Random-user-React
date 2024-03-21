import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'
function App() {
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState(null)
  const [title, setTitle] = useState('name')
  const [value, setValue] = useState('random person')
  
  
  const handleValue = (e) => {

  }
  
  return <main>
    <div className="block bcg-black"></div>
    <div className="block">
      <div className="container">
        <img src={(person && person.image) || defaultImage} alt="random user" className='user-img' />
        <p className="user-title">my {title} is</p>
        <p className='user-value'>{value}</p>
        <div className="values-list">
          <button className='icon' data-label='name' onMouseOver={handleValue}><FaUser /></button>
          <button className='icon' data-label='email' onMouseOver={handleValue}><FaEnvelopeOpen /></button>
          <button className='icon' data-label='age' onMouseOver={handleValue}><FaCalendarTimes /></button>
          <button className='icon' data-label='name' onMouseOver={handleValue}><FaUser /></button>
          <button className='icon' data-label='name' onMouseOver={handleValue}><FaUser /></button>
          <button className='icon' data-label='name' onMouseOver={handleValue}><FaUser /></button>
        </div>
      </div>
    </div>
  </main>
}

export default App
