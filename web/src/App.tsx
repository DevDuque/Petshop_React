import React, { useState } from 'react';

// Componentes e Utilidades
import InputForm from './components/InputForm/InputForm';
import { calculatePrice } from './utils/Calc';

function App() {
  const [result, setResult] = useState({ bestShop: "", totalPrice: 0 });
  // Estado para controlar se o formulário foi enviado
  const [formSubmitted, setFormSubmitted] = useState(false); 

  const handleFormSubmit = (date: Date, smallDogs: number, bigDogs: number) => {
    const { bestShop, totalPrice } = calculatePrice(date, smallDogs, bigDogs);
    setResult({ bestShop, totalPrice });
    setFormSubmitted(true); // Definindo o formulario como enviado
  };

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <InputForm onSubmit={handleFormSubmit} />
      {formSubmitted && ( // Renderizando o <h2> apenas se o formulário foi submetido
        <h2 style={{ textAlign: 'center', color: '#121212', fontSize: '24px', fontWeight: '800' }}>Melhor petshop: {result.bestShop} Preço Total: R$ {result.totalPrice.toFixed(2)}</h2>
      )}
    </div>
  );
}

export default App;
