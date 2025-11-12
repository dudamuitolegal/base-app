// scripts/process-slots.mjs (Versão Final - Uploads Sequenciais)
import { put } from '@vercel/blob';
import fs from 'fs/promises';
import path from 'path';

// --- CONFIGURAÇÃO ---
// Liste aqui as pastas (na raiz do projeto) que você quer processar.
const SOURCE_FOLDERS = ['upbet', 'betabet'];
const OUTPUT_JSON_FILENAME = 'slots.json';
// --------------------

async function main() {
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
        console.error("ERRO: A variável de ambiente BLOB_READ_WRITE_TOKEN não foi encontrada.");
        return;
    }

    console.log('--- Iniciando processamento de slots (Modo de Atualização) ---');

    const rootDir = process.cwd();
    const jsonFilePath = path.join(rootDir, OUTPUT_JSON_FILENAME);
    let finalJsonData = {};

    try {
        const existingJson = await fs.readFile(jsonFilePath, 'utf-8');
        finalJsonData = JSON.parse(existingJson);
        console.log(`Arquivo '${OUTPUT_JSON_FILENAME}' existente encontrado. Será atualizado.`);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        console.log(`Arquivo '${OUTPUT_JSON_FILENAME}' não encontrado. Um novo será criado.`);
    }

    for (const folderName of SOURCE_FOLDERS) {
        const folderPath = path.join(rootDir, folderName);
        console.log(`\nProcessando pasta: '${folderName}'...`);

        try {
            const files = await fs.readdir(folderPath);
            const imageFiles = files.filter(f => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(f));

            if (imageFiles.length === 0) {
                console.log('Nenhuma imagem encontrada. Pulando.');
                continue;
            }

            const results = [];
            // Loop sequencial para uploads mais estáveis
            for (const fileName of imageFiles) {
                const localFilePath = path.join(folderPath, fileName);
                const fileContent = await fs.readFile(localFilePath);
                const blobPath = path.join('slots', folderName, fileName).replace(/\\/g, '/');

                console.log(`  -> Fazendo upload de: ${blobPath}`);
                const blobResult = await put(blobPath, fileContent, {
                    access: 'public',
                    allowOverwrite: true,
                });

                const rawTitle = path.parse(fileName).name;
                const formattedTitle = rawTitle.replace(/-/g, ' ');
                
                results.push({
                    imageSrc: blobResult.url,
                    title: formattedTitle
                });
            }

            finalJsonData[folderName] = results;
            console.log(`'${folderName}' processada! ${results.length} itens adicionados/atualizados no JSON.`);

        } catch (error) {
            console.error(`ERRO ao processar a pasta '${folderName}': ${error.message}`);
        }
    }

    if (Object.keys(finalJsonData).length > 0) {
        const jsonString = JSON.stringify(finalJsonData, null, 2);
        await fs.writeFile(jsonFilePath, jsonString);
        console.log(`\n✅ Arquivo '${OUTPUT_JSON_FILENAME}' atualizado com sucesso!`);
        console.log("Próximo passo: rode 'npm run upload-data'.");
    } else {
        console.log("\nNenhum dado foi processado.");
    }

    console.log('\n--- Processamento de slots finalizado ---');
}

main();