# Instruções de Publicação - Evergreen Vale

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:

- Uma conta no [GitHub](https://github.com)
- Uma conta no [Vercel](https://vercel.com)
- Git instalado no seu computador
- Node.js 18+ instalado (para testes locais)

---

## 🚀 Passo 1: Preparar o Repositório GitHub

### 1.1 Criar um novo repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nomeie o repositório como `evergreen-vale`
3. Escolha "Public" (para que o Vercel possa acessar)
4. Não inicialize com README, .gitignore ou license (você já tem esses arquivos)
5. Clique em "Create repository"

### 1.2 Fazer o commit e push dos arquivos

Na pasta do projeto (`evergreen-vale`), execute os seguintes comandos:

```bash
# Inicializar git (se ainda não estiver inicializado)
git init

# Adicionar todos os arquivos
git add .

# Fazer o commit inicial
git commit -m "Initial commit: Evergreen Vale game with landing page and Days 1-2"

# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu usuário GitHub)
git remote add origin https://github.com/SEU_USUARIO/evergreen-vale.git

# Fazer o push para a branch main
git branch -M main
git push -u origin main
```

---

## 🌐 Passo 2: Publicar no Vercel

### 2.1 Conectar o Vercel ao GitHub

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione "Import Git Repository"
4. Autorize o Vercel a acessar sua conta GitHub
5. Procure por `evergreen-vale` e selecione

### 2.2 Configurar o projeto no Vercel

1. **Project Name**: `evergreen-vale`
2. **Framework**: Selecione "Other" ou deixe em branco (o Vercel detectará automaticamente)
3. **Root Directory**: Deixe em branco (padrão)
4. **Build Command**: `pnpm build`
5. **Output Directory**: `dist`
6. **Install Command**: `pnpm install`

### 2.3 Variáveis de Ambiente (se necessário)

Se o seu projeto precisar de variáveis de ambiente, adicione-as em:
- Settings → Environment Variables

Para este projeto inicial, nenhuma variável de ambiente é necessária.

### 2.4 Deploy

Clique em "Deploy" e aguarde a conclusão. O Vercel fornecerá uma URL pública para seu jogo.

---

## 📝 Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
evergreen-vale/
├── client/
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── components/      # Componentes React reutilizáveis
│   │   ├── lib/            # Lógica do jogo (gameEngine, gameScenes)
│   │   ├── pages/          # Páginas (Home, Game)
│   │   ├── contexts/       # Contextos React
│   │   ├── App.tsx         # Roteamento principal
│   │   └── main.tsx        # Entrada da aplicação
│   └── index.html          # HTML principal
├── GAME_SCRIPT_DAYS_1_2.md # Roteiro detalhado dos Dias 1 e 2
├── DEPLOYMENT_INSTRUCTIONS.md # Este arquivo
├── todo.md                 # Tarefas do projeto
└── package.json            # Dependências do projeto
```

---

## 🎮 Funcionalidades Implementadas

### Landing Page
- Design responsivo com tema escuro
- Seção "About Evergreen Vale" com descrição do jogo
- Seção de features destacando os principais aspectos
- CTA (Call to Action) para iniciar o jogo
- Footer com informações

### Tela de Criação de Personagem
- Campo para inserir o nome do personagem
- Seleção de gênero (Masculino/Feminino)
- Seleção de arquétipo de alma com efeitos de medidores
- Validação de entrada

### Mecanismos do Jogo
- **Sistema de Medidores**: Dinheiro, Fome, Higiene, Excitação, Reputação, Energia
- **Sistema de Tempo**: Manhã, Tarde, Noite com progressão de dias
- **Sistema de Cenas**: Narrativa imersiva com escolhas que afetam os medidores
- **NPCs**: Sofia, Marcus, João (adulto), Ana, Clara, João (adolescente)

### Conteúdo Narrativo
- **Dia 1**: Chegada em Vale Verde, exploração da kitnet, encontro com Sofia
- **Dia 2**: Exploração do bairro, supermercado, parque, loja de roupas, encontros com NPCs

---

## 🔄 Atualizações Futuras

Para adicionar novos conteúdos ao jogo:

1. Adicione novas cenas ao arquivo `client/src/lib/gameScenes.ts`
2. Atualize o `GAME_SCRIPT_DAYS_1_2.md` com o novo roteiro
3. Faça commit e push das mudanças
4. O Vercel será acionado automaticamente para fazer o redeploy

---

## 🛠️ Desenvolvimento Local

Para testar o projeto localmente:

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Acessar em http://localhost:5173
```

---

## 📞 Suporte

Se encontrar problemas durante a publicação:

1. Verifique se todos os arquivos foram commitados corretamente
2. Verifique os logs do Vercel (disponíveis no dashboard)
3. Certifique-se de que o `package.json` está correto
4. Verifique se as dependências estão listadas corretamente

---

## ✅ Checklist de Publicação

- [ ] Repositório GitHub criado
- [ ] Arquivos commitados e pusheados para o GitHub
- [ ] Projeto conectado ao Vercel
- [ ] Variáveis de ambiente configuradas (se necessário)
- [ ] Deploy realizado com sucesso
- [ ] URL pública acessível e funcionando
- [ ] Landing page carregando corretamente
- [ ] Tela de criação de personagem funcionando
- [ ] Jogo iniciando e cenas exibindo corretamente

---

Parabéns! Seu jogo Evergreen Vale está pronto para ser publicado! 🎉
