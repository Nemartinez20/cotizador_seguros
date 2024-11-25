import styled from "@emotion/styled";
import { useState } from "react";
import {
  obtenerDiferenciaYear,
  calcularMarca,
  calcularPlan,
  obtenrPlan,
} from "../helper";

const CampoDiv = styled.div`
  height: 38px;
  /* border: 1px solid black; */
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;
const LabelConta = styled.label`
  padding: 8px 12px;
  width: 100px;
`;
const SelectDiv = styled.select`
  height: 38px;
  border: 1px solid #e1e1e1;
  width: 80%;
`;
const DivInput = styled.div`
  height: 38px;
  /* padding: 8px 12px; */
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const DivRadio = styled.div`
  /* height: 38px; */
  padding: 8px 12px;
  /* width: 100%;
  display: flex;
  justify-content: space-evenly; */
`;

const ButtonBtn = styled.button`
  height: 38px;
  color: white;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 900;
  margin-bottom: 20px;
  width: 100%;
  border: none;
  cursor: pointer;
  background-color: #09f;
  &:hover {
    background-color: #00838f;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
`;
export default function Form({ setResumen }) {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState(false);

  //Extraer los valores del state y pasarlos al fomulario
  const { marca, year, plan } = datos;

  const obtenerInformacion = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("enviando");
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      console.log("debes");
      return;
    }

    setError(false);
    //base 2000
    let resultado = 2000;
    //Obtener la diferencia de años
    const diferencia = obtenerDiferenciaYear(year);
    console.log(diferencia);

    //por cada año hay que restar el 3%;
    resultado = resultado - (diferencia * 3 * resultado) / 100;
    console.log(resultado);

    //Americano 15%
    resultado = calcularMarca(marca) * resultado;
    console.log(resultado);
    //Asiatico 5%
    //Europeo 30%

    //Basico aumenta 20%
    //Completo aumenta el 50%
    resultado = parseFloat(obtenrPlan(plan) * resultado).toFixed(2);
    console.log(obtenrPlan(plan));
    console.log(resultado);

    setResumen({
      cotizacion: resultado,
      datos,
    });

    //Total
  };

  //Render a la vista
  return (
    <>
      <div>
        <form action="" onSubmit={submitForm}>
          {error ? <Error>Todos los campos on obligatorios</Error> : null}
          <CampoDiv>
            <LabelConta htmlFor="">Marca</LabelConta>
            <SelectDiv
              name="marca"
              id=""
              value={marca}
              onChange={obtenerInformacion}
            >
              <option value="">--Selecione--</option>
              <option value="Americano">Americano</option>
              <option value="Europeo">Europeo</option>
              <option value="Asiatico">Asiatico</option>
            </SelectDiv>
          </CampoDiv>
          <CampoDiv>
            <LabelConta htmlFor="">Año</LabelConta>
            <SelectDiv
              name="year"
              id=""
              value={year}
              onChange={obtenerInformacion}
            >
              <option value="">--Selecione--</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </SelectDiv>
          </CampoDiv>
          <CampoDiv>
            <DivInput>
              {/* <LabelConta htmlFor="plan">Plan</LabelConta> */}
              <DivRadio>
                <input
                  type="radio"
                  name="plan"
                  id="basico"
                  value="basico"
                  //   checked={plan === "basico"}
                  onChange={obtenerInformacion}
                />
                <LabelConta htmlFor="basico">basico</LabelConta>
              </DivRadio>
              <DivRadio>
                <input
                  type="radio"
                  name="plan"
                  id="completo"
                  value="completo"
                  //   checked={plan === "completo"}
                  onChange={obtenerInformacion}
                />
                <LabelConta htmlFor="completo">completo</LabelConta>
              </DivRadio>
            </DivInput>
          </CampoDiv>
          <ButtonBtn className="bnt__cotizar" type="submit">
            Cotizar
          </ButtonBtn>
        </form>
      </div>
    </>
  );
}
