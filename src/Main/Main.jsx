import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

const Main = (props) => {
  const { addAllUsers, addSelectedUsers, userRemAll, userInfo } = props
  return (<main className="container main">
      <div className="row">
        <article className="col col__article">

          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap:"wrap"}}>
            <div>
              <img
                src="https://www.monobank.com.ua/resources/1.0.16.1-1643818182000/img/main/home-main-iphone-uk.webp"
                alt="credit_100000"/>
            </div>
            <div>
              <h4>Дополнительная информация о пользователе:</h4>
              {userInfo.map((info, index) => {
                return <div key={index} style={{ fontSize: '18px' }}>
                  <p>{info.login}</p>
                  <p>{info.id}</p>
                  <p>{info.node_id}</p>
                  <p>{info.avatar_url}</p>
                  <p>{info.url}</p>
                </div>
              })}
            </div>
          </div>
        </article>
        <Sidebar addAllUsers={addAllUsers} addSelectedUsers={addSelectedUsers} userRemAll={userRemAll}/>
      </div>
    </main>
  )
}

export default Main