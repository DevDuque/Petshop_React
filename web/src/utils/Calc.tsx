// Calcula do PetShop MeuCaninoFeliz
export const calculatePriceMeuCaninoFeliz = (date: Date, smallDogs: number, bigDogs: number): number => {
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // Verifica se é fim de semana
    
    const smallDogPrice = isWeekend ? 20 * 1.2 : 20;
    const bigDogPrice = isWeekend ? 40 * 1.2 : 40;
  
    return (smallDogPrice * smallDogs) + (bigDogPrice * bigDogs);
};

// Calcula do PetShop VaiRex
export const calculatePriceVaiRex = (date: Date, smallDogs: number, bigDogs: number): number => {
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // Verifica se é fim de semana
    
    const smallDogPrice = isWeekend ? 20 : 15;
    const bigDogPrice = isWeekend ? 55 : 50;
  
    return (smallDogPrice * smallDogs) + (bigDogPrice * bigDogs);
};
  
// Calcula do PetShop ChowChawgas
export const calculatePriceChowChawgas = (date: Date, smallDogs: number, bigDogs: number): number => {
    return 30 * smallDogs + 45 * bigDogs;
};

// Calcula preços como um todo
export const calculatePrice = (date: Date, smallDogs: number, bigDogs: number) => {
    // Preços dos banhos em cada petshop
    const meuCaninoFelizPrice = calculatePriceMeuCaninoFeliz(date, smallDogs, bigDogs);
    const vaiRexPrice = calculatePriceVaiRex(date, smallDogs, bigDogs);
    const chowChawgasPrice = calculatePriceChowChawgas(date, smallDogs, bigDogs);

    // Distâncias fixas entre o canil e os petshops (em km)
    const distanceToMeuCaninoFeliz = 2;
    const distanceToVaiRex = 1.7;
    const distanceToChowChawgas = 0.8;

    // Calcula o preço mínimo e o petshop correspondente
    let bestShop = "";
    let minPrice = Number.MAX_SAFE_INTEGER;

    // Verifica o preço mínimo
    if (meuCaninoFelizPrice < minPrice) {
        bestShop = "Meu Canino Feliz";
        minPrice = meuCaninoFelizPrice;
    }

    if (vaiRexPrice < minPrice) {
        bestShop = "Vai Rex";
        minPrice = vaiRexPrice;
    }
    
    if (chowChawgasPrice < minPrice) {
        bestShop = "ChowChawgas";
        minPrice = chowChawgasPrice;
    }

    // Verifica se há empate nos preços mínimos e considerar a distância
    if (meuCaninoFelizPrice === minPrice && distanceToMeuCaninoFeliz <= distanceToVaiRex && distanceToMeuCaninoFeliz <= distanceToChowChawgas) {
        bestShop = "Meu Canino Feliz";
    } else if (vaiRexPrice === minPrice && distanceToVaiRex <= distanceToMeuCaninoFeliz && distanceToVaiRex <= distanceToChowChawgas) {
        bestShop = "Vai Rex";
    } else if (chowChawgasPrice === minPrice && distanceToChowChawgas <= distanceToMeuCaninoFeliz && distanceToChowChawgas <= distanceToVaiRex) {
        bestShop = "ChowChawgas";
    }
    return { bestShop, totalPrice: minPrice };
};