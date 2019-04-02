import React from 'react'

import Drawer from '@material-ui/core/Drawer'

const styles = {
    drawer: {
        width: 200
    }
}

const SideBar = (props) => (
    <div>
        <Drawer
            open={false}
            onClose={()=> console.log('TOGGLE')}
        >
        <div
            style={styles.drawer}
        >
        </div>
        </Drawer>
    </div>
)

export default SideBar