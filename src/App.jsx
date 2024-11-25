import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Resumen from "./components/Resumen";

import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerFormulario = styled.div`
  padding: 25px;
  background-color: white;
`;

function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  //
  const { datos, cotizacion } = resumen;

  console.log(datos);
  return (
    <>
      <Container>
        <Header titulo="Cotizador de seguros" />
        <ContainerFormulario>
          <Form setResumen={setResumen} />

          {cotizacion >= 1 ? <Resumen datos={datos} /> : null}
        </ContainerFormulario>
      </Container>
    </>
  );
}

export default App;
