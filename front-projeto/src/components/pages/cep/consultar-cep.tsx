import { useEffect, useState } from "react";
import { Endereco } from "../../../models/Endereco";

function ConsultarCep() {
    const [caixaTexto, setCaixaTexto] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    //Evento de carregamento do componente 
    useEffect(() => {
        console.log("Executar algo ao carregar o componente...");
        //carregarCep();
    }, []);

    function carregarCep() {
        //FETCH ou AXIOS
        fetch("https://viacep.com.br/ws/" + caixaTexto + "/json/")
        .then((resposta) => resposta.json())
        .then((endereco : Endereco) => {
            setRua(endereco.logradouro);
            setBairro(endereco.bairro);
            setCidade(endereco.localidade);
            setEstado(endereco.uf);
            console.log(endereco.logradouro);
        })
        .catch((erro) => {
            console.log("Deu erro po.");
        });
    }

    return (
        <div> 
            <input 
                type="text" 
                placeholder="CEP" 
                onBlur={carregarCep} 
                onChange={(e : any) => setCaixaTexto(e.target.value)}
            />
            <p> {rua} </p> 
            <button> {bairro} </button> 
            <p> {cidade} </p> 
            <input type="text" value={estado} readOnly></input> 
        </div>
    );
}

export default ConsultarCep;