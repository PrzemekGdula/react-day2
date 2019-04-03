import React from 'react'

import Paper from '@material-ui/core/Paper'

const PaperRefined = (props) => {
    let childrenTorender = null

    if (props.doNotDisplayChildren) {
        childrenTorender = null
    } else {
        childrenTorender = props.children
    }

    return (
        <Paper
            style={{
                margin: '20px',
                padding: '20px',
            }}
        >
            {childrenTorender}
        </Paper>
    )
}

export default PaperRefined