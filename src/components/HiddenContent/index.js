import React from 'react';
import {connect} from 'react-redux';
import { number, func } from 'prop-types'
import {hiddenContent, changeAge} from '../../store/actions'

function HiddenContentShow ({showBlock, age, change}) {
    return (
        <div>
            <button onClick = {() => change(!showBlock)}>{showBlock ? 'hide' : 'show'}</button>
            {showBlock && age >= 18 ? <div>HiddenContent</div> : null}
        </div>
    )
}

HiddenContentShow.propTypes = {
    age: number,
    change: func,
}
const mapStateToProps = (state) => ({
    showBlock: state.showBlock,
    age: state.age,
})

const mapDispatchToProps = (dispatch) => ({
    change: (showBlock) => dispatch(hiddenContent(showBlock)),
})


export default connect(mapStateToProps, mapDispatchToProps)(HiddenContentShow);