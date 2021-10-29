import React, {Component} from 'react';

class Intro extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="contenedor-principal" className="App">
                <img></img>
                <h1>Tu Presupuesto</h1>
                <h3>Bienvenido/a al sitio</h3>
                <h2>Aquí usted podrá:</h2>
                {/* carrousel informativo */}
                <div>
                <p src="..." className="d-block w-100" alt="...">Crear su presupuesto personal totalmente personalizado.</p>
                <p src="..." className="d-block w-100" alt="...">Registrar sus movimientos de ingresos y gastos cada vez que se presenten.</p>
                <p src="..." className="d-block w-100" alt="...">Comparar sus balances mes a mes</p>
                <p src="..." className="d-block w-100" alt="...">Acceder a su información de forma clara y concisa y desde cualquier dispositivo</p>
                
                </div>
                {/* botones de accion */}
                <div className="d-grid gap-2 col-6 mx-auto">
                <button id="app-btnRegister" /* onClick={()=>App.abrirPrograma()} */ className="btn btn-primary" type="button">Registrate</button><br/>
                <button id="app-btnLogin" className="btn btn-primary" type="button">Iniciá sesión</button><br/>
                <button id="app-btnRegistra" className="btn btn-primary" type="button">Explorá el sitio</button>
                </div>
            </div>
        )
    }
}
export default Intro;