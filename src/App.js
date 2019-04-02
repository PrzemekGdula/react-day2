import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Calculators from './views/Calculators'

import Home from './views/Home'
import DisplayName from './views/DisplayName/DisplayName'


const App = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Calculators">Calculators</Link>
                    </li>
                </ul>
            </div>
            <Route exact={true} path={'/'} component={Home} />
            <Route path={'/calculators'} component={Calculators} />
            <Route path={'/display-name/:name?'} component={DisplayName} />
        </Router>
    )
}

export default App