import React from 'react'
import style from './hidden-content.module.css'
import { connect } from 'react-redux'
import { changeAct } from '../../store/actions'

function HiddenContent({ act, change, age }) {
  console.log(act)
  return (
    <div>
      <button
        style={
          age >= 18 ?
            act === 'block' ?
              { display: 'none' } :
              { display: 'block' } :
            { display: 'block' }}
        onClick={() => {
          if ( age < 18 ) alert('Вам нет 18!')
          return change('block')
        }}
      >
        show
      </button>

      <button
        style={age >= 18 ? { display: act } : { display: 'none' }}
        onClick={() => {
          if (age < 18) alert('Вам нет 18!')
          return change('none')
        }}
      >
        hide
      </button>
      <div style={age >= 18 ? { display: act } : { display: 'none' }}>
        hidden content
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  act: state.act,
  age: state.age
})

const mapDispatchToProps = (dispatch) => ({
  change: (act) => dispatch(changeAct(act)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HiddenContent)
