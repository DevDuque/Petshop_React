import React, { useState } from 'react';

const InputForm: React.FC<{ onSubmit: (date: Date, smallDogs: number, bigDogs: number) => void }> = ({ onSubmit }) => {
    const [date, setDate] = useState<string>('');
    const [smallDogs, setSmallDogs] = useState<number>(0);
    const [bigDogs, setBigDogs] = useState<number>(0);

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar se todos os campos estão preenchidos
    if (!date || smallDogs <= 0 || bigDogs <= 0) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Extrair dia, mês e ano da string da data no formato brasileiro (DD-MM-YYYY)
    const [day, month, year] = date.split('-').map(Number);

    // Criar a data no formato ISO (YYYY-MM-DD)
    const isoDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    // Criar a instância de Date a partir da data no formato ISO
    const parsedDate = new Date(isoDate);

    // Chamar a função onSubmit com os dados
    onSubmit(parsedDate, smallDogs, bigDogs);
}
    
    return (
        <form onSubmit={handleSubmit}>
            {/* DateInput */}
            <input type="date" placeholder="Data" value={date} onChange={(e) => setDate(e.target.value)} />

            {/* SmallDogsInput */}
            <input type="number" placeholder="Quantidade de cães pequenos" value={smallDogs} onChange={(e) => setSmallDogs(parseInt(e.target.value))} />

            {/* BigDogsInput */}
            <input type="number" placeholder="Quantidade de cães grandes" value={bigDogs} onChange={(e) => setBigDogs(parseInt(e.target.value))} />

            {/* Button */}
            <button type="submit">Calcular</button>
        </form>
    )
};

export default InputForm;
