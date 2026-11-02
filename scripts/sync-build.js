import fs from 'fs';
import path from 'path';

// Garante que tanto a pasta build/ quanto a pasta dist/ existam com os mesmos arquivos compilados
const buildPath = path.resolve('build');
const distPath = path.resolve('dist');

if (fs.existsSync(buildPath)) {
  fs.cpSync(buildPath, distPath, { recursive: true, force: true });
  console.log('✅ Arquivos compilados sincronizados com sucesso: build/ -> dist/');
} else if (fs.existsSync(distPath)) {
  fs.cpSync(distPath, buildPath, { recursive: true, force: true });
  console.log('✅ Arquivos compilados sincronizados com sucesso: dist/ -> build/');
}
