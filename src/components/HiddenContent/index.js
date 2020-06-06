import React from 'react';
import {connect} from 'react-redux';
import { Boolean, func } from 'prop-types'
import {hiddenContent} from '../../store/actions'

function HiddenContentShow ({showBlock, change}) {
    // const [showBlock, setBlock] = React.useState(false)
    return (
        <div>
            <button onClick = {() => change(!showBlock)}>{showBlock ? 'hide' : 'show'}</button>
            {showBlock && <div>HiddenContent</div>}
        </div>
    )
}

HiddenContentShow.propTypes = {
    showBlock: Boolean,
    change: func
}
const mapStateToProps = (state) => ({
    showBlock: state.showBlock
})

const mapDispatchToProps = (dispatch) => ({
    change: (showBlock) => dispatch(hiddenContent(showBlock))
})
export default connect(mapStateToProps, mapDispatchToProps)(HiddenContentShow);