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

        api.get("/acessorio/")
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

    const [values, setValues] = useState(initalState);

    function onChange(ev) {
        const { name, value } = ev.target;
        setValues({ ...values, [name]: value });
    }

    function criarNovo_op_ac() {

        api.post("/post/op_ac", values)
            .then((response) => {
                setValues({...values, id_acessorio: null, melhor: 0 });

                var op1 = document.getElementById("op1");
                op1.setAttribute("selected", "")
                op1.removeAttribute("selected")

                var op2 = document.getElementById("op2");
                op2.setAttribute("selected", "")
                op2.removeAttribute("selected")

                console.log('200 OK')
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }
    function proximaPage() {
        history.push("/operador/" + values.id_operador);
    }
    function voltarArmap() {
        history.push("/admin/post/op_ap");
    }


    return (
        <div id="Main">
            <h1 id="tituloOp_ap">Admin POST Acessório - Operador</h1>
            <div className="mainDivOp_ap">
                <form id="formOpAp">
                    <label>
                        <p>Acessório</p>
                        <select name="id_acessorio" onChange={onChange} id="selectAc">
                            <option id="op1" defaultValue>Selecinar</option>
                        </select>
                    </label>
                    <label>
                        <p>Operador</p>
                        <select name="id_operador" onChange={onChange} id="selectOp">
                            <option defaultValue>Selecinar</option>
                        </select>
                    </label>
                    <label>
                        <p>Melhor acessório?</p>
                        <select name="melhor" onChange={onChange}>
                            <option id="op2" value="0" defaultValue>Não</option>
                            <option value="1">Sim</option>
                        </select>
                    </label>
                    <button id="botaoOp" type="button" onClick={criarNovo_op_ac}>Criar</button>
                    <button id="botaoOp2" type="button" onClick={proximaPage}>Ir para Operador</button>
                    <button id="botaoOp2" type="button" onClick={voltarArmap}>Ir Criar novo Op_Ap</button>

                </form>
            </div>
        </div>
    );
}

export default Op_as;