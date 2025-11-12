import { put } from '@vercel/blob';
import { readFileSync } from 'fs';
import path from 'path';

const FILES_TO_UPLOAD = ['slots.json'];

async function uploadFile(fileName) {
  console.log(`Iniciando upload de ${fileName}...`);
  const filePath = path.join(process.cwd(), fileName);
  
  try {
    const fileContent = readFileSync(filePath);
    const blob = await put(fileName, fileContent, {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
    });
    console.log(`✅ Upload de ${fileName} concluído com sucesso! URL: ${blob.url}\n`);
  } catch (error) {
    console.error(`❌ Falha ao fazer upload de ${fileName}:`, error.message);
  }
}

// Função principal que orquestra os uploads
async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error("ERRO: A variável de ambiente BLOB_READ_WRITE_TOKEN não foi encontrada.");
    return;
  }
  
  console.log('--- Iniciando o envio de dados compartilhados para o Vercel Blob ---');
  
  for (const fileName of FILES_TO_UPLOAD) {
    await uploadFile(fileName);
  }
  
  console.log('--- Envio de dados finalizado. ---');
}

main();