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
4. **Criação do `server.js` e script `npm start`**:
   - Permite que o projeto também rode caso você utilize a opção de "Aplicativo Node.js" da Hostinger.

---

## 🚀 Como publicar na Hostinger (Passo a Passo)

### Método 1: Hospedagem Compartilhada / Cloud (Mais comum e recomendado)

1. **Gere a pasta de produção**:
   - Execute no terminal:
     ```bash
     npm run build
     ```
   - Uma pasta chamada **`dist`** será gerada ou atualizada.

2. **Acesse a Hostinger**:
   - Entre no **hPanel** da Hostinger.
   - Vá em **Sites** > Selecione seu domínio > **Gerenciador de Arquivos** (File Manager).
   - Abra a pasta **`public_html`**.

3. **Limpe arquivos antigos**:
   - Se houver um arquivo `default.php` gerado pela Hostinger, apague-o.

4. **Envie o CONTEÚDO da pasta `dist`**:
   - ⚠️ **ATENÇÃO:** Não envie a pasta `dist` inteira como subpasta.
   - Envie os **arquivos que estão DENTRO de `dist`**:
     - `index.html`
     - pasta `assets/`
     - `.htaccess`
     - imagens (`camila_callegari.jpg`, `selo_callegari.png`, etc.)
   - Se preferir, compacte o conteúdo da pasta `dist` em um arquivo `.zip`, envie para `public_html` e use a opção **Extrair** (Extract) no Gerenciador da Hostinger.

5. **Pronto!**
   - Acesse seu domínio e o site carregará imediatamente, rápido e sem tela branca.

---

### Método 2: Usando a ferramenta "Aplicativo Node.js" da Hostinger

Se você estiver usando o recurso de Node.js no hPanel:
1. Conecte seu repositório Git ou envie os arquivos do projeto.
2. Em **Versão do Node.js**, selecione **Node 20** ou superior.
3. Em **Arquivo de entrada (Application startup file)**, defina: `server.js`.
4. Em **Comando de build**, defina: `npm run build`.
5. Clique em **Salvar** e **Iniciar aplicativo**.
