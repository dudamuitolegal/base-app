import { put } from '@vercel/blob';
import { readFileSync } from 'fs';
import path from 'path';

async function uploadFile(fileName) {
    console.log(`Iniciando upload de ${fileName}...`);

    const filePath = path.join(process.cwd(), fileName);
    const fileContent = readFileSync(filePath);

    try {
        const blob = await put(fileName, fileContent, {
            access: 'public',
            addRandomSuffix: false,
            allowOverwrite: true
        });

        console.log(`✅ Upload de ${fileName} concluído com sucesso!`);
        console.log(`   URL: ${blob.url}\n`);
        return blob.url;
    } catch (error) {
        console.error(`❌ Falha no upload de ${fileName}:`, error.message);
    }
}

async function main() {
    console.log('--- Iniciando sincronização de dados globais com o Vercel Blob ---');

    if (!process.env.BLOB_READ_WRITE_TOKEN) {
        console.error("ERRO: Variável de ambiente BLOB_READ_WRITE_TOKEN não encontrada.");
        return;
    }

    await uploadFile('banners.json');
    await uploadFile('slots.json');

    console.log('--- Sincronização finalizada ---');
}

main();