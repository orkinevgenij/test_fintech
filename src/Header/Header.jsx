import React from 'react'
import s from './Header.module.scss'

const Header = (props) => {
  const { onChangeSearch } = props
  return (<header className="header">
      <h1>Тестовое задание, Hello :)</h1>
      <form className={s.form} id="search" action="">
        <label htmlFor="search">Найти пользователя: </label>
        <input type="text"
               placeholder="Введите login или id" onChange={onChangeSearch}/>
      </form>

    </header>
  )
}

export default Header