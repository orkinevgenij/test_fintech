import s from './Sidebar.module.scss'

const Sidebar = (props) => {
  const { addAllUsers, addSelectedUsers, userRemAll } = props

  return (<aside className="col col__aside">
    <form action="">
      <label htmlFor="search_users">Поиск пользователя:</label>
    </form>
    <h3 style={{ color: '#fff', background: '#6B45CF', borderRadius: '10px' }}>Все пользователи</h3>
    <div className={s.all_users}>
      {addAllUsers}
    </div>
    <div>
      <h3 style={{ color: '#fff', backgroundColor: '#6B45CF', borderRadius: '10px' }}> Выбранные пользователи
      </h3>
      {addSelectedUsers.length > 0 ? <button onClick={userRemAll} style={{ background: 'black' }}
                                          className={s.card_btn}>Очистить список</button> : null}
      <div className={s.all_users}>
        {addSelectedUsers}
      </div>

    </div>
  </aside>)
}

export default Sidebar