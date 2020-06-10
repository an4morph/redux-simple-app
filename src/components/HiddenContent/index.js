import React from 'react'

const HiddenContent = () => {
    const [active, setActive] = React.useState(false)
    return (
        <div>
            <button onClick={() => setActive(!active)}>
                {active ? 'hide' : 'show'}
            </button>
            {active && <div>this is hidden content</div>}
        </div>
    )
}

export default HiddenContent