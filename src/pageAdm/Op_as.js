import axios from 'axios';
import { useEffect, useState } from 'react';
import './Op_ap.css';
import { useHistory } from "react-router-dom";

const api = axios.create({
    baseURL: "http://localhost:3001",
});

function initalState() {
    return { melhor: 0 }
}

function Op_as() {
    let history = useHistory();

    useEffect(() => {
        buscarApi();
    }, []);

    const buscarApi = () => {
        api.get("/operador/")
            .then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    var divOp = document.getElementById("selectOp")
                    var option = document.createElement("option")

                    option.innerHTML = response.data[i].nome;
                    option.setAttribute("value", response.data[i].id);
                    divOp.appendChild(option);
                }
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

        api.get("/armasecundaria/")
            .then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    var divOp = document.getElementById("selectAs")
                    var option = document.createElement("option")

                    option.innerHTML = response.data[i].nome
                    option.setAttribute("value", response.data[i].id);
                    divOp.appendChild(option);
                }
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

        api.get("/miras-armas/")
            .then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    var divOp = document.getElementById("selectMira")
                    var option = document.createElement("option")

                    option.innerHTML = response.data[i].nome
                    option.setAttribute("value", response.data[i].id);
                    divOp.appendChild(option);
                }
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

        api.get("/canos-armas/")
            .then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    var divOp = document.getElementById("selectCano")
                    var option = document.createElement("option")

                    option.innerHTML = response.data[i].nome
                    option.setAttribute("value", response.data[i].id);
                    divOp.appendChild(option);
                }
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });

        api.get("/cabos-armas/")
            .then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    var divOp = document.getElementById("selectCabo")
                    var option = document.createElement("option")

                    option.innerHTML = response.data[i].nome
                    option.setAttribute("value", response.data[i].id);
                    divOp.appendChild(option);
                }
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    const [values, setValues] = useState(initalState);

    function onChange(ev) {
        const { name, value } = ev.target;
        setValues({ ...values, [name]: value });
    }

    function criarNovo_op_as() {
        api.post("/post/op_as", values)
            .then((response) => {
                setValues({...values, id_armap: null, melhor: 0, id_mira: null, id_cano: null, id_cabo: null});
                var op = document.getElementsByName("op1");
                for (const item of op) {
                    item.setAttribute("selected", "")
                    item.removeAttribute("selected")
                }

                console.log('200 OK')
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }
    function proximaPage(){
        history.push("/admin/post/op_ac");
    }


    return (
        <div id="Main">
            <h1 id="tituloOp_ap">Admin POST Arma Secundária - Operador</h1>
            <div className="mainDivOp_ap">
                <form id="formOpAp">
                    <label>
                        <p>Arma Secundária</p>
                        <select name="id_armas" onChange={onChange} id="selectAs">
                            <option name="op1" defaultValue>Selecinar</option>
                        </select>
                    </label>
                    <label>
                        <p>Operador</p>
                        <select name="id_operador" onChange={onChange} id="selectOp">
                            <option defaultValue>Selecinar</option>
                        </select>
                    </label>
                    <label>
                        <p>Melhor arma?</p>
                        <select name="melhor" onChange={onChange}>
                            <option name="op1" value="0" defaultValue>Não</option>
                            <option value="1">Sim</option>
                        </select>
                    </label>
                    <label>
                        <p>Mira</p>
                        <select name="id_mira" onChange={onChange} id="selectMira">
                            <option name="op1" defaultValue>Null</option>
                        </select>
                    </label>
                    <label>
                        <p>Cano</p>
                        <select name="id_cano" onChange={onChange} id="selectCano">
                            <option name="op1" defaultValue>Null</option>
                        </select>
                    </label>
                    <label>
                        <p>Cabo</p>
                        <select name="id_cabo" onChange={onChange} id="selectCabo">
                            <option name="op1" defaultValue>Null</option>
                        </select>
                    </label>
                    <button id="botaoOp" type="button" onClick={criarNovo_op_as}>Criar</button>
                    <button id="botaoOp2" type="button" onClick={proximaPage}>Próximo</button>

                </form>
            </div>
        </div>
    );
}

export default Op_as;