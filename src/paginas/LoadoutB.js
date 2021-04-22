import './LoadoutB.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const api = axios.create({
    baseURL: "http://localhost:3001",
});

function buscarCabo(id_cabo, arma){
    api.get(`/cabos-armas/` + id_cabo)
                .then((res) => {
                    var nomeL = document.getElementById(arma + "CaboNome");
                    nomeL.innerHTML = res.data[0].nome;
                    var imgL = document.getElementById(arma + "CaboImg");
                    imgL.setAttribute("src", res.data[0].img)
                })
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
}
function buscarCano(id_cano, arma){
    api.get(`/canos-armas/` + id_cano)
                .then((res) => {
                    var nomeL = document.getElementById(arma + "CanoNome");
                    nomeL.innerHTML = res.data[0].nome;
                    var imgL = document.getElementById(arma + "CanoImg");
                    imgL.setAttribute("src", res.data[0].img)
                })
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
}
function buscarMira(id_mira, arma){
    api.get(`/miras-armas/` + id_mira)
                .then((res) => {
                    var nomeL = document.getElementById(arma + "MiraNome");
                    nomeL.innerHTML = res.data[0].nome;
                    var imgL = document.getElementById(arma + "MiraImg");
                    imgL.setAttribute("src", res.data[0].img)
                })
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
}

function LoadoutB() {
    let { nome } = useParams();
    
    useEffect(() => {
        buscarApi();
    }, []);

    const [opFull, setopFull] = useState("");

    let opF = 0;
    let mArmap = -1;
    let mArmas = -1;
    let mAcessorio = -1;

    const buscarArmap = (response) => {
        for (let i = 0; i < response.data.length; i++) {
            api.get(`/armaprimaria/` + response.data[i].id_armap)
                .then((res) => {

                    //<div className="armaL displayFlex better">
                    //<img alt="" className="imgL" src={"/images/loadouts/L85A2_HUD_ICON_R6S.png"} />
                    //</div>

                    var divArmaP = document.getElementById("divArmaP");
                    var divcoluna = document.createElement("div");
                    var divA = document.createElement("div");
                    divA.setAttribute("class", "armaL displayFlex dpflex");
                    var nomeCadaArma = document.createElement("p");
                    nomeCadaArma.setAttribute("class", "nomeCArma");
                    nomeCadaArma.innerHTML = res.data[0].nome;
                    var img = document.createElement("img");
                    if (mArmap === i) {
                        var nomeArmaL = document.getElementById("nomeArmaL1");
                        nomeArmaL.innerHTML = res.data[0].nome;
                        var imgArmaL = document.getElementById("armapImg");
                        imgArmaL.setAttribute("src", res.data[0].img);
                        divA.setAttribute("class", "armaL displayFlex dpflex better");
                    }
                    img.setAttribute("class", "imgL");
                    img.setAttribute("src", "" + res.data[0].img);
                    divcoluna.appendChild(nomeCadaArma)
                    divA.appendChild(img);
                    divcoluna.appendChild(divA);
                    divArmaP.appendChild(divcoluna)
                })
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
        }
    }
    const buscarArmas = (response) => {
        for (let i = 0; i < response.data.length; i++) {
            api.get(`/armasecundaria/` + response.data[i].id_armas)
                .then((res) => {

                    //<div className="armaL displayFlex">
                    //<img alt="" className="imgL" src={"/images/loadouts/P226_Icon_R6S.png"} />
                    //</div>
                    var divArmaS = document.getElementById("divArmaS");
                    var divA = document.createElement("div");
                    var divcoluna = document.createElement("div");
                    divA.setAttribute("class", "armaL displayFlex dpflex");
                    var nomeCadaArma = document.createElement("p");
                    nomeCadaArma.setAttribute("class", "nomeCArma");
                    nomeCadaArma.innerHTML = res.data[0].nome;

                    var img = document.createElement("img");
                    if (mArmas === i) {
                        var nomeArmaL = document.getElementById("nomeArmaL2")
                        nomeArmaL.innerHTML = res.data[0].nome;
                        var imgArmaL = document.getElementById("armasImg");
                        imgArmaL.setAttribute("src", res.data[0].img);
                        divA.setAttribute("class", "armaL displayFlex dpflex better");
                    }
                    img.setAttribute("class", "imgL");
                    img.setAttribute("src", "" + res.data[0].img);
                    divcoluna.appendChild(nomeCadaArma)
                    divA.appendChild(img);
                    divcoluna.appendChild(divA);
                    divArmaS.appendChild(divcoluna)
                })
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
        }
    }
    const buscarAcessorio = (response) => {
        for (let i = 0; i < response.data.length; i++) {
            api.get(`/acessorio/` + response.data[i].id_acessorio)
                .then((res) => {

                    //<div className="armaL displayFlex">
                    //<img alt="" className="imgL" src={"https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/3XnK8s1iQJQu5cfr6UyQfK/429480b96d6d6d6b830c32c75d2608f5/Stun_Grenade.png"} />
                    //</div>

                    var divAcessorio = document.getElementById("divAcessorio");
                    var divA = document.createElement("div");
                    var divcoluna = document.createElement("div");
                    divA.setAttribute("class", "armaL displayFlex dpflex");
                    var nomeCadaArma = document.createElement("p");
                    nomeCadaArma.setAttribute("class", "nomeCArma");
                    nomeCadaArma.innerHTML = res.data[0].nome;

                    var img = document.createElement("img");
                    if (mAcessorio === i) {
                        divA.setAttribute("class", "armaL displayFlex dpflex better");
                    }
                    img.setAttribute("class", "imgL");
                    img.setAttribute("src", "" + res.data[0].img);
                    divcoluna.appendChild(nomeCadaArma)
                    divA.appendChild(img);
                    divcoluna.appendChild(divA);
                    divAcessorio.appendChild(divcoluna)
                })
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
        }
    }
    function setarArma(){
        api.get("/operador/" + opF + "/armaprimaria")
        .then((response) => {
            console.log(response);
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].melhor === 1) {
                    mArmap = i;
                    buscarCabo(response.data[i].id_cabo, "armap");
                    buscarCano(response.data[i].id_cano, "armap");
                    buscarMira(response.data[i].id_mira, "armap");
                }
            }
            buscarArmap(response);
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });

    api.get("/operador/" + opF + "/armasecundaria")
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].melhor === 1) {
                    mArmas = i;
                    buscarCabo(response.data[i].id_cabo, "armas");
                    buscarCano(response.data[i].id_cano, "armas");
                    buscarMira(response.data[i].id_mira, "armas");
                }
            }
            buscarArmas(response);
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });

    api.get("/operador/" + opF + "/acessorio")
        .then((response) => {

            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].melhor === 1) {
                    mAcessorio = i;
                }
            }
            buscarAcessorio(response);
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }
    const buscarApi = () => {
        api.get(`/operador/${nome}`)
            .then((response) => {
                setopFull(response.data[0])
                opF = response.data[0].id;
                setarArma();
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    return (
        <div className="backgroundAzul">
            <a href="http://localhost:3000/operadores" className="backButton">
                <p>Voltar</p>
            </a>
            <section className="mainDiv">
                <div id="divTituloReserva">
                    <p id="tituloReserva">{opFull.nome}</p>
                </div>
                <div className="displayflex2">
                    <div className="displayCol" id="divOp">
                        <p className="nomeOp">{opFull.nome}</p>
                        <img alt="" className="opIMG" src={opFull.img} />
                    </div>
                    <div className="mainDivLoadouts">
                        <div className="divLoadout">
                            <p className="titulosLoadout">Armas Primárias</p>
                            <div className="subDivLoadouts" id="divArmaP">
                            </div>
                            <p className="titulosLoadout">Armas Secundárias</p>
                            <div className="subDivLoadouts" id="divArmaS">
                            </div>
                            <p className="titulosLoadout">Acessórios</p>
                            <div className="subDivLoadouts" id="divAcessorio">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="secundaryDiv displayFlex">
                <div className="divL">
                    <p className="titulosLoadout nomeArma" id="nomeArmaL1">N/A</p>
                    <div className="armaLoadout marginL displayFlex">
                        <img alt="" className="imgL" id="armapImg"/>
                    </div>
                    <p className="titulosLoadout" id="armapCanoNome">N/A</p>
                    <div className="armaLoadout displayFlex">
                        <img alt="" className="imgL" id="armapCanoImg"/>
                    </div>
                    <p className="titulosLoadout" id="armapCaboNome">N/A</p>
                    <div className="armaLoadout displayFlex">
                        <img alt="" className="imgL" id="armapCaboImg"/>
                    </div>
                    <p className="titulosLoadout" id="armapMiraNome">N/A</p>
                    <div className="armaLoadout displayFlex">
                        <img alt="" className="imgL" id="armapMiraImg"/>
                    </div>
                </div>
                <div className="divL">
                    <p className="titulosLoadout nomeArma" id="nomeArmaL2">N/A</p>
                    <div className="armaLoadout displayFlex">
                        <img alt="" className="imgL" id="armasImg"/>
                    </div>
                    <p className="titulosLoadout" id="armasCanoNome">N/A</p>
                    <div className="armaLoadout displayFlex">
                        <img alt="" className="imgL" id="armasCanoImg"/>
                    </div>
                    <p className="titulosLoadout" id="armasCaboNome">N/A</p>
                    <div className="armaLoadout displayFlex">
                        <img alt="" className="imgL" id="armasCaboImg"/>
                    </div>
                    <p className="titulosLoadout" id="armasMiraNome">N/A</p>
                    <div className="armaLoadout displayFlex">
                        <img alt="" className="imgL" id="armasMiraImg"/>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default LoadoutB;