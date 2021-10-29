import React, {Component} from 'react';
import Table from "./Table.js";

class Balance extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="App">
                <h1>Presupuesto personal</h1>
                    <Table />
            </div>
        )
    }
}
export default Balance;