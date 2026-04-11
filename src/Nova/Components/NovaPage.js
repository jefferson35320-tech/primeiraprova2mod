import React, { useState } from 'react';
import input from './input';
import Button from './Button';
import api from '../utils/api';

const NovaPage = () => {
  const [form, setForm] = useState({ nome: "", descricao: "", preco: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post("/frutas", form)
      .then((data) => {
        setForm({ nome: "", descricao: "", preco: "" });
        alert("Fruta adicionada com sucesso!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Novo Produto</h1>
      <form onSubmit={handleSubmit}>
        <input 
          id="nome" 
          name="nome" 
          label="Nome: " 
          value={form.nome} 
          onChange={handleChange} 
        />
        <input 
          id="descricao" 
          name="descricao" 
          label="Descrição: " 
          value={form.descricao} 
          onChange={handleChange} 
        />
        <input 
          id="preco" 
          name="preco" 
          label="Preço: " 
          value={form.preco} 
          onChange={handleChange} 
        />
        <Button onClick={handleSubmit} style={{ backgroundColor: 'green', color: 'white' }}>
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default NovaPage;