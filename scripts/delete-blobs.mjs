import { list, del } from '@vercel/blob';
import readline from 'readline'; 

const DRY_RUN = true;

const TARGET_PREFIX = 'slots/';


const askConfirmation = (query) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }));
};


async function main() {
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
        console.error("ERRO: A variável de ambiente BLOB_READ_WRITE_TOKEN não foi encontrada.");
        return;
    }

    if (DRY_RUN) {
        console.log('--- EXECUTANDO EM MODO DE SIMULAÇÃO (DRY RUN) ---');
        console.log('Nenhum arquivo será deletado. Apenas listando os alvos...');
    } else {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        console.log('!!!            ATENÇÃO: MODO DE EXCLUSÃO ATIVO            !!!');
        console.log('!!!        OS ARQUIVOS LISTADOS SERÃO DELETADOS         !!!');
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    }

    console.log(`\nProcurando por arquivos com o prefixo: '${TARGET_PREFIX || '(todos os arquivos)'}'`);
    
    const { blobs } = await list({ prefix: TARGET_PREFIX });

    if (blobs.length === 0) {
        console.log('Nenhum arquivo encontrado com o prefixo especificado. Nada a fazer.');
        return;
    }

    console.log(`Encontrados ${blobs.length} arquivos para processar:`);
    blobs.forEach(blob => console.log(`  - ${blob.pathname}`));

    if (DRY_RUN) {
        console.log('\n--- Simulação concluída. Para deletar, mude DRY_RUN para false no script. ---');
        return;
    }
    
    console.log('\nEsta ação é IRREVERSÍVEL.');
    const confirmation = await askConfirmation(`Para confirmar, digite o prefixo ('${TARGET_PREFIX}') e pressione Enter: `);
    
    if (confirmation.trim() !== TARGET_PREFIX) {
        console.log('Confirmação incorreta. Operação cancelada.');
        return;
    }

    console.log('Confirmação recebida. Deletando arquivos em paralelo...');
    
    const deletePromises = blobs.map(blob => del(blob.url));

    await Promise.all(deletePromises);

    console.log(`\n✅ ${blobs.length} arquivos foram deletados com sucesso.`);
    console.log('--- Operação de exclusão concluída. ---');
}

main();