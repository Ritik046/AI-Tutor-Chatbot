import fs from 'fs';
import path from 'path';

export async function loadRAGDocs() {
  const files = fs.readdirSync('./data');
  const docs = files.map(file => {
    const text = fs.readFileSync(path.join('./data', file), 'utf8');
    return { file, text };
  });
  return docs;
}

export function findRelevantChunks(query, docs) {
  return docs.map(doc => doc.text.slice(0, 500));
}
