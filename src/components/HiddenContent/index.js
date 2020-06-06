import React from 'react'
import style from './hidden-content.module.css'
import { connect } from 'react-redux'
import { changeAct } from '../../store/actions'

function HiddenContent({ act, change }) {
  return (
    <div>
      <button
        style={act === 'block' ? { display: 'none' } : { display: 'block' }}
        onClick={() => change('block')}
      >
        show
      </button>

      <button
        style={{ display: act }}
        onClick={() => change('none')}
      >
        hide
      </button>
      <div style={{ display: act }}>
        hidden content
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  act: state.act,
})

const mapDispatchToProps = (dispatch) => ({
  change: (act) => dispatch(changeAct(act)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HiddenContent)
