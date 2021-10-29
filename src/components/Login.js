import React, {Component} from 'react';

class Login extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="login">
                <h1>¡Iniciá Sesión!</h1>
        
                <form id="form-login" action="" method="POST">
                    <div className="form-floating mb-3">

                        <input type="email" className="form-control" id="floatingInput" name="email"  placeholder="Correo electrónico"/>
                        <span id="error-mail" className="text-danger"></span>

                        
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Contraseña"/>
                        <span id="error-password" className="text-danger"></span>

                        <div className="conectado">
                            <input type="checkbox" name="check" value="check" id="check"/>
                            <label for="check">Manteneme conectado</label>
                        </div>

                        <button type="submit" className="boton">ingresá</button>
                    </div>
                </form>

        <a href="/usuarios/registro" className="creacuenta">¿No tenés cuenta? ¡Creá una ahora!</a>

            </div>
        )
    }
}
export default Login;