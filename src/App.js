import React, { useState } from "react";
import styled from "@emotion/styled";
import Frase from './componentes/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  fontfamily: Helvetica, Arial, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

function App() {

  // State de frases
  const { frase, guardarFrase } = useState({});

  const consultarAPI = async () => {
    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    guardarFrase(frase[0]);
  };

  return (

    <Contenedor>
      <Frase
        frase={frase}
      />
      <Boton onClick={consultarAPI}>Obtener frase nueva</Boton>
    </Contenedor>
  );
}

export default App;
