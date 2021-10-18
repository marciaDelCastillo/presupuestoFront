import React, {Component} from 'react';

class Operation extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let operation = this.props.contenido;
        return(
            <>
                    <tr>
                    <th scope="row">{this.props.index}</th>
                    <td>{operation.type.name}</td>
                    <td>{operation.category.name}</td>
                    <td>{operation.date}</td>
                    <td>{operation.concept}</td>
                    <td>{operation.amount}</td>
                    </tr>
            </>
        )
    }
}
export default Operation;