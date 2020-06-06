import React from 'react'
import { node } from 'prop-types'
import Nav from '../Nav'
import Info from '../Info'
import HiddenContent from '../HiddenContent'

function PageTemplate({ children }) {
  const [state, setBtn ] = React.useState(true)
  const text = state ? 'Show' : 'Hide'
  return (
    <div className="page">
      <Nav />
      <Info />
      {children}
      <button onClick={() => setBtn(state ? false : true)}>{text}</button>
      <HiddenContent show={state}/>
    </div>
  )
}

PageTemplate.propTypes = {
  children: node.isRequired,
}

export default PageTemplate
