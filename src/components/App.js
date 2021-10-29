import '../App.css';
import Balance from './Balance.js';
import Intro from './Intro.js';
import Login from './Login.js';
import Register from './Register.js';
import Ingresos from './Ingresos.js';
import Gastos from './Gastos.js';
import Nuevo from './Nuevo.js';
import Lista from './Lista.js';
import Error404 from './Error404.js';

import TopBar from './TopBar';
import BottonBar from './BottonBar';

import React from 'react';
import {Route, Switch} from 'react-router-dom';

function App() {

    return (
      <>
        <TopBar/>
        <Switch>
          <Route path="/" exact component={Intro}/>
          <Route path="/balance" exact component={Balance}/>
          <Route path="/iniciar-sesion" exact component={Login}/>
          <Route path="/registrarse" exact component={Register}/>
          <Route path="/ingresos" exact component={Ingresos}/>
          <Route path="/gastos" exact component={Gastos}/>
          <Route path="/ingresos/agregar"  >
            <Nuevo type="ingreso"/>
          </Route>
          <Route path="/gastos/agregar"  >
            <Nuevo type="gasto"/>
          </Route>
          <Route path="/ingresos/lista"  >
            <Lista type="ingreso"/>
          </Route>
          <Route path="/gastos/lista"  >
            <Lista type="gasto"/>
          </Route>
          <Route component={Error404}/>
        </Switch>
        <BottonBar/> 
      </>
    );
  
}

export default App;
