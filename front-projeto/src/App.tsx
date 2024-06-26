import React from 'react';
import ProdutoListar from './components/pages/produto/produto-listar';
import ConsultarCep from './components/pages/cep/consultar-cep';
import ProdutoCadastrar from './components/pages/produto/produto-cadastrar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProdutoAlterar from './components/pages/produto/produto-alterar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/produto/listar"> Listar Produtos </Link> </li>
            <li> <Link to="/produto/cadastrar"> Cadastrar Produtos </Link> </li>
            <li> <Link to="/cep/consultar"> Consultar CEP </Link> </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ProdutoListar></ProdutoListar>}></Route>
          <Route path="/produto/listar" element={<ProdutoListar></ProdutoListar>}></Route>
          <Route path="/produto/cadastrar" element={<ProdutoCadastrar></ProdutoCadastrar>}></Route>
          <Route path="/produto/alterar/:id?" element={<ProdutoAlterar></ProdutoAlterar>}></Route>
          <Route path="/cep/consultar" element={<ConsultarCep></ConsultarCep>}></Route>
        </Routes>
        <footer>
          <p> Desenvolvido por Ygor Espada </p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
