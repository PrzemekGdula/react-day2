import React from 'react'

import Drawer from '@material-ui/core/Drawer'

const SideBar = (props) => (
    <div>
        <Drawer
            open={true}
            onClose={()=> console.log('TOGGLE')}

        >
        </Drawer>
    </div>
)

export default SideBar