# Guia de Publicação na Hostinger - Callegari Engenharia

Este guia explica exatamente por que a tela branca ocorria e como subir o site com sucesso na Hostinger.

---

## 🔍 Por que a página ficava em branco na Hostinger?

1. **Upload dos arquivos-fonte em vez do Build (`dist`)**:
   - Se você enviou os arquivos brutos do projeto (`src/`, `package.json`, `index.html` da raiz), o navegador tentou carregar `<script src="/src/main.tsx">`. Como navegadores não executam arquivos `.tsx` (TypeScript) e a Hostinger não os compila automaticamente sem o build, o JavaScript falhava e a tela ficava totalmente branca.
2. **Caminhos Absolutos de Assets**:
   - Por padrão, o Vite gerava caminhos como `/assets/index.js`. Em domínios de teste, subpastas ou configurações da Hostinger, isso causava erro `404 Not Found` ao buscar os scripts.
3. **Ausência de `.htaccess` para Apache / LiteSpeed**:
   - A Hostinger utiliza servidores Apache/LiteSpeed. Sem o arquivo `.htaccess`, recarregamentos de página davam erro 404 e tipos MIME de módulos ES (`.js`/`.mjs`) podiam ser bloqueados pelo navegador.

---

## ✅ O que já foi corrigido no código:

1. **`vite.config.ts` ajustado com `base: './'`**:
   - Todos os scripts, estilos e imagens agora usam caminhos relativos universais (`./assets/...`), funcionando em qualquer domínio, subpasta ou URL temporária.
2. **Criação do `.htaccess` completo**:
   - Adicionado em `public/.htaccess` (que vai automaticamente para a pasta `dist/`).
   - Configura tipos MIME para JavaScript moderno, compressão Gzip/Deflate e redirecionamento SPA.
3. **Adição de `ErrorBoundary` no React**:
   - Evita que qualquer erro não tratado cause tela branca silenciosa.
5. **Compatibilidade total com plataformas de Build Automático (`build/` e `dist/`)**:
   - `vite.config.ts` configurado para gerar `build/` (atendendo ao padrão esperado pela Hostinger/plataformas de deploy).
   - Um script de sincronização automático gera tanto a pasta `build/` quanto a pasta `dist/` a cada `npm run build`, resolvendo de forma definitiva o erro *"No output directory found after build"*.
   - `server.js` atualizado para detectar automaticamente `build/` ou `dist/`.

---

## 🚀 Como publicar na Hostinger (Passo a Passo)

### Método 1: Hospedagem Compartilhada / Cloud (Upload dos arquivos)

1. **Gere os arquivos**:
   - Execute no terminal:
     ```bash
     npm run build
     ```
   - As pastas **`build`** e **`dist`** estarão prontas e com o mesmo conteúdo otimizado.

2. **Acesse o Gerenciador de Arquivos no hPanel**:
   - Abra a pasta **`public_html`**.
   - Se houver um arquivo `default.php` gerado pela Hostinger, apague-o.

3. **Envie o conteúdo de `build` (ou `dist`)**:
   - Envie os arquivos que estão DENTRO da pasta (`index.html`, pasta `assets/`, `.htaccess`, imagens).

---

### Método 2: Usando a ferramenta "Aplicativo Node.js" ou Git Deploy da Hostinger

1. Conecte seu repositório Git ou envie os arquivos (`package.json`, `server.js`, `vite.config.ts`, `src/`, etc.).
2. Em **Versão do Node.js**, selecione **Node 20** ou superior.
3. Em **Arquivo de entrada (Application startup file)**, defina: `server.js`.
4. Em **Comando de build (Build command)**: `npm run build`.
5. Em **Diretório de saída (Output directory)**: `build` (ou `dist`).
6. Clique em **Salvar** e **Iniciar aplicativo** / **Implantar**.
