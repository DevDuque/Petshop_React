// React
import React, { useState } from 'react';

// Componentes e Utilidades
import InputForm from './components/InputForm/InputForm';
import { calculatePrice } from './utils/Calc';

function App() {
  const [result, setResult] = useState({ bestShop: "", totalPrice: 0 });

  const handleFormSubmit = (date: Date, smallDogs: number, bigDogs: number) => {
    const { bestShop, totalPrice } = calculatePrice(date, smallDogs, bigDogs);
    setResult({ bestShop, totalPrice });
  };

  return (
    <div className="App">
      <InputForm onSubmit={handleFormSubmit} />
      <h2>Melhor petshop: {result.bestShop} Preço Total: R$ {result.totalPrice.toFixed(2)}</h2>
    </div>
  );
}

export default App;
