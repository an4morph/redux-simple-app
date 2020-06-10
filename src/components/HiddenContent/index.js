import React from 'react'
import { connect } from 'react-redux'
import { bool, func } from 'prop-types'
import styles from './hidden.module.css'
import { toggleHiddenContent } from '../../store/actions'

function HiddenContent({ isShow, toggle }) {
  return (
    <div>
      <button
        onClick={toggle}
        type="button"
      >
        { isShow ? 'Hide' : 'Show' }
      </button>
      {
        isShow && (
          <div className={styles.hidden}>
            Hiden content
          </div>
        )
      }
    </div>
  )
}

HiddenContent.propTypes = {
  isShow: bool.isRequired,
  toggle: func.isRequired,
}

const mapStateToProps = (state) => ({
  isShow: state.isShow,
})

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(toggleHiddenContent()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HiddenContent)
