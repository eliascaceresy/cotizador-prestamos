import { useEffect, useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { calcularTotal, formatearDinero } from "./utils";

const App = () => {
  const MIN = 1000;
  const MAX = 2000000;

  const [cantidad, setCantidad] = useState(1000);
  const [plazo, setPlazo] = useState(6);
  const [total, setTotal] = useState(calcularTotal(cantidad, plazo));
  const [pagoMensual, setPagoMensual] = useState(0);

  useEffect(() => {
    const valorTotal = calcularTotal(cantidad, plazo);
    setTotal(valorTotal);
    setPagoMensual(valorTotal / plazo);
  }, [cantidad, plazo]);

  const handleChangeCantidad = e => {
    setCantidad(parseInt(e.target.value));
  };

  const handleClickDecremento = () => {
    const valor = cantidad - 100;

    if (valor < MIN) {
      alert(`No se puede solicitar menos de ${MIN}`);
      return;
    }

    setCantidad(valor);
  };

  const handleClickAumento = () => {
    const valor = cantidad + 100;

    if (valor > MAX) {
      alert(`No se puede solicitar más de ${MAX}`);
      return;
    }

    setCantidad(valor);
  };

  const handleChangePlazo = e => {
    setPlazo(Number(e.target.value));
  };

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <div className="flex justify-between my-3">
        <Button icono="-" handleClick={handleClickDecremento} />
        <Button icono="+" handleClick={handleClickAumento} />
      </div>
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600 mt-5"
        onChange={handleChangeCantidad}
        min={MIN}
        max={MAX}
        step={100}
        value={cantidad}
      />
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
        {formatearDinero(cantidad)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-600">Plazo</span> a pagar
      </h2>
      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500"
        value={plazo}
        onChange={handleChangePlazo}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
        <option value="36">36 Meses</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 text-center">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-600">de pagos</span>
        </h2>
        <p className="text-xl text-gray-500 text-center font-bold">
          {plazo} Meses
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          Total: {formatearDinero(total)}
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          Cuota mensual: {formatearDinero(pagoMensual)}
        </p>
      </div>
    </div>
  );
};

export default App;
