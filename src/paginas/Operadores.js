import './Operadores.css';
import axios from 'axios';
import { useEffect } from 'react';

const api = axios.create({
    baseURL: "http://localhost:3001",
});

function Operadores() {
    useEffect(() => {
        buscarApi();
    }, []);

    const buscarApi = () => {
        api.get(`/operadores`)
            .then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    if (response.data[i].defensor === 1) {
                        var divPai = document.getElementById("divPaiDef");
                        var div1 = document.createElement('a')
                        div1.setAttribute("class", "divAgenteThumbDef")
                        div1.setAttribute("href", "http://localhost:3000/operador/" + response.data[i].nome)

                        var div11 = document.createElement('div')
                        div11.setAttribute("class", "ThumbImgAgente")
                        var img = document.createElement('img')
                        img.setAttribute("src", "/images/operadorThumb/" + response.data[i].nome + ".png")
                        img.setAttribute("class", "thumbOpImg")
                        div11.appendChild(img)
                        var img = document.createElement('img')
                        img.setAttribute("src", "/images/operadorIcon/" + response.data[i].nome + ".png")
                        img.setAttribute("class", "iconOpImg")
                        div11.appendChild(img)

                        var div12 = document.createElement('div')
                        div12.setAttribute("class", "ThumbNomeAgente")
                        var p = document.createElement('p')
                        div12.appendChild(p)
                        p.innerHTML = response.data[i].nome;

                        div1.appendChild(div11)
                        div1.appendChild(div12)
                        divPai.appendChild(div1)
                    }
                    else {
                        var divPai = document.getElementById("divPaiAtaq");
                        var div1 = document.createElement('a')
                        div1.setAttribute("class", "divAgenteThumbAtaq")
                        div1.setAttribute("href", "http://localhost:3000/operador/" + response.data[i].nome)

                        var div11 = document.createElement('div')
                        div11.setAttribute("class", "ThumbImgAgente")
                        var img = document.createElement('img')
                        img.setAttribute("src", "/images/operadorThumb/" + response.data[i].nome + ".png")
                        img.setAttribute("class", "thumbOpImg")
                        div11.appendChild(img)
                        var img = document.createElement('img')
                        img.setAttribute("src", "/images/operadorIcon/" + response.data[i].nome + ".png")
                        img.setAttribute("class", "iconOpImg")
                        div11.appendChild(img)

                        var div12 = document.createElement('div')
                        div12.setAttribute("class", "ThumbNomeAgente")
                        var p = document.createElement('p')
                        div12.appendChild(p)
                        p.innerHTML = response.data[i].nome;

                        div1.appendChild(div11)
                        div1.appendChild(div12)
                        divPai.appendChild(div1)
                    }
                }
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    return (
        <div className="backgroundAzul">
            <section className="DivAgentesLoadouts">
                <div className="divDefesa">
                    <div className="DivTituloDef">
                        <p className="pDefAtaq">Loadout Defesa</p>
                        <img src="/images/defesaIcon.png" />
                    </div>
                    <div className="dpflexDivOperadores">
                        <div className="divOperadores" id="divPaiDef">
                        </div>
                    </div>
                </div>
                <div className="divAtaque">
                    <div className="DivTituloAtaq">
                        <p className="pDefAtaq">Loadout Ataque</p>
                        <img src="/images/ataqueIcon.png" />
                    </div>
                    <div className="dpflexDivOperadores">
                        <div className="divOperadores" id="divPaiAtaq">
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Operadores;