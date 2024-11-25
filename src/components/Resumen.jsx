const Resumen = ({ resumen }) => {
  console.log(resumen);

  const { datos } = resumen;
  return (
    <>
      <div>
        <h2>Resumen de cotizacion</h2>
        <p>
          <span>Marca: </span>
          {datos.marca}
        </p>
        <p>
          <span>Plan:</span>
          {datos.plan}
        </p>
        <p>
          <span>Año del auto:</span>
          {datos.year}
        </p>
      </div>
    </>
  );
};

export default Resumen;
