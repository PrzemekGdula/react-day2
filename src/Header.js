import React from 'react'
import Name from './Name'

const Header = (props) => (
    <div>
        Nazywam sie

        <Name
            name={props.firstName + ' ' + props.lastName}
        />
        <Name
            name={'Ala'}
        />
    </div>
)


export default Header