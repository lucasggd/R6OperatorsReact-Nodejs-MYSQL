import { Switch, Route } from 'react-router-dom';
import Op_ap from './pageAdm/Op_ap';
import Op_as from './pageAdm/Op_as';
import Op_ac from './pageAdm/Op_ac';
import Operadores from './paginas/Operadores';
import ProPlayers from './paginas/ProPlayers';
import ProPlayer from './paginas/ProPlayer';
import Home from './paginas/Home';
import Atualizar_op_ap from './pageAdm/Atualizar_op_ap';
import LoadoutB from './paginas/LoadoutB';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/operadores" component={Operadores}/>
            <Route path="/proplayers" component={ProPlayers}/>
            <Route path="/proplayer/config/:nick" component={ProPlayer}/>
            <Route path="/operador/:nome" component={LoadoutB}/>
            <Route path="/admin/post/op_ap" component={Op_ap}/>
            <Route path="/admin/post/op_as" component={Op_as}/>
            <Route path="/admin/post/op_ac" component={Op_ac}/>
            <Route path="/admin/put/op_ap/:id" component={Atualizar_op_ap}/>
        </Switch>
    )
}

export default Routes;