import './Home.css';
import { Helmet } from 'react-helmet';

function Home() {
    return (
        <div id="dpflexHome">
            <Helmet>
                <title>R6 Configs</title>
                <meta name="description" content="Configuração de proplayers e loadouts de agentes - Rainbow Six Siege" />
            </Helmet>
            <div id="div1HomePage">
                <h2>LOADOUTS AGENTES</h2>

                <div className="divHomeImg">
                    <img alt="" src="/images/operador/caveira.png" />
                </div>

                <a href="http://localhost:3000/operadores">Ver Loadouts</a>
            </div>
            <div id="div2HomePage">
                <h2>CONFIG PROPLAYERS</h2>

                <div className="divHomeImg">
                    <img alt="" src="/images/proplayer/neskp.png" />
                </div>

                <a href="http://localhost:3000/proplayers">Ver Configs</a>
            </div>
        </div>
    );
}

export default Home;