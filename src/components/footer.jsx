import React from 'react'

function footer() {
    const year=new Date().getFullYear()
  return (
    <div className='footer'><p>Copyright © {year}</p></div>
  )
}

export default footer