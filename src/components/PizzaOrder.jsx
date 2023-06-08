import React, { useEffect, useState } from 'react';

const PizzaOrder = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [pizzaType, setPizzaType] = useState('');
  const pizzaOptions = ['Muzzarella', 'Napolitana', 'Cuatro Quesos', 'Fugazetta'];

  useEffect(() => {
    setIsMounted(true);

    const timer = setTimeout(() => {
      console.log('Cargando...');
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isMounted) {
      console.log('Componente actualizado');
    }
  }, [isMounted]);

  const handleCancel = () => {
    console.log('El Pedido fue cancelado');
    alert('El pedido fue cancelado');
  };

  const handlePizzaChange = (event) => {
    setPizzaType(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">Realizar Pedido</h1>
      <label className="label">
        Tipo de pizza 
        <select value={pizzaType} onChange={handlePizzaChange} className="select">
          <option value="">Seleccionar</option>
          {pizzaOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      {pizzaType && <p>Pizza seleccionada : {pizzaType}</p>}
      <button onClick={handleCancel} className="button">
        Cancelar Pedido
      </button>
    </div>
  );
};

export default PizzaOrder;

