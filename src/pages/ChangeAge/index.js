import React from 'react'
import { connect } from 'react-redux'
import { func, number } from 'prop-types'
import { changeAge } from '../../store/actions'
import PageTemplate from '../../components/PageTemplate'
import HiddenContent from '../../components/HiddenContent'

function ChangeAgePage({ age, change }) {
  return (
    <PageTemplate>
      <div>Your age:</div>
      <input
        value={age.toString()}
        type="number"
        onChange={(e) => change(Number(e.target.value))}
      />
      <HiddenContent />
    </PageTemplate>
  )
}

ChangeAgePage.propTypes = {
  age: number,
  change: func,
}

const mapStateToProps = (state) => ({
  age: state.age,
})

const mapDispatchToProps = (dispatch) => ({
  change: (age) => dispatch(changeAge(age)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeAgePage)
