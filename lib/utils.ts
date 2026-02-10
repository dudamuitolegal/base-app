import type { Slot } from './data';
/**
 * Embaralha um array de forma eficiente usando o algoritmo Fisher-Yates.
 * @param array O array de slots a ser embaralhado.
 * @returns Um novo array com os elementos embaralhados.
 */


export const shuffleArray = (array: Slot[]): Slot[] => {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
};

/**
 * Converte uma string para o formato Title Case.
 * Ex: "fortune tiger" se torna "Fortune Tiger".
 * @param str A string de entrada.
 * @returns A string formatada em Title Case.
 */
export const toTitleCase = (str: string): string => {
  if (!str) return ''; // Retorna string vazia se a entrada for nula ou vazia
  
  return str
    .toLowerCase() // Garante que o resto da palavra esteja em minúsculas
    .split(' ') // Divide a string em um array de palavras
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza a primeira letra de cada palavra
    .join(' '); // Junta as palavras de volta em uma única string
};