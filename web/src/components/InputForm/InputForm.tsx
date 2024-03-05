import React, { useState } from 'react';
import './InputForm.css';

const InputForm: React.FC<{ onSubmit: (date: Date, smallDogs: number, bigDogs: number) => void }> = ({ onSubmit }) => {
    const [date, setDate] = useState<string>('');
    const [smallDogs, setSmallDogs] = useState<string>(''); // Inicialize com uma string vazia ('')
    const [bigDogs, setBigDogs] = useState<string>(''); // Inicialize com uma string vazia ('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validar se todos os campos estão preenchidos
        if (!date || !smallDogs || !bigDogs || parseInt(smallDogs) <= 0 || parseInt(bigDogs) <= 0) {
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
        onSubmit(parsedDate, parseInt(smallDogs), parseInt(bigDogs));
    }

    return (
        <div className='FormContainer'>
            <form className='Form' onSubmit={handleSubmit}>
                <h1> PetShops </h1>
                {/* DateInput */}
                <input className='DateInput' type="date" placeholder="Data" value={date} onChange={(e) => setDate(e.target.value)} />

                {/* SmallDogsInput */}
                <input className='DogsInput' type="number" placeholder="Quantidade de cães pequenos" value={smallDogs} onChange={(e) => setSmallDogs(e.target.value)} />

                {/* BigDogsInput */}
                <input className='DogsInput' type="number" placeholder="Quantidade de cães grandes" value={bigDogs} onChange={(e) => setBigDogs(e.target.value)} />

                {/* Button */}
                <button className='Button' type="submit">Calcular</button>
            </form>
        </div>
    )
};

export default InputForm;
