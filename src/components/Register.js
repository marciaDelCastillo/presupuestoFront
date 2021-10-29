import React, {Component} from 'react';

class Register extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="register">
                <h1>¡Creá tu cuenta!</h1>
                <div className="contenedor">
                    <div className="portada">
                        <div className="dibujo"></div>
                        <p>¿No tenés cuenta? Registrate y descubrí Home Experience</p>
                    </div>

                    <div className="formulario">
                        <form id="form-register" action="/usuarios/registro" method="POST">
                            <span id="error-vacio" className="text-danger"></span>

                            <input className="dato" type="text" name="name" id="name"  placeholder="Nombre" />
                            <span className="text-danger" id="error-name"></span> <br/>

                            <input className="dato" type="email" name="email" id="email"   placeholder="Email" /> 
                            <span className="text-danger" id="error-email"></span>
                            
                            <input className="dato" type="date" name="fecha_nac" id="fecha_nac"   placeholder="fecha_nac" />
                            <span className="text-danger" id="error-date"></span>

                            
                            <input className="dato" type="password" name="password" id="password" placeholder="Contraseña" />  
                            <span className="text-danger" id="error-password"></span>

                            <input className="dato" type="password" name="password2" id="password2"  placeholder="Confirma tu contraseña"/>
                            <span className="text-danger" id="error-password2"></span>

                            <label>
                                <input className="check" type="checkbox" id="checkbox"   name="acepto"/> Acepto los términos y condiciones de este sitio web
                            </label>
                            <span className="text-danger" id="error-acepta"></span>
                            
                            <a href="/usuarios/iniciar-sesion">¿Ya tenés cuenta? ¡Iniciá sesión!</a>
                            <button type="submit">REGISTRATE</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Register;