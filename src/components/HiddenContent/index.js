import React from 'react'
import { connect } from 'react-redux'
import { toggleHiddenContent } from '../../store/actions'
import { bool, func } from 'prop-types'

const HiddenContent = ( {isShow, toggle} ) => {
    return (
        <div>
            <button
            onClick={toggle}
            type="button"
            >
                { isShow ? 'Hide' : 'Show' }
            </button>
            {
                isShow &&(
                    <div>
                        HiddenContent
                    </div>
                )
            }
        </div>
    )
}

HiddenContent.propTypes = {
    isShow: bool.isRequired,
    toggle: func.isRequired
}

const mapStateToProps = (state) => ({
    isShow: state.btn.isShow
})

const mapDispatchToToProps = (dispatch) => ({
    toggle: () => dispatch(toggleHiddenContent())
})

export default connect(mapStateToProps, mapDispatchToToProps)(HiddenContent)