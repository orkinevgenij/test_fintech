import React from 'react'
import s from './Sidebar.module.scss'

const Sidebar = (props) => {
  const { allUsers, selectedUsers, userRemAll, userRemove, addUser, addInfo } = props

  return (<aside className={s.sidebar}>
    <h3 style={{ color: '#fff', background: '#6B45CF', borderRadius: '10px' }}>Все пользователи</h3>
    <div className={s.allUsers}>
      {allUsers.map((user) => {
        return <div className={s.card} key={user.id}>
          <div className={s.card_photo}><img src={user.avatar_url} alt=""/></div>
          <div className={s.card_login}><span>{user.login}</span></div>
          <button className={s.card_btn} style={{ background: '#6B45CF', color: '#fff' }}
                  key={user.id}
                  onClick={() => addUser(user.id)}>Добавить пользователя
          </button>
          <button style={{ background: 'gray' }} className={s.card_btn} onClick={() => addInfo(user.id)}>Информация
          </button>
        </div>
      })}
    </div>
    <div>
      <h3 style={{ color: '#fff', backgroundColor: '#6B45CF', borderRadius: '10px' }}> Выбранные пользователи
      </h3>
      {selectedUsers.length > 0 ? <button onClick={userRemAll} style={{ background: 'black' }}
                                          className={s.card_btn}>Очистить список</button> : null}
      <div className={s.selectedUsers}>
        {selectedUsers.map((user) => {
          return <div className={s.card} key={user.id}>
            <div className={s.card_photo}><img src={user.avatar_url} alt=""/></div>
            <div><span>{user.login}</span></div>
            <button className={s.card_btn}
                    key={user.id}
                    onClick={() => userRemove(user.id)}>Удалить пользователя
            </button>

          </div>
        })
        }
      </div>

    </div>


  </aside>)
}

export default Sidebar