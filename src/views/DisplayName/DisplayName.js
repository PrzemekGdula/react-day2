import React from 'react'

const DisplayName = (props) => (
    <div>
        {props.match.params.name}
    </div>
)

export default DisplayName