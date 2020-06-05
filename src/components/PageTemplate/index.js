import React from 'react'
import { node } from 'prop-types'
import Nav from '../Nav'
import Info from '../Info'

function PageTemplate({ children }) {
  const display = true
  const handleClick = (event) => {

  }

  return (
    <div>
      <Nav/>
      <Info/>
      {children}
    </div>
  )
}

PageTemplate.propTypes = {
  children: node.isRequired,
}

export default PageTemplate
