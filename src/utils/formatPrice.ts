const formatPrice = (amount: number): string => {
    return Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }).format(amount);
}

const generateRandomThreeDigits = () => Math.floor(Math.random() * 900) + 100;
const generateRandomMillion = () => formatPrice(Math.floor(Math.random() * 9_000_000) + 1_000_000);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    formatPrice,
    generateRandomThreeDigits,
    generateRandomMillion
}