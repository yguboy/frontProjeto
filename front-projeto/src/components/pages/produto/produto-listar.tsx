import React, { useEffect, useState } from "react";
import { Produto } from "../../../models/Produto";

// 1 - Implementar o cadastro a partir do formulario
// 2 - Implementar a remoção 
// 3 - Implementar a alteração

function ProdutoListar() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    // Evento de carregamento do componente 
    useEffect(() => {
        console.log("Executar algo ao carregar o componente...");
        carregarProdutos();
    }, []);

    function carregarProdutos() {
        // FETCH ou AXIOS
        fetch("http://localhost:5076/api/produto/listar")
            .then((resposta) => resposta.json())
            .then((produtos: Produto[]) => {
                setProdutos(produtos);
                // console.table(produtos);
            })
            .catch((erro) => {
                console.log("Deu erro po.");
            });
    }

    return (
        <div>
            <h1> Listar Produto </h1>
            <table>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid black" }}> # </th>
                        <th style={{ border: "1px solid black" }}> Nome </th>
                        <th style={{ border: "1px solid black" }}> Descrição </th>
                        <th style={{ border: "1px solid black" }}> Preço </th>
                        <th style={{ border: "1px solid black" }}> Quantidade </th>
                        <th style={{ border: "1px solid black" }}> Criado Em </th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.id}>
                            <td style={{ border: "1px solid black" }}> {produto.id} </td>
                            <td style={{ border: "1px solid black" }}> {produto.nome} </td>
                            <td style={{ border: "1px solid black" }}> {produto.descricao} </td>
                            <td style={{ border: "1px solid black" }}> ${produto.preco} </td>
                            <td style={{ border: "1px solid black" }}> {produto.quantidade} </td>
                            <td style={{ border: "1px solid black" }}> {produto.criadoEm} </td>
                        </tr>        
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProdutoListar;
