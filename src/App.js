import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Calculators from './views/Calculators'

import Home from './views/Home'
import DisplayName from './views/DisplayName/DisplayName'
import MUIPlayground from './views/MUIplaygroung/MUIplaygroung'
import Navigation from './views/Navigation/Navigation'


const App = () => {
    return (
        <Router>
            <Navigation />
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Calculators">Calculators</Link>
                    </li>
                    <li>
                        <Link to="/mui">MUI Playground</Link>
                    </li>
                </ul>
            </div>
            <Route exact={true} path={'/'} component={Home} />
            <Route path={'/calculators'} component={Calculators} />
            <Route path={'/display-name/:name?'} component={DisplayName} />
            <Route path={'/mui'} component={MUIPlayground} />
        </Router>
    )
}

export default App