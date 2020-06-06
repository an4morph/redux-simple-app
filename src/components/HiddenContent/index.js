import React from 'react'

function HiddenContent({show}) {
    if (show) {
        return <div>Скрытый контент</div>
    }
    return <div></div>
}

export default HiddenContent