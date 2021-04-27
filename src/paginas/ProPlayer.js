import './ProPlayer.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const api = axios.create({
    baseURL: "http://localhost:3001",
});

function ProPlayer() {
    let { nick } = useParams();
    const [proFull, setproFull] = useState("");
    const [config, setconfig] = useState("");


    useEffect(() => {
        buscarApi();
    }, []);

    let description = `${nick}` + " configurações do jogo, periféricos, fone, teclado, mouse e monitor";

    const buscarApi = () => {
        api.get(`/proplayer/${nick}`)
            .then((response) => {
                setproFull(response.data[0]);
                buscarConfig(response.data[0].id);
                buscarTime(response.data[0].idtime);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }
    function buscarConfig(idPro) {
        api.get(`/proplayer/config/` + idPro)
            .then((response) => {
                setconfig(response.data[0])
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }
    function buscarTime(idTime) {
        api.get(`/time/` + idTime)
            .then((response) => {
                var text = document.getElementById("nomeTime")
                text.innerHTML = response.data[0].nome;
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }
    return (
        <div>
            <Helmet>
                <title>{`${proFull.nick}`} configs - Rainbow Six Siege</title>
                <meta name="description" content={description} />
            </Helmet>
            <a href="http://localhost:3000/proplayers" className="backButton">
                <p>Voltar</p>
            </a>
            <section id="mainDivProplayer">
                <div id="divImgProPlayer">
                    <img src={proFull.imgPro} alt="" />
                </div>
                <div id="divProfileProPlayer">
                    <div className="divSobreProPlayer" id="txtConfiguracao">
                        <h2>Configuração</h2>
                    </div>
                    <div className="divSobreProPlayer">
                        <p>Nick:</p>
                        <p>{proFull.nick}</p>
                    </div>
                    <div className="divSobreProPlayer">
                        <p>Atual Time:</p>
                        <p id="nomeTime"></p>
                    </div>
                    <div className="divSobreProPlayer">
                        <p>Resolução:</p>
                        <p>{config.res}</p>
                    </div>
                    <div className="divSobreProPlayer">
                        <p>Proporção:</p>
                        <p>{config.prop}</p>
                    </div>
                    <div className="divSobreProPlayer">
                        <p>Taxa de Atualização:</p>
                        <p>{config.hz} Hz</p>
                    </div>
                    <div className="divSobreProPlayer">
                        <p>FOV:</p>
                        <p>{config.fov}</p>
                    </div>
                </div>
            </section>
            <section id="divEquipamentosProPlayer">
                <p id="txtEquipamentos">Periféricos</p>
                <div className="divEquipamentos">
                    <div className="divCDEquipamento">
                        <p className="tituloEquipamento">Monitor</p>
                        <p className="nomeEquipamento">{proFull.nomeMonitor}</p>
                        <img alt="" src={proFull.imgMonitor}/>
                        <a href={proFull.linkMonitor}>Ver na Loja</a>
                    </div>
                    <div className="divCDEquipamento">
                        <p className="tituloEquipamento">Fone</p>
                        <p className="nomeEquipamento">{proFull.nomeFone}</p>
                        <img alt="" src={proFull.imgFone}/>
                        <a href={proFull.linkFone}>Ver na Loja</a>
                    </div>
                    <div className="divCDEquipamento">
                        <p className="tituloEquipamento">Mouse</p>
                        <p className="nomeEquipamento">{proFull.nomeMouse}</p>
                        <img alt="" src={proFull.imgMouse}/>
                        <a href={proFull.linkMouse}>Ver na Loja</a>
                    </div>
                    <div className="divCDEquipamento">
                        <p className="tituloEquipamento">Teclado</p>
                        <p className="nomeEquipamento">{proFull.nomeTeclado}</p>
                        <img alt="" src={proFull.imgTeclado}/>
                        <a href={proFull.linkTeclado}>Ver na Loja</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProPlayer;