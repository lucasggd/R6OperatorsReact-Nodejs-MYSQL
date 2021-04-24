import './Home.css';

function Home() {
    return (
        <div id="dpflexHome">
            <div id="div1HomePage">
                <p>LOADOUTS AGENTES</p>

                <div className="divHomeImg">
                    <img alt="" src="/images/operador/caveira.png" />
                </div>

                <a href="http://localhost:3000/operadores">Ver Loadouts</a>
            </div>
            <div id="div2HomePage">
                <p>CONFIG PROPLAYERS</p>

                <div className="divHomeImg">
                    <img alt="" src="/images/proplayer/neskp.png" />
                </div>

                <a href="http://localhost:3000/proplayers">Ver Configs</a>
            </div>
        </div>
    );
}

export default Home;