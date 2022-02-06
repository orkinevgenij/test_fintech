import React from 'react'

const Footer = (props) => {
  const {login}=props
  return (<footer style={{
      background: '#000000',
      fontSize: '20px',
      textAlign: 'center',
      paddingTop: '20px',
      paddingBottom: ' 20px',
      fontWeight: 'bold',
      color: '#FFF'
    }} className="container footer">
      Футер
    </footer>
  )
}

export default Footer