import './ProPlayers.css'
import axios from 'axios';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const api = axios.create({
    baseURL: "http://localhost:3001",
});

function ProPlayers() {

    useEffect(() => {
        buscarApi();
    }, []);

    let idTimes = [];

    const buscarApi = () => {
        api.get(`/times`)
            .then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    idTimes[i] = response.data[i].id;
                    var divPai = document.getElementById("divPaiProplayer");
                    var subDiv = document.createElement("div");
                    subDiv.setAttribute("id", "timeid" + response.data[i].id);
                    subDiv.setAttribute("class", "divProplayersTimes")
                    var a = document.createElement("a");
                    a.setAttribute("class", "divCDTimeIcon");

                    var div1 = document.createElement("div");
                    var img = document.createElement("img");
                    img.setAttribute("src", response.data[i].icon_img);

                    var p = document.createElement("p");
                    p.innerHTML = response.data[i].nome;
                    div1.appendChild(img);
                    a.appendChild(div1);
                    a.appendChild(p);
                    subDiv.appendChild(a);
                    divPai.appendChild(subDiv);
                }
                setarProplayers();
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    async function setarProplayers() {
        for (let i = 0; i < idTimes.length; i++) {
            await api.get(`/proplayer/by-time/` + idTimes[i])
                .then((response) => {
                    for (let u = 0; u < response.data.length; u++) {
                        var div = document.getElementById("timeid" + idTimes[i]);
                        var a = document.createElement("a");
                        a.setAttribute("class", "divCDTime");
                        a.setAttribute("href", "http://localhost:3000/proplayer/config/" + response.data[u].nick);

                        var div1 = document.createElement("div");
                        div1.setAttribute("class", "divImgProplayer");
                        var img = document.createElement("img");
                        img.setAttribute("src", response.data[u].imgPro);

                        var p = document.createElement("p");
                        p.innerHTML = response.data[u].nick;

                        div1.appendChild(img)
                        a.appendChild(div1)
                        a.appendChild(p)
                        div.appendChild(a)
                    }
                })
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
        }
    }
    return (
        <div id="mainDivPro">
            <Helmet>
                <title>Pro Players BR - Rainbow Six</title>
                <meta name="description" content="Configuração dos melhores jogadores de Rainbow Six do Brasil" />
            </Helmet>
            <div id="divPaiProplayer">
            </div>
        </div>


    )
}

export default ProPlayers;