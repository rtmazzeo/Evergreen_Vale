# Integração Patreon + Google Analytics 4 - Guia de Setup

## 📊 Visão Geral

Este guia explica como configurar o Google Analytics 4 (GA4) para rastrear eventos do Patreon e outras métricas importantes do Evergreen Vale.

---

## 🔧 Passo 1: Criar Propriedade no Google Analytics 4

### 1.1 Acessar Google Analytics

1. Acesse [analytics.google.com](https://analytics.google.com)
2. Faça login com sua conta Google
3. Clique em **"Create"** ou **"Criar"** (canto inferior esquerdo)

### 1.2 Criar Nova Propriedade

1. Selecione **"Web"** como tipo de propriedade
2. Preencha os dados:
   - **Nome da propriedade**: "Evergreen Vale"
   - **URL do site**: `https://evergreen-vale.vercel.app`
   - **Fuso horário**: Selecione seu fuso horário
   - **Moeda**: BRL (Real Brasileiro)

3. Clique em **"Create"** (Criar)

### 1.3 Obter Measurement ID

Após criar a propriedade, você receberá um **Measurement ID** (formato: `G-XXXXXXXXXX`)

**Copie este ID** - você precisará dele em breve.

---

## 🔐 Passo 2: Adicionar Measurement ID ao Projeto

### 2.1 Criar Variável de Ambiente

No arquivo `.env.local` (ou `.env.production` para produção), adicione:

```env
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

Substitua `G-XXXXXXXXXX` pelo seu Measurement ID real.

### 2.2 Inicializar Google Analytics no App

No arquivo `client/src/main.tsx`, adicione:

```typescript
import { initializeGA4 } from './lib/analytics';

// Inicializar GA4 se o Measurement ID estiver disponível
const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID;
if (measurementId) {
  initializeGA4(measurementId);
}
```

---

## 📈 Passo 3: Eventos Rastreados

O projeto já está configurado para rastrear os seguintes eventos:

### Eventos de Patreon

| Evento | Descrição | Dados Capturados |
|--------|-----------|------------------|
| `patreon_click` | Clique no botão Patreon | position, event_category, event_label |
| `patreon_card_view` | Visualização do card Patreon | position, event_category, event_label |

### Eventos de Jogo

| Evento | Descrição | Dados Capturados |
|--------|-----------|------------------|
| `game_start` | Início do jogo | character_name, character_gender, character_archetype |
| `scene_view` | Visualização de cena | scene_id, day, period |
| `game_choice` | Escolha feita no jogo | scene_id, choice_index, choice_text |

### Eventos de Navegação

| Evento | Descrição | Dados Capturados |
|--------|-----------|------------------|
| `page_view` | Visualização de página | page_name |
| `button_click` | Clique em botão | button_name, location |

---

## 📊 Passo 4: Criar Dashboard Customizado no GA4

### 4.1 Acessar Relatórios

1. No Google Analytics, vá para **"Reports"** (Relatórios)
2. Clique em **"Create"** (Criar novo relatório)

### 4.2 Criar Relatório de Patreon

1. Selecione **"Exploration"** (Exploração)
2. Configure:
   - **Rows**: `Event name`
   - **Columns**: `Event count`, `Users`
   - **Filter**: `Event name` = `patreon_click` ou `patreon_card_view`

### 4.3 Salvar Relatório

Clique em **"Save"** e nomeie como "Patreon Engagement"

---

## 🎯 Passo 5: Rastrear Eventos Customizados

### 5.1 Rastrear Clique em Patreon (Automático)

O componente `PatreonCard` já rastreia automaticamente:

```typescript
// Quando o usuário clica no botão Patreon
trackPatreonClick(position); // position: "section", "footer", "sidebar"
```

### 5.2 Rastrear Eventos do Jogo (Manual)

Para rastrear eventos do jogo, importe e use as funções do arquivo `analytics.ts`:

```typescript
import { trackGameStart, trackSceneView, trackChoice } from '@/lib/analytics';

// Quando o jogo começa
trackGameStart("Maria", "female", "nerd");

// Quando uma cena é visualizada
trackSceneView("day1_bathroom", 1, "afternoon");

// Quando uma escolha é feita
trackChoice("day1_bathroom", 0, "Tomar um banho");
```

---

## 📱 Passo 6: Métricas Importantes a Monitorar

### Taxa de Clique em Patreon (CTR)

**Cálculo**: (Cliques em Patreon / Visualizações da Página) × 100

**Objetivo**: Manter acima de 2-5%

### Conversão de Patreon

**Métrica**: Quantos visitantes clicam no link do Patreon

**Rastreamento**: Evento `patreon_click`

### Engajamento do Jogo

**Métrica**: Tempo médio de sessão, taxa de bounce, eventos de jogo

**Rastreamento**: Eventos `game_start`, `scene_view`, `game_choice`

### Dispositivos e Localização

**Métrica**: Qual dispositivo (mobile/desktop) tem maior CTR de Patreon

**Rastreamento**: Automático no GA4

---

## 🔍 Passo 7: Visualizar Dados em Tempo Real

### 7.1 Real-time Report

1. No Google Analytics, vá para **"Reports"** → **"Real-time"**
2. Você verá eventos acontecendo em tempo real
3. Útil para testar se o rastreamento está funcionando

### 7.2 Testar Rastreamento Localmente

1. Abra o projeto localmente (`pnpm dev`)
2. Abra o DevTools (F12)
3. Vá para a aba **"Network"** e procure por requisições para `google-analytics.com`
4. Clique no botão Patreon e verifique se a requisição foi enviada

---

## 📋 Passo 8: Configurar Conversões (Opcional)

### 8.1 Marcar Clique em Patreon como Conversão

1. No Google Analytics, vá para **"Admin"** → **"Conversions"**
2. Clique em **"New conversion event"**
3. Configure:
   - **Event name**: `patreon_click`
   - **Descrição**: "User clicked on Patreon button"
4. Clique em **"Create"**

Agora você poderá rastrear a "taxa de conversão" de Patreon no GA4.

---

## 🚀 Passo 9: Deploy no Vercel

### 9.1 Adicionar Variável de Ambiente

1. Acesse o dashboard do Vercel
2. Vá para **Settings** → **Environment Variables**
3. Adicione:
   - **Key**: `VITE_GA4_MEASUREMENT_ID`
   - **Value**: `G-XXXXXXXXXX` (seu Measurement ID)
4. Clique em **Save**

### 9.2 Fazer Deploy

1. Faça commit e push das mudanças para o GitHub
2. O Vercel fará o deploy automaticamente
3. Verifique se o GA4 está rastreando eventos em tempo real

---

## 📊 Passo 10: Interpretar Dados

### Exemplos de Relatórios Úteis

**Relatório 1: Cliques em Patreon por Página**
- Mostra em qual página os usuários mais clicam no Patreon
- Ajuda a otimizar a posição do card

**Relatório 2: Conversão por Dispositivo**
- Mostra se mobile ou desktop tem melhor CTR
- Ajuda a otimizar o design responsivo

**Relatório 3: Funil de Jogo**
- Mostra quantos usuários começam o jogo, quantos chegam ao Dia 2, etc.
- Ajuda a identificar onde os usuários abandonam

---

## 🔗 Recursos Úteis

- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/10089681)
- [GA4 Event Tracking Guide](https://support.google.com/analytics/answer/9234069)
- [Custom Events in GA4](https://support.google.com/analytics/answer/9267744)

---

## ❓ Troubleshooting

### Eventos não aparecem no GA4

1. Verifique se o Measurement ID está correto
2. Verifique se a variável de ambiente foi adicionada
3. Verifique o console do navegador (F12) para erros
4. Aguarde 24-48 horas para que os dados apareçam no GA4

### Dados não aparecem em tempo real

1. Acesse a aba "Real-time" no GA4
2. Clique no botão Patreon na página
3. Os eventos devem aparecer em tempo real

### Script do GA4 não está carregando

1. Verifique se `initializeGA4()` foi chamado em `main.tsx`
2. Verifique se o Measurement ID está correto
3. Verifique o console do navegador para erros de CORS

---

## 📞 Suporte

Para mais informações sobre Google Analytics 4, visite a [Central de Ajuda do Google Analytics](https://support.google.com/analytics).

Para dúvidas sobre o Patreon, visite [patreon.com/help](https://patreon.com/help).
