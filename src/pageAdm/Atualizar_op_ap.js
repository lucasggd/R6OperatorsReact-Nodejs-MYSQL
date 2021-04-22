import axios from 'axios';
import { useEffect, useState } from 'react';
import './Op_ap.css';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';

const api = axios.create({
    baseURL: "http://localhost:3001",
});

function Atualizar_op_ap() {
    let history = useHistory();
    let { id } = useParams();

    useEffect(() => {
        buscarApi();
    }, []);

    const [values, setValues] = useState();
    let op_ap = {};

    function onChange(ev) {
        const { name, value } = ev.target;
        setValues({ ...values, [name]: value });
    }

    const buscarApi = () => {
        api.get(`/op_ap/${id}`)
            .then((response) => {
                op_ap = response.data

                for (let i = 0; i < response.data.length; i++) {
                    var div = document.getElementById("formOpApDiv");
                    var form = document.createElement("form")
                    form.setAttribute("class", "formOpApPut")
                    var label = document.createElement("label")
                    var p1 = document.createElement("p")
                    p1.innerHTML = "Arma Primaria";
                    var p2 = document.createElement("p")
                    p2.innerHTML = "Operador";
                    var p3 = document.createElement("p")
                    p3.innerHTML = "Melhor ?";


                    var select1 = document.createElement("select")
                    select1.setAttribute("name", "id_armap" + [i])
                    select1.setAttribute("disabled", "")
                    var option1 = document.createElement("option")
                    api.get("/armaprimaria/" + response.data[i].id_armap)
                        .then((res) => {
                            option1.innerHTML = res.data[0].nome;
                        })
                        .catch((err) => {
                            console.error("ops! ocorreu um erro" + err);
                        });
                        
                    option1.setAttribute("selected", "")
                    select1.appendChild(option1);

                    var select2 = document.createElement("select")
                    select2.setAttribute("name", "selectOp" + [i])
                    select2.setAttribute("disabled", "")
                    var option2 = document.createElement("option")
                    option2.innerHTML = response.data[i].id_operador;
                    option2.setAttribute("selected", "")
                    select2.appendChild(option2);

                    var select3 = document.createElement("select")
                    select3.setAttribute("name", "melhor" + [i])
                    select3.setAttribute("onChange", "onChange")
                    // var option1 = document.createElement("option")
                    // option1.setAttribute("value", 0)
                    // option1.setAttribute("selected", "")
                    // option1.innerHTML = "Não";
                    // var option2 = document.createElement("option")
                    // option2.setAttribute("value", 1)
                    // option2.innerHTML = "Sim";

                    div.appendChild(form)
                    form.appendChild(label)
                    label.appendChild(p1)
                    label.appendChild(select1)
                    label.appendChild(p2)
                    label.appendChild(select2)
                    label.appendChild(p3)
                    label.appendChild(select3)

                }
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }

    function atualizar_op_ap() {
        api.post(`/put/op_ap/${id}`, values)
            .then((response) => {
                console.log('200 OK')
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }
    function proximaPage() {
        history.push("/admin/put/op_as");
    }

    return (
        <div id="Main">
            <h1 id="tituloOp_ap">Admin PUT Acessório - Operador</h1>
            <div className="mainDivOp_ap displayflexColunm">
                <div className="displayflex" id="formOpApDiv">

                </div>
                <button id="botaoOp" type="button" onClick={atualizar_op_ap}>Atualizar</button>
                <button id="botaoOp2" type="button" onClick={proximaPage}>Ir para Operador</button>
            </div>
        </div>
    )
}

export default Atualizar_op_ap;