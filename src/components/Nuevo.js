import React, {Component} from 'react';

class Nuevo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="Nuevo">
                <h1>Nuevo {this.props.type}</h1>
            </div>
        )
    }
}
export default Nuevo;