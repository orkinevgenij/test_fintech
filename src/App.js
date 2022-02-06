import './App.css'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import s from './Sidebar/Sidebar.module.scss'

const selectedFromLocalStorage = JSON.parse((localStorage.getItem('selectedUsers')) || '[]')

const App = () => {
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

  const addAllUsers = allUsers.map((user) => {
    return <div className={s.card} key={user.id}>
      <div className={s.card_photo}><img src={user.avatar_url} alt=""/></div>
      <div className={`${s.card_login}`}><span>{user.login}</span></div>
      <button className={s.card_btn} style={{ background: '#6B45CF', color: '#fff' }}
              key={user.id}
              onClick={() => addUser(user.id)}>Добавить пользователя
      </button>
      <button style={{ background: 'gray' }} className={s.card_btn} onClick={() => addInfo(user.id)}>Информация</button>
    </div>

  })

  const addSelectedUsers = selectedUsers.map((user) => {
    return <div className={s.card} key={user.id}>
      <div className={s.card_photo}><img src={user.avatar_url} alt=""/></div>
      <div><span>{user.login}</span></div>
      <button className={s.card_btn}
              key={user.id}
              onClick={() => userRemove(user.id)}>Удалить пользователя
      </button>

    </div>
  })

  return (
    <div>
      <Header onChangeSearch={onChangeSearch}/>
      <Main addAllUsers={addAllUsers} addSelectedUsers={addSelectedUsers} userRemAll={userRemAll} userInfo={userInfo}/>
      <Footer/>
    </div>
  )
}

export default App