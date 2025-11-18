import { Scene } from "./gameEngine";

export const GAME_SCENES: Record<string, Scene> = {
  // DAY 1 - OPENING
  day1_opening: {
    id: "day1_opening",
    title: "A Chegada em Vale Verde",
    narrative: `Você desce do ônibus com uma mochila nas costas e uma mala surrada na mão. O sol do fim de tarde queima sua pele enquanto você caminha pela rua de paralelepípedes de Vale Verde.

Casas iguais, gramados aparados, mas um ar de segredos atrás das cortinas. Sua nova kitnet é a número 47 – uma portinha azul descascada.

Com a chave tremendo na mão suada, você entra. O cheiro de mofo e poeira te envolve. A cama range ao sentar.

Suas economias? Zeradas. Fome latejando no estômago. E um calor estranho subindo pelo corpo...

É só o cansaço, ou algo mais?`,
    choices: [
      {
        text: "Tomar um banho para se refrescar",
        effects: { hunger: -5, hygiene: 10, energy: 5 },
        nextScene: "day1_bathroom",
      },
      {
        text: "Tentar dormir, está muito cansado(a)",
        effects: { hunger: -10, energy: 20 },
        nextScene: "day2_morning",
      },
      {
        text: "Explorar a kitnet, conhecer melhor o lugar",
        effects: { excitement: 5 },
        nextScene: "day1_exploration",
      },
    ],
  },

  day1_bathroom: {
    id: "day1_bathroom",
    title: "Banheiro da Kitnet",
    narrative: `Você entra no banheiro minúsculo. O azulejo está descascando, o espelho manchado reflete uma imagem cansada. O box é estreito, e há um cheiro de umidade que não sai.

Você liga o chuveiro. A água sai morna, depois quente. Que alívio.

Enquanto você se lava, sente o calor da água quente relaxar seus músculos tensos. O vapor sobe, embaçando o espelho. Por um momento, você esquece de suas preocupações.

Quando sai do chuveiro, se sente renovado(a). Mas a fome ainda lateja.`,
    choices: [
      {
        text: "Ir para a cozinha comer algo",
        effects: { hunger: -20, energy: 5 },
        nextScene: "day1_kitchen",
      },
      {
        text: "Ir direto para a cama, está muito cansado(a)",
        effects: { energy: 20, hunger: -5 },
        nextScene: "day2_morning",
      },
      {
        text: "Explorar mais a kitnet",
        effects: { excitement: 5 },
        nextScene: "day1_exploration",
      },
    ],
  },

  day1_kitchen: {
    id: "day1_kitchen",
    title: "Cozinha da Kitnet",
    narrative: `A cozinha é pequena e apertada. A pia enferrujada goteja constantemente. A geladeira antiga faz um barulho irritante.

Você abre a geladeira. Está vazia, exceto por uma garrafa de água e um pote de margarina velha.

No armário, encontra alguns pacotes de macarrão instantâneo, sal, e açúcar. Não é muito, mas é algo.

Você prepara um macarrão rápido e come em silêncio, sentado(a) na pequena mesa de plástico. O sabor é insosso, mas pelo menos sua fome diminui.

Enquanto come, ouve música vindo do apartamento ao lado. Uma voz feminina canta desafinada. Sua vizinha, talvez?`,
    choices: [
      {
        text: "Bater na porta de Sofia para se apresentar",
        effects: { reputation: 10, excitement: 5 },
        nextScene: "day1_sofia_meeting",
      },
      {
        text: "Ignorar e tentar dormir",
        effects: { excitement: -5, energy: 15 },
        nextScene: "day2_morning",
      },
      {
        text: "Continuar explorando a kitnet",
        effects: { excitement: 5 },
        nextScene: "day1_exploration",
      },
    ],
  },

  day1_exploration: {
    id: "day1_exploration",
    title: "Explorando a Kitnet",
    narrative: `Você caminha pela pequena kitnet, observando cada detalhe. A sala tem um sofá rasgado e uma TV antiga que faz chiado. A luz amarela fraca torna tudo um pouco deprimente.

Seu quarto é minúsculo, com uma cama que range ao menor movimento. A janela pequena dá para um beco escuro. Há um guarda-roupa empenado com suas três mudas de roupa.

Tudo é velho, gasto, mas é seu. Pelo menos por enquanto.

Você se senta na cama e pensa em como chegou aqui. Uma cidade nova, sem amigos, sem dinheiro, sem perspectivas claras. Mas há algo neste lugar... algo que o(a) intriga.

A noite está caindo. Você ouve mais barulhos do bairro agora. Vozes, carros, a música da vizinha ainda tocando.`,
    choices: [
      {
        text: "Bater na porta de Sofia para se apresentar",
        effects: { reputation: 10, excitement: 5 },
        nextScene: "day1_sofia_meeting",
      },
      {
        text: "Tentar dormir, está muito cansado(a)",
        effects: { energy: 20, excitement: -5 },
        nextScene: "day2_morning",
      },
      {
        text: "Ficar acordado(a) e pensar sobre o futuro",
        effects: { excitement: 10, energy: -10 },
        nextScene: "day1_night_thoughts",
      },
    ],
  },

  day1_sofia_meeting: {
    id: "day1_sofia_meeting",
    title: "Encontro com Sofia",
    narrative: `Você bate na porta. Demora alguns segundos, mas ela abre.

Sofia é uma mulher de aparência artística, cabelo despenteado, roupas coloridas e um sorriso caloroso. Seus olhos são curiosos e penetrantes.

"Oi! Você é o(a) novo(a) vizinho(a)? Que legal! Eu sou Sofia. Desculpa o barulho, eu estava praticando minha música. Quer entrar? Tenho um vinho aberto..."

Seu apartamento é caótico, colorido, com quadros e plantas por toda parte. Há instrumentos musicais espalhados. Sofia serve vinho em copos de vidro e se senta perto de você no sofá.

"Então, o que te traz para Vale Verde? Não é exatamente o lugar mais glamouroso, mas tem seu charme. Eu sou artista, sabe? Pinto, canto, faço um pouco de tudo. E você? Qual é sua história?"`,
    choices: [
      {
        text: "Ser honesto(a): Acabei de chegar, estou quebrado(a) e procurando emprego",
        effects: { reputation: 20, excitement: 15 },
        nextScene: "day1_sofia_honest",
      },
      {
        text: "Ser misterioso(a): Prefiro não falar muito sobre mim",
        effects: { excitement: 20 },
        nextScene: "day1_sofia_mysterious",
      },
      {
        text: "Ser educado(a) mas breve: Obrigado pelo vinho, mas preciso descansar",
        effects: { reputation: 5, energy: 10 },
        nextScene: "day2_morning",
      },
    ],
  },

  day1_sofia_honest: {
    id: "day1_sofia_honest",
    title: "Conversa com Sofia - Honesto",
    narrative: `Sofia ouve você com atenção, seus olhos brilhando de interesse.

"Ah, entendo. Vale Verde pode ser duro no começo, mas você vai se adaptar. Eu também passei por isso quando cheguei aqui."

Ela toma um gole de vinho e sorri.

"Sabe, conheço algumas pessoas que podem te dar uma mão. Vou pensar em algo. Quando quiser, vem aqui de novo, tá? Gosto de gente que é honesta."

Você passa algumas horas conversando com Sofia. Ela fala sobre sua arte, sobre o bairro, sobre os personagens estranhos que vivem por aqui. Há algo magnético nela, algo que o(a) atrai.

Quando você finalmente sai de seu apartamento, é noite fechada. Você se sente menos sozinho(a) do que antes.`,
    choices: [
      {
        text: "Voltar para a kitnet e dormir",
        effects: { energy: 15, excitement: 5 },
        nextScene: "day2_morning",
      },
    ],
  },

  day1_sofia_mysterious: {
    id: "day1_sofia_mysterious",
    title: "Conversa com Sofia - Mistério",
    narrative: `Sofia levanta uma sobrancelha, intrigada.

"Mistério... Gosto disso. Há algo em você, sabe? Algo que não consigo definir bem."

Ela se aproxima um pouco mais, seus olhos fixos nos seus.

"Quando quiser conversar, estou aqui. Gosto de pessoas com segredos."

Você passa a noite conversando com Sofia, mas mantendo suas distâncias emocionais. Ela parece respeitar isso, mas há uma tensão no ar. Uma tensão que o(a) deixa desconfortável e, ao mesmo tempo, excitado(a).

Quando você finalmente sai de seu apartamento, é noite fechada. Você se sente diferente. Intrigado(a). Atraído(a).`,
    choices: [
      {
        text: "Voltar para a kitnet e dormir",
        effects: { energy: 15, excitement: 15 },
        nextScene: "day2_morning",
      },
    ],
  },

  day1_night_thoughts: {
    id: "day1_night_thoughts",
    title: "Pensamentos Noturnos",
    narrative: `Você fica acordado(a), deitado(a) na cama, olhando para o teto. A noite em Vale Verde é diferente. Há sons estranhos, vozes ao longe, o barulho da cidade que nunca dorme completamente.

Você pensa em sua vida antes. Pensa em como chegou aqui. Pensa no futuro incerto que o(a) aguarda.

Mas há algo mais. Uma tensão que cresce em seu corpo. Um calor que não é apenas do cansaço.

Você tira a roupa e se deita sob o lençol fino. O ar quente da noite toca sua pele. Você pensa em Sofia, em seu sorriso, em seus olhos curiosos.

Seu corpo responde. Você tenta se distrair, mas é difícil. A excitação cresce.

Eventualmente, você cede ao cansaço e adormece, seus sonhos cheios de imagens estranhas e sensações confusas.`,
    choices: [
      {
        text: "Acordar e começar o Dia 2",
        effects: { energy: 10, excitement: 5 },
        nextScene: "day2_morning",
      },
    ],
  },

  // DAY 2 - MORNING
  day2_morning: {
    id: "day2_morning",
    title: "Manhã do Dia 2",
    narrative: `Você acorda com o sol entrando pela janela pequena do quarto. Seu corpo dói um pouco, mas você se sente melhor depois de dormir.

O cheiro de mofo ainda está presente, mas você já está se acostumando. Seu estômago reclama. Você precisa comer algo.

E trabalho? Você precisa urgentemente de dinheiro. Não pode ficar dependente de macarrão instantâneo para sempre.

Você se levanta e observa a kitnet ao amanhecer. Parece menos assustadora durante o dia. Há esperança aqui. Você só precisa encontrá-la.`,
    choices: [
      {
        text: "Comer algo da cozinha",
        effects: { hunger: -20 },
        nextScene: "day2_street",
      },
      {
        text: "Tomar banho primeiro, depois comer",
        effects: { hygiene: 15, hunger: -10, excitement: -5 },
        nextScene: "day2_street",
      },
      {
        text: "Sair direto para a rua, procurar emprego",
        effects: { hunger: -15, energy: -10 },
        nextScene: "day2_street",
      },
    ],
  },

  day2_street: {
    id: "day2_street",
    title: "Explorando a Rua",
    narrative: `Você sai da kitnet e caminha pelas ruas de Vale Verde. O bairro é tranquilo de manhã. Casas geminadas, vizinhos que observam discretamente das janelas.

Você vê um supermercado a alguns quarteirões de distância. Há também um parque verde ao fundo. E uma loja de roupas com o nome "Clara Boutique" em letras elegantes.

Enquanto você caminha, vê um homem atlético correndo no parque. Ele passa por você com um sorriso amigável e acena.

"Oi! Você é novo(a) por aqui? Bem-vindo(a) a Vale Verde!"

É João, um homem de aparência amigável e atlética.`,
    choices: [
      {
        text: "Parar e conversar com João",
        effects: { reputation: 10, excitement: 5 },
        nextScene: "day2_joao_adult_meeting",
      },
      {
        text: "Acenar de volta e continuar caminhando",
        effects: {},
        nextScene: "day2_supermarket",
      },
      {
        text: "Ignorar e seguir seu caminho",
        effects: { reputation: -5 },
        nextScene: "day2_supermarket",
      },
    ],
  },

  day2_joao_adult_meeting: {
    id: "day2_joao_adult_meeting",
    title: "Encontro com João",
    narrative: `Você para e conversa com João. Ele é um homem atlético, de aparência amigável, com um sorriso genuíno. Ele está em roupas de corrida e suado, mas não parece incomodado.

"Sou João. Moro aqui perto. Você acabou de chegar? Qual é seu nome?"

Você se apresenta. João ouve com interesse genuíno.

"Que legal! Bem-vindo(a) a Vale Verde. Se quiser, posso te mostrar alguns lugares legais do bairro. Tem um parque legal, um supermercado onde dá pra arrumar emprego, e uma loja de roupas que a dona é bem legal."

Ele parece ser uma pessoa genuinamente amigável. Talvez você tenha feito seu primeiro amigo no bairro.`,
    choices: [
      {
        text: "Ser amigável e contar sobre você",
        effects: { reputation: 20, excitement: 10 },
        nextScene: "day2_joao_friendly",
      },
      {
        text: "Ser educado(a) mas breve",
        effects: { reputation: 10 },
        nextScene: "day2_supermarket",
      },
      {
        text: "Ser misterioso(a)",
        effects: { excitement: 15 },
        nextScene: "day2_supermarket",
      },
    ],
  },

  day2_joao_friendly: {
    id: "day2_joao_friendly",
    title: "Conversa com João",
    narrative: `Você abre-se com João. Ele ouve pacientemente enquanto você fala sobre sua chegada em Vale Verde, suas dificuldades, suas esperanças.

"Cara, eu entendo. Quando cheguei aqui, também foi difícil. Mas o bairro cresce em você, sabe? As pessoas são legais, tem oportunidades."

João coloca uma mão em seu ombro.

"Quer correr comigo amanhã? Posso te mostrar mais do bairro. E depois, a gente toma um café. Conheço um lugar legal."

Você sente uma conexão genuína com João. Talvez Vale Verde não seja tão solitário quanto parecia.`,
    choices: [
      {
        text: "Aceitar o convite",
        effects: { reputation: 15 },
        nextScene: "day2_supermarket",
      },
      {
        text: "Dizer que vai pensar",
        effects: { reputation: 5 },
        nextScene: "day2_supermarket",
      },
    ],
  },

  day2_supermarket: {
    id: "day2_supermarket",
    title: "Supermercado",
    narrative: `Você entra no supermercado. A iluminação é fria e forte. O cheiro de produtos de limpeza, frutas maduras e ar-condicionado forte envolve você.

O lugar é relativamente vazio nesta hora da manhã. Você vê várias seções: hortifruti com cores vivas, corredor de produtos de limpeza, guloseimas e bebidas.

E no caixa, uma mulher elegante e fria observa tudo. Seus olhos são analíticos, como se estivessem catalogando informações sobre você.

É Ana.

"Bom dia. Bem-vindo(a). Procurando algo?" ela pergunta, sua voz neutra e profissional.`,
    choices: [
      {
        text: "Procurar emprego aqui no supermercado",
        effects: { reputation: 15, hunger: -5 },
        nextScene: "day2_ana_job",
      },
      {
        text: "Comprar comida com seu dinheiro limitado",
        effects: { money: -15, hunger: -30, reputation: 5 },
        nextScene: "day2_ana_customer",
      },
      {
        text: "Apenas observar, sem comprar nada",
        effects: {},
        nextScene: "day2_ana_observer",
      },
    ],
  },

  day2_ana_job: {
    id: "day2_ana_job",
    title: "Procurando Emprego",
    narrative: `Você se aproxima do caixa e pergunta sobre oportunidades de emprego.

Ana levanta uma sobrancelha, seus olhos fixos nos seus.

"Emprego? Deixa eu falar com o gerente. Volta amanhã. Talvez tenhamos algo para você."

Há algo intrigante em Ana. Ela é elegante, fria, mas há um brilho em seus olhos que sugere profundidade.

"Qual é seu nome?" ela pergunta.

Você se apresenta.

"Tudo bem, {name}. Volta amanhã pela manhã. Vou conversar com o gerente."

Você sai do supermercado com uma sensação de esperança. Talvez você consiga um emprego. Talvez as coisas melhorem.`,
    choices: [
      {
        text: "Ir para a Loja de Roupas - Clara Boutique",
        effects: {},
        nextScene: "day2_clara_boutique",
      },
      {
        text: "Voltar para a kitnet",
        effects: {},
        nextScene: "day2_end",
      },
    ],
  },

  day2_ana_customer: {
    id: "day2_ana_customer",
    title: "Cliente no Supermercado",
    narrative: `Você compra alguns itens básicos: pão, queijo, ovos, frutas. Nada muito caro, mas o suficiente para comer bem nos próximos dias.

Enquanto você coloca os itens no caixa, Ana os escaneia com eficiência. Seus olhos se encontram brevemente.

"Novo(a) no bairro?" ela pergunta, sua voz ainda neutra.

"Sim, cheguei ontem," você responde.

Ana faz um leve sorriso.

"Bem-vindo(a) a Vale Verde. Se precisar de algo, estou aqui."

Há algo intrigante em Ana. Ela é elegante, fria, mas há um brilho em seus olhos que sugere profundidade.

Você sai do supermercado com suas compras, sentindo-se um pouco melhor. Pelo menos você tem comida para os próximos dias.`,
    choices: [
      {
        text: "Ir para a Loja de Roupas - Clara Boutique",
        effects: {},
        nextScene: "day2_clara_boutique",
      },
      {
        text: "Voltar para a kitnet",
        effects: {},
        nextScene: "day2_end",
      },
    ],
  },

  day2_ana_observer: {
    id: "day2_ana_observer",
    title: "Observando o Supermercado",
    narrative: `Você caminha pelo supermercado, observando os produtos, as pessoas, o ambiente. Ana continua no caixa, observando tudo com seus olhos analíticos.

Você sente seu olhar em você enquanto você explora. Há algo intrigante em Ana. Ela é elegante, fria, mas há um brilho em seus olhos que sugere profundidade.

Eventualmente, você sai do supermercado sem comprar nada. Sua fome ainda lateja, mas você economizou seu dinheiro.

Enquanto você sai, Ana acena levemente para você. Um gesto discreto, mas significativo.`,
    choices: [
      {
        text: "Ir para a Loja de Roupas - Clara Boutique",
        effects: {},
        nextScene: "day2_clara_boutique",
      },
      {
        text: "Voltar para a kitnet",
        effects: {},
        nextScene: "day2_end",
      },
    ],
  },

  day2_clara_boutique: {
    id: "day2_clara_boutique",
    title: "Clara Boutique",
    narrative: `Você entra na loja de roupas. O ambiente é organizado, com araras de roupas por cor. O cheiro de perfume doce e tecido novo envolve você.

Há espelhos grandes e luz suave. Uma mulher elegante de 38 anos está organizando o estoque. É Clara.

Ao fundo, você vê um adolescente tímido ajudando. É João (adolescente). Ele parece nervoso quando você entra.

Clara se aproxima com um sorriso acolhedor.

"Oi! Bem-vindo(a) à Clara Boutique. Procurando algo?"

Há algo caloroso em Clara, mas também algo firme. Ela é uma mãe solo que trabalha duro.`,
    choices: [
      {
        text: "Procurar roupas para melhorar sua aparência",
        effects: { money: -20, reputation: 25, excitement: 5 },
        nextScene: "day2_clara_fitting_room",
      },
      {
        text: "Apenas olhar, não tem dinheiro para gastar",
        effects: {},
        nextScene: "day2_clara_looking",
      },
      {
        text: "Procurar emprego na loja",
        effects: { reputation: 20 },
        nextScene: "day2_clara_job",
      },
    ],
  },

  day2_clara_fitting_room: {
    id: "day2_clara_fitting_room",
    title: "Provador - Encontro com João",
    narrative: `Você escolhe algumas roupas e entra no provador. A cortina é fina, e há um espelho grande.

Enquanto você se veste, ouve passos. É João (adolescente). Ele parece nervoso.

"Desculpa! Eu... a minha mãe pediu para eu trazer mais roupas. Você... você precisa de algo?"

Ele está claramente desconfortável, mas há um brilho de curiosidade em seus olhos. Ele tenta não olhar diretamente para você, mas falha.

Há uma tensão no ar. Uma tensão que o(a) deixa desconfortável e, ao mesmo tempo, excitado(a).`,
    choices: [
      {
        text: "Ser educado(a) e amigável",
        effects: { reputation: 10, excitement: 15 },
        nextScene: "day2_clara_friendly",
      },
      {
        text: "Ser provocador(a)",
        effects: { excitement: 25, reputation: 5 },
        nextScene: "day2_clara_teasing",
      },
      {
        text: "Ignorar e continuar se vestindo",
        effects: { excitement: 10 },
        nextScene: "day2_clara_ignore",
      },
    ],
  },

  day2_clara_friendly: {
    id: "day2_clara_friendly",
    title: "Conversa Amigável com João",
    narrative: `Você sorri para João de forma amigável.

"Tudo bem, sem problema. Obrigado(a) por trazer as roupas."

João fica ainda mais nervoso, mas também parece aliviado.

"Tudo bem. Qualquer coisa, é só chamar."

Ele sai rapidamente, seu rosto vermelho. Você continua se vestindo, sentindo um leve sorriso nos lábios.

Quando você sai do provador, Clara está esperando.

"Ficou bom? Você tem um bom gosto. Meu filho é um pouco tímido, desculpa. Ele está em uma idade... complicada, sabe?"

Você passa algum tempo conversando com Clara. Ela é acolhedora, mas há algo firme em sua expressão. Ela é uma mãe solo que trabalha duro.

"Você parece ser uma pessoa legal. Se precisar de algo, pode contar comigo," ela diz antes de você sair.`,
    choices: [
      {
        text: "Voltar para a kitnet",
        effects: {},
        nextScene: "day2_end",
      },
    ],
  },

  day2_clara_teasing: {
    id: "day2_clara_teasing",
    title: "Provocação com João",
    narrative: `Você sorri de forma provocadora para João.

"Bem, você poderia me ajudar a escolher a roupa certa..."

João fica completamente vermelho. Seus olhos se desviam, mas você vê que ele está olhando para você discretamente.

"Eu... eu... desculpa!"

Ele sai rapidamente, praticamente correndo. Você ri para si mesmo(a), sentindo uma onda de excitação passar por você.

Quando você sai do provador, Clara está esperando. Seus olhos são perspicazes.

"Você assustou meu filho," ela diz, mas há um leve sorriso em seus lábios.

"Desculpa, ele é muito tímido," você responde.

Clara ri levemente.

"Verdade. Mas cuidado com ele. Ele é um bom menino."

Há uma conexão entre você e Clara. Uma compreensão silenciosa.`,
    choices: [
      {
        text: "Voltar para a kitnet",
        effects: {},
        nextScene: "day2_end",
      },
    ],
  },

  day2_clara_ignore: {
    id: "day2_clara_ignore",
    title: "Ignorando João",
    narrative: `Você continua se vestindo, fingindo que João não está lá.

Ele fica desconfortável e sai rapidamente, murmurando um "desculpa" quase inaudível.

Quando você sai do provador, Clara está esperando.

"Ficou bom? Você tem um bom gosto. Meu filho é um pouco tímido, desculpa. Ele está em uma idade... complicada, sabe?"

Você passa algum tempo conversando com Clara. Ela é acolhedora, mas há algo firme em sua expressão. Ela é uma mãe solo que trabalha duro.

"Se precisar de algo, pode contar comigo," ela diz antes de você sair.`,
    choices: [
      {
        text: "Voltar para a kitnet",
        effects: {},
        nextScene: "day2_end",
      },
    ],
  },

  day2_clara_looking: {
    id: "day2_clara_looking",
    title: "Olhando na Loja",
    narrative: `Você caminha pela loja, observando as roupas. Clara está ocupada organizando o estoque, e João está ao fundo, nervoso.

Você vê algumas roupas legais, mas sabe que não pode se permitir gastá-las agora. Sua prioridade é sobreviver, não se vestir bem.

Eventualmente, você sai da loja sem comprar nada. Clara acena para você quando você sai.

"Volta quando quiser!" ela grita.

Você sente que Clara é uma pessoa genuinamente amigável. Talvez você possa contar com ela no futuro.`,
    choices: [
      {
        text: "Voltar para a kitnet",
        effects: {},
        nextScene: "day2_end",
      },
    ],
  },

  day2_clara_job: {
    id: "day2_clara_job",
    title: "Procurando Emprego na Loja",
    narrative: `Você se aproxima de Clara e pergunta sobre oportunidades de emprego.

Clara levanta uma sobrancelha, seus olhos perspicazes observando você.

"Emprego? Deixa eu pensar. Eu poderia usar uma mão extra, especialmente nos fins de semana. Volta amanhã e a gente conversa melhor, tá?"

Há algo acolhedor em Clara, mas também algo firme. Ela é uma mãe solo que trabalha duro e não toma decisões precipitadas.

"Qual é seu nome?" ela pergunta.

Você se apresenta.

"Tudo bem, {name}. Volta amanhã. Vamos conversar sobre isso."

Você sai da loja com uma sensação de esperança. Talvez você consiga um emprego aqui também. Talvez as coisas realmente melhorem.`,
    choices: [
      {
        text: "Voltar para a kitnet",
        effects: {},
        nextScene: "day2_end",
      },
    ],
  },

  day2_end: {
    id: "day2_end",
    title: "Retorno à Kitnet - Noite do Dia 2",
    narrative: `Você retorna à sua kitnet ao anoitecer. O bairro mudou. As ruas estão mais vazias, e há um ar de mistério.

As luzes das casas acendem, e você vê sombras atrás das cortinas. Vale Verde tem segredos. Você está começando a perceber isso.

Você entra em sua kitnet, cansado(a) mas esperançoso(a). Você conheceu pessoas. Você procurou emprego. Você está começando a se estabelecer aqui.

Enquanto você se prepara para dormir, pensa em Sofia, em João, em Ana, em Clara. Cada um deles é uma possibilidade. Cada um deles é um fio em uma teia que está começando a se tecer.

Vale Verde está revelando seus segredos lentamente. E você está no centro disso.

Você dorme com sonhos estranhos e despertares noturnos, seu corpo ainda se ajustando a este novo lugar, a esta nova vida.`,
    choices: [
      {
        text: "Dormir cedo, recuperar energia",
        effects: { energy: 20, excitement: -10 },
        nextScene: "day3_coming_soon",
      },
      {
        text: "Ficar acordado(a) e pensar sobre o dia",
        effects: { excitement: 15, energy: -10 },
        nextScene: "day3_coming_soon",
      },
      {
        text: "Tomar banho e depois dormir",
        effects: { hygiene: 10, energy: 15, excitement: -5 },
        nextScene: "day3_coming_soon",
      },
    ],
  },

  day3_coming_soon: {
    id: "day3_coming_soon",
    title: "Fim do Dia 2",
    narrative: `Você adormece, seu corpo finalmente relaxando depois de um dia longo e cheio de descobertas.

Seus sonhos são estranhos e vívidos. Você vê rostos, ouve vozes, sente sensações que não consegue explicar completamente.

Quando você acorda no dia 3, sente que algo mudou. Vale Verde não é mais um lugar estranho. É um lugar cheio de possibilidades.

Mas também é um lugar cheio de mistérios. E você ainda tem muito a descobrir.

---

**Fim do Dia 2**

Parabéns! Você completou os dois primeiros dias de Evergreen Vale. Nos próximos dias, você descobrirá mais sobre os personagens, enfrentará desafios maiores e fará escolhas que moldarão seu destino.

Volte em breve para continuar sua jornada em Vale Verde!`,
    choices: [
      {
        text: "Voltar à Landing Page",
        effects: {},
        nextScene: "day1_opening",
      },
    ],
  },
};
