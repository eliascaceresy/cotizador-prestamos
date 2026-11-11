import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";

const App = () => {
  const MIN = 1000;
  const MAX = 20000;

  const [cantidad, setCantidad] = useState(10000);

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
        {cantidad}
      </p>
    </div>
  );
};

export default App;
