import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BottonBar extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="BottonBar">
                <nav>
                    <ul>
                        <li><Link to="/balance">Presupuesto</Link></li>
                        <li><Link to="/ingresos">Ingresos</Link></li>
                        <li><Link to="/gastos">Gastos</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default BottonBar;