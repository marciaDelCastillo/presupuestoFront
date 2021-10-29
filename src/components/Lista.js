import React, {Component} from 'react';

class Lista extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="Lista">
                <h1>Lista de {this.props.type}</h1>
            </div>
        )
    }
}
export default Lista;