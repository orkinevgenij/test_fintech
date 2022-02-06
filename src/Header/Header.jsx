import React from 'react'

const Header = (props) => {
  const { onChangeSearch } = props
  return (<header className="container header">
      <div
        style={{
          fontSize: '20px',
          paddingTop: '30px',
          paddingBottom: '30px',
          fontWeight: 'bold'
        }}>
        <h1>Тестовое задание, Hello :)</h1>
        <form id="search" style={{ textAlign: 'center' }} action="">
          <label htmlFor="search">Найти пользователя: </label>

          <input style={{ borderRadius: '50px', padding: '10px', fontSize: '20px' }} type="text"
                 placeholder="Введите login или id" onChange={onChangeSearch}/>
        </form>


      </div>
    </header>
  )
}

export default Header