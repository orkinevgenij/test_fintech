import './App.css'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar/Sidebar'

const App = () => {
  const selectedFromLocalStorage = JSON.parse((localStorage.getItem('selectedUsers')) || '[]')

    const [allUsers, setAllUsers] = useState([])
    const [selectedUsers, setSelectedUsers] = useState(selectedFromLocalStorage)
    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
      localStorage.setItem('selectedUsers', JSON.stringify(selectedUsers))
    }, [selectedUsers])

    useEffect(() => {
      const url = 'https://api.github.com/users'
      axios.get(url)
        .then(allUsers => setAllUsers(allUsers.data))
    }, [])

    const onChangeSearch = (e) => {
      if (e.target.value === '') {
        window.location.reload()
        return setAllUsers(allUsers)
      } else if (e.target.value === '') {
        window.location.reload()
        return setSelectedUsers(selectedUsers)
      }
      const searchResult = allUsers.filter(user => user.login.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
        user.id.toString().startsWith(e.target.value.toString()))
      setAllUsers(searchResult)

      const searchSelectedUser = selectedUsers.filter(user => user.login.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
        user.id.toString().startsWith(e.target.value.toString()))
      setSelectedUsers(searchSelectedUser)
    }

    const addUser = (id) => {
      setAllUsers(allUsers.filter(user => user.id !== id))
      setSelectedUsers([...selectedUsers, ...allUsers.filter(user => user.id === id)])
    }

    const addInfo = (id) => {
      setUserInfo([userInfo, ...allUsers.filter(user => user.id === id)])
    }

    const userRemove = (id) => {
      setSelectedUsers(selectedUsers.filter(user => user.id !== id))
    }
    const userRemAll = (id) => {
      setSelectedUsers(selectedUsers.filter(user => user.id === id))
    }

    return (
      <div className="wrapper">
        <Header onChangeSearch={onChangeSearch}/>
        <Main userInfo={userInfo}/>
        <Sidebar allUsers={allUsers} selectedUsers={selectedUsers} userRemAll={userRemAll} userRemove={userRemove}
                 addUser={addUser} addInfo={addInfo}/>
        <Footer/>
      </div>
    )
}
export default App