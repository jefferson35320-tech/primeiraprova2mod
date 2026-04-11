import { useState, useEffect } from "react";
import api from "../utils/api";

const FrutasPage = () => {
  const {listaFrutas, setLista} = useState([]);

  const loadLista = () => {
    api.get("/Frutas")
    .then(res => setLista(res.data ))
    .catch((err) => console.error(err));
  };


useEffect(() => {
    loadLista();
}, []);

const removeFromLista = (id) => {
    api.delete("/Frutas/" + id)
        .then(res => {
            loadLista();
        })
        .catch((err) => console.error(err));
};

return (
    <div>
        <h1>Lista de Frutas</h1>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Descrição</th>
                    <th>Remover</th>
                </tr>
            </thead>
            <tbody>
                {listaFrutas.map((fruta) => (
                    <tr>
                        <td>{fruta.nome}</td>
                        <td>{fruta.preco}</td>
                        <td>{fruta.descricao}</td>
                        <td onClick={() => removeFromLista(fruta.id)} style={{color: 'red'}}>
                                X    
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
};


export default FrutasPage;