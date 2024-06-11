import { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProdutoAlterar() {
    const { id } = useParams<{ id : string }>();
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [quantidade, setQuantidade] = useState("");

    useEffect(() => {
        if(id){
            axios.get(`http://localhost:5076/api/produto/buscar/${id}`)
            .then((resposta) => {
                setNome(resposta.data.nome);
                setDescricao(resposta.data.descricao);
                setQuantidade(resposta.data.quantidade.toString());
                setPreco(resposta.data.preco.toString());
            });
        }
    }, []);

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
            <h1> Alterar Produto </h1>
            <form onSubmit={cadastrar}>
                <label> Nome: </label>
                <input type="text" value={nome} onChange={(e : any) => setNome(e.target.value)} required />{" "}
                <br/>
                <label> Descrição: </label>
                <input type="text" value={descricao} onChange={(e : any) => setDescricao(e.target.value)} />{" "}
                <br/>
                <label> Preço: </label>
                <input type="text" value={preco} onChange={(e : any) => setPreco(e.target.value)} />{" "}
                <br/>
                <label> Quantidade: </label>
                <input type="text" value={quantidade} onChange={(e : any) => setQuantidade(e.target.value)} />{" "}
                <br/>
                <button type="submit"> Salvar </button>
            </form>
        </div>
    );
}

export default ProdutoAlterar;