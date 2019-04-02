import React from 'react'
import Add from './Add';
import Multiply from './Multiply';
import Divide from './Divide'
import Substract from './Substract'

const operations = [
    Add,
    Divide,
    Multiply,
    Substract
]

const Calculator = (props) => (
    <div>
        <p>
            Liczby to: {props.a} i {props.b}
        </p>
        {
            operations.map(
                Component => (
                    <Component
                        a={props.a}
                        b={props.b}
                    />
                )
            )
        }

    </div>
)

export default Calculator