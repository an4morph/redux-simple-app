import React from 'react'
import { node } from 'prop-types'
import Nav from '../Nav'
import Info from '../Info'
import HiddenContent from '../HiddenContent'

function PageTemplate({ children }) {
  return (
    <div className="page">
      <Nav />
      <Info />
      {children}
      <HiddenContent />
    </div>
    
  )
}

PageTemplate.propTypes = {
  children: node.isRequired,
}

export default PageTemplate
