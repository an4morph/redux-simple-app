import React, {useState} from 'react'
import { node } from 'prop-types'

const HiddenContent = () => {
    сonst [showBlock, setBlock] = useState(false);
return (
    <div>
        <button onClick = {() => setBlock(!showBlock)}>{showBlock ? 'hide' : 'show'}</button>
        {showBlock && <div>HiddenContent</div>}
    </div>
)
}



export default HiddenContent
