import React, {Component} from 'react';
import Operation from './Operation.js';

class Table extends Component{
    constructor(props){
        super(props);
        this.state = {
            operations : []
        }
    }
    actualizarFilas=(data)=>{
        console.log(data);
        this.setState({operations: data.data})
    }
    apiCall(url,consecuencia){
        fetch(url)
        .then(response=>response.json())
        .then(data=> consecuencia(data))
        .catch(error=>console.log(error))
    }
    componentDidMount(){
        this.apiCall("http://127.0.0.1:3030/operations",this.actualizarFilas);
    }
    render(){

        return(
            <>
            <h2>Últimos movimientos</h2>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Concepto</th>
                    <th scope="col">Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.operations.map((item,i)=><Operation 
                                                key={"operation"+i}
                                                contenido={item}
                                                index={i}/>)}
                    
                </tbody>
                </table>
            </>
        )
    }
}
export default Table;