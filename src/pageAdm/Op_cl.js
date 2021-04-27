import axios from 'axios';
import { useEffect, useState } from 'react';
import './Op_ap.css';
import { useHistory } from "react-router-dom";

const api = axios.create({
    baseURL: "http://localhost:3001",
});

function Op_cl() {
    let history = useHistory();

    useEffect(() => {
        buscarApi();
    }, []);

    const buscarApi = () => {
        api.get("/operadores/")
            .then((response) => {
                console.log(response.data)
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

        api.get("/classes/")
            .then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    var divOp = document.getElementById("selectAc")
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

    const [values, setValues] = useState();

    function onChange(ev) {
        const { name, value } = ev.target;
        setValues({ ...values, [name]: value });
    }

    function criarNovo_op_ac() {

        api.post("/post/op_cl", values)
            .then((response) => {

                var op1 = document.getElementById("op1");
                op1.setAttribute("selected", "")
                op1.removeAttribute("selected")

                console.log('200 OK')
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }
    function proximaPage() {
        history.push("/operador/" + values.id_operador);
    }


    return (
        <div id="Main">
            <h1 id="tituloOp_ap">Admin POST Classe - Operador</h1>
            <div className="mainDivOp_ap">
                <form id="formOpAp">
                    <label>
                        <p>Classe</p>
                        <select name="id_classe" onChange={onChange} id="selectAc">
                            <option defaultValue>Selecinar</option>
                        </select>
                    </label>
                    <label>
                        <p>Operador</p>
                        <select name="id_operador" onChange={onChange} id="selectOp">
                            <option id="op1" defaultValue>Selecinar</option>
                        </select>
                    </label>
                    <button id="botaoOp" type="button" onClick={criarNovo_op_ac}>Criar</button>
                    <button id="botaoOp2" type="button" onClick={proximaPage}>Ir para Operador</button>
                </form>
            </div>
        </div>
    );
}

export default Op_cl;