const Resumen = ({ datos }) => {
  console.log(datos);

  const { marca, year, plan } = datos;
  return (
    <>
      <div>
        <h2>Resumen de cotizacion</h2>
        <p>
          <span>Marca: </span>
          {marca}
        </p>
        <p>
          <span>Plan:</span>
          {plan}
        </p>
        <p>
          <span>Año del auto:</span>
          {year}
        </p>
      </div>
    </>
  );
};

export default Resumen;
