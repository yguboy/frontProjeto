import { useState } from "react";
import { Produto } from "../../../models/Produto";

function ProdutoCadastrar() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [quantidade, setQuantidade] = useState("");

    function cadastrar(e : any) {
        e.preventDefault();
        const produto: Produto = {
            nome: nome,
            descricao: descricao,
            preco: parseFloat(preco),
            quantidade: parseInt(quantidade),
        };
        fetch("http://localhost:5076/api/produto/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto),
        })
            .then((resposta) => resposta.json())
            .then((produtoCadastrado: Produto) => {
                console.log(produtoCadastrado);
            });
    }

    return (
        <div>
            <h1> Cadastrar Produto </h1>
            <form onSubmit={cadastrar}>
                <label> Nome: </label>
                <input type="text" onChange={(e : any) => setNome(e.target.value)} required />{" "}
                <br/>
                <label> Descrição: </label>
                <input type="text" onChange={(e : any) => setDescricao(e.target.value)} />{" "}
                <br/>
                <label> Preço: </label>
                <input type="text" onChange={(e : any) => setPreco(e.target.value)} />{" "}
                <br/>
                <label> Quantidade: </label>
                <input type="text" onChange={(e : any) => setQuantidade(e.target.value)} />{" "}
                <br/>
                <button type="submit"> Cadastrar </button>
            </form>
        </div>
    );
}

export default ProdutoCadastrar;