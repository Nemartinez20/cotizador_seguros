export default function Form() {
  return (
    <>
      <div>
        <form action="">
          <div className="campo">
            <label htmlFor="">Marca</label>
            <select name="" id="">
              <option value="">--Selecione--</option>
              <option value="">--Selecione--</option>
              <option value="">--Selecione--</option>
              <option value="">--Selecione--</option>
            </select>
          </div>

          <div className="campo">
            <label htmlFor="">Año</label>
            <select name="" id="">
              <option value="">--Selecione--</option>
              <option value="">--Selecione--</option>
              <option value="">--Selecione--</option>
              <option value="">--Selecione--</option>
            </select>
          </div>

          <div className="campo">
            <div>
              <input type="radio" name="basico" id="" />
              <label htmlFor="Basico">Basico</label>
            </div>
            <div>
              <input type="radio" name="basico" id="" />
              <label htmlFor="completo">Completo</label>
            </div>
          </div>

          <button className="bnt__cotizar">Cotizar</button>
        </form>
      </div>
    </>
  );
}
