// ALICIAPEDIA - JAVASCRIPT COMPLETO

// ==================== TERMS OF RESPONSIBILITY GATE ====================

// Accept terms (no persistence - resets on every page load)
function acceptTerms() {
    const overlay = document.getElementById('termsGateOverlay');
    if (overlay) {
        overlay.style.animation = 'fadeOut 0.5s ease-out';
        setTimeout(() => {
            overlay.classList.add('hidden');
        }, 500);
    }
    console.log('✅ Termos aceitos (somente para esta sessão de página)');
}

// Make decline button run away from cursor
function makeDeclineButtonRunAway() {
    const declineButton = document.getElementById('termsDeclineButton');
    const declineMessage = document.getElementById('termsDeclineMessage');
    
    if (!declineButton) return;
    
    let isRunningAway = false;
    
    declineButton.addEventListener('mouseenter', () => {
        if (isRunningAway) return;
        
        isRunningAway = true;
        declineButton.classList.add('running-away');
        
        // Random new position
        const maxX = window.innerWidth - declineButton.offsetWidth - 40;
        const maxY = window.innerHeight - declineButton.offsetHeight - 40;
        const newX = Math.random() * maxX + 20;
        const newY = Math.random() * maxY + 20;
        
        declineButton.style.left = newX + 'px';
        declineButton.style.top = newY + 'px';
        
        setTimeout(() => {
            isRunningAway = false;
        }, 300);
    });
    
    declineButton.addEventListener('click', () => {
        // Show message
        if (declineMessage) {
            declineMessage.style.display = 'block';
            
            // Hide message after 3 seconds
            setTimeout(() => {
                declineMessage.style.display = 'none';
            }, 3000);
        }
    });
}

// Initialize terms gate on page load
function initTermsGate() {
    const overlay = document.getElementById('termsGateOverlay');
    const acceptButton = document.getElementById('termsAcceptButton');
    
    if (!overlay) return;
    
    // Always show terms gate on every page load (no persistence)
    overlay.classList.remove('hidden');
    console.log('📜 Mostrando Termo de Responsabilidade (sempre aparece em cada reload)');
    
    // Accept button handler
    if (acceptButton) {
        acceptButton.addEventListener('click', acceptTerms);
    }
    
    // Make decline button interactive
    makeDeclineButtonRunAway();
}

// Add fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);

// ==================== DADOS ====================

const CASE_FILES = [
    {
        id: "001",
        title: "Incidente #001 — A Violação do Protocolo Grudento",
        report: "A investigada declarou oficialmente que não gosta de contato físico afetuoso demais. O investigador resolveu testar essa afirmação repetidamente, por pura curiosidade científica, durante vários minutos seguidos. A reação foi classificada como 'raiva falsa, irritação real'.",
        status: "Pesquisa em Andamento",
        statusColor: "yellow"
    },
    {
        id: "002",
        title: "Incidente #002 — O Incidente do Banheiro",
        report: "Após uma noite de sobriedade reduzida, a investigada precisou de assistência para lavar os pés logo após sair do banheiro. O investigador cumpriu a tarefa sem reclamar, consolidando seu status de empregado pessoal não remunerado.",
        status: "Caso Encerrado — Gratidão: Pendente",
        statusColor: "green"
    }
];

const TERMS = [
    {
        clause: "4",
        text: "A parte reserva-se o direito de criticar quem 'fala enrriba' dos outros, apesar de frequentemente pronunciar ou usar palavras erradas ela mesma. Isso não está em discussão."
    },
    {
        clause: "7",
        text: "A parte desenvolverá uma obsessão intensa e temporária por exatamente um meme por semana. Essa obsessão é inegociável e será repetida em toda oportunidade disponível até novo aviso."
    },
    {
        clause: "9",
        text: "A parte requer um tempo médio de decisão de vários dias úteis, seguido de arrependimento imediato independentemente do resultado."
    }
];

const CONTRADICTIONS = [
    {
        id: "01",
        title: "O Paradoxo do Enrriba",
        claim: "Odeio quando as pessoas falam enrriba dos outros.",
        reality: "Também fala tudo errado com frequência, sem perceber.",
        level: 92
    }
];

const LAWS = [
    "Se Alicia disse, provavelmente é verdade.",
    "Toda conversa eventualmente menciona Alicia.",
    "O caminho mais curto entre dois pontos envolve Alicia.",
    "Alicia está sempre exatamente onde o enredo precisa dela.",
    "Coincidências envolvendo Alicia nunca são apenas coincidências.",
    "A probabilidade de Alicia estar certa é diretamente proporcional à complexidade da situação.",
    "Quando em dúvida, pergunte a Alicia.",
    "Alicia desafia a segunda lei da termodinâmica regularmente.",
    "O tempo é relativo, especialmente quando Alicia está atrasada.",
    "Alicia pode fazer duas coisas ao mesmo tempo e ambas perfeitamente.",
    "A lei da gravidade não se aplica totalmente a Alicia.",
    "Alicia consegue encontrar qualquer coisa, exceto suas próprias chaves.",
    "Todo problema tem uma solução, e geralmente é Alicia.",
    "Alicia pode transformar caos em ordem com um único olhar.",
    "A energia de Alicia não pode ser criada nem destruída, apenas redirecionada.",
    "Alicia tem uma resposta para tudo, mesmo que não faça sentido.",
    "O universo conspira a favor de Alicia.",
    "Alicia pode prever o futuro, mas escolhe não estragar a surpresa.",
    "Todo meme bom menciona Alicia de alguma forma.",
    "Alicia é a resposta para perguntas que ainda não foram feitas."
];

const FACTS = [
    "A gravidade existe porque Alicia aprovou.",
    "Sinais de Wi-Fi ficam mais fortes perto de Alicia.",
    "O tempo passa ligeiramente mais rápido quando Alicia está se divertindo.",
    "Cientistas ainda estão tentando explicar Alicia.",
    "O sol nasce toda manhã só para verificar se Alicia acordou.",
    "A Lua segue Alicia para onde quer que ela vá.",
    "GPS recalcula rotas para passar por onde Alicia está.",
    "Café fica mais forte quando preparado por Alicia.",
    "As estações do ano mudam de acordo com o humor de Alicia.",
    "Plantas crescem 47% mais rápido perto de Alicia.",
    "Alicia pode resolver equações diferenciais com os olhos fechados.",
    "A velocidade da luz é constante, exceto quando Alicia tem pressa.",
    "Alicia descobriu a fórmula da felicidade, mas perdeu o papel.",
    "Eletrodomésticos funcionam melhor quando Alicia está por perto.",
    "Alicia consegue fazer água ferver apenas olhando para ela.",
    "O número Pi é redondo porque Alicia quis assim.",
    "Alicia pode ler 300 páginas por minuto (quando quer).",
    "Meteorologistas consultam Alicia para previsões do tempo.",
    "Alicia tem um sexto sentido que detecta quando alguém está falando dela.",
    "A física quântica funciona diferente para Alicia.",
    "Alicia pode silenciar uma sala inteira apenas entrando nela.",
    "Nuvens se afastam quando Alicia quer ver as estrelas.",
    "Alicia sabe quando algo vai quebrar exatamente um dia antes.",
    "A sorte de Alicia é matematicamente impossível, mas acontece mesmo assim."
];

const SAYINGS = [
    "Todo caminho leva a Alicia.",
    "Melhor tarde do que Alicia.", 
    "Mantenha a calma e pergunte a Alicia.",
    "A sorte favorece Alicia.",
    "Lar é onde Alicia está.",
    "Quem tem Alicia tem tudo.",
    "Diga-me com quem Alicia anda e te direi quem és.",
    "Alicia não nasce feita.",
    "Águas passadas movem Alicia.",
    "Quem espera sempre Alicia.",
    "Alicia certa no lugar certo.",
    "Mais vale Alicia na mão do que dois voando.",
    "Alicia em boca fechada não entra mosca.",
    "Quando Alicia quer, nada pode.",
    "Alicia com Alicia se paga.",
    "Em terra de cego, Alicia é rainha.",
    "Quem vê Alicia vê coração.",
    "Alicia não cai longe da árvore.",
    "Depois da tempestade vem Alicia.",
    "Alicia que fala, Alicia que faz.",
    "Santo de casa faz Alicia.",
    "Alicia e água não se misturam (mas deveriam).",
    "A pressa é inimiga de Alicia.",
    "Nem tudo que reluz é Alicia.",
    "Alicia não escolhe a hora.",
    "Quem não tem Alicia caça com gato.",
    "Pimenta nos olhos de Alicia é refresco.",
    "Alicia não tem preço.",
    "De grão em grão, Alicia enche o galinheiro.",
    "A união faz Alicia.",
    "Casa de ferreiro, espeto de Alicia.",
    "Devagar se vai longe, com Alicia se vai mais rápido.",
    "O que os olhos não veem, Alicia não sente.",
    "Cada um com seu Alicia.",
    "Cão que ladra não morde Alicia.",
    "Quem semeia Alicia colhe tempestade.",
    "A vingança nunca é plena, mata Alicia e a si mesmo.",
    "O mundo dá voltas e Alicia também.",
    "Quem ama Alicia, ama o cão dela.",
    "Alicia não tem vez.",
    "Filho de Alicia, peixinho é.",
    "Maus lençóis envolvem Alicia.",
    "Quando um não quer, Alicia não faz.",
    "Cada macaco no seu Alicia.",
    "Alicia não faz verão.",
    "O barato de Alicia sai caro.",
    "Gato escaldado tem medo de Alicia.",
    "Amigos, amigos; Alicia à parte.",
    "Quem conta um conto aumenta Alicia.",
    "Alicia salva."
];

const ACHIEVEMENTS = [
    { 
        icon: "👻", 
        title: "Ghosteadora Certificada", 
        desc: "Dominou a antiga arte de deixar minhas mensagens sem resposta por períodos suspeitosamente longos. 👻📱",
        unlocked: true
    },
    { 
        icon: "😭", 
        title: "Ghosteadora Profissional", 
        desc: "Dominou a habilidade lendária de responder... eventualmente. O tempo médio de resposta está atualmente sob investigação científica.",
        unlocked: true
    },
    { 
        icon: "👻", 
        title: "Especialista em Zona do Visto", 
        desc: "Consegue ler uma mensagem, desaparecer para outra dimensão, e retornar três dias úteis depois.",
        unlocked: true
    },
    { 
        icon: "🛏️", 
        title: "Especialista em Terror com Cobertor", 
        desc: "Consegue assistir ao filme de terror mais assustador já feito... desde que 90% da tela esteja coberta pelo cobertor. 👻🛏️",
        unlocked: true
    },
    { 
        icon: "🎬", 
        title: "Expert em Terror de Cobertor", 
        desc: "Assistiu mais de 300 filmes de terror. Na verdade viu cerca de 12% de cada um porque o cobertor cobria o resto.",
        unlocked: true
    },
    { 
        icon: "😭", 
        title: "Chorona Certificada", 
        desc: "Oficialmente capaz de chorar com filmes, músicas, vídeos, animais, personagens fictícios, e absolutamente qualquer coisa remotamente emocional.",
        unlocked: true
    },
    { 
        icon: "📸", 
        title: "PhD em Ser Fotogênica", 
        desc: "Cientistas testaram centenas de câmeras. Conclusão: Alicia de alguma forma fica bem em todas as fotos.",
        unlocked: true
    },
    { 
        icon: "🍼", 
        title: "Babá Oficial do Thalles", 
        desc: "Anos de experiência supervisionando um pequeno humano. Nível de paciência: Lendário.",
        unlocked: true
    },
    { 
        icon: "🤣", 
        title: "Profissional do 'Não Tô Com Fome'", 
        desc: "Diz que não está com fome... Depois prossegue a comer metade da comida de todo mundo.",
        unlocked: true
    },
    { 
        icon: "😴", 
        title: "CEO de 'Só Mais Cinco Minutos'", 
        desc: "Cinco minutos de alguma forma viram trinta. Nenhum cientista jamais explicou esse fenômeno.",
        unlocked: true
    },
    { 
        icon: "😌", 
        title: "Profissional do 'Tô Bem'", 
        desc: "Diz 'tô bem'. As evidências sugerem fortemente o contrário. 😂",
        unlocked: true
    },
    { 
        icon: "🍿", 
        title: "Destruidora de Snacks", 
        desc: "Abre um snack 'só pra provar'. Cinco minutos depois... sumiu. 🍿😂",
        unlocked: true
    },
    { 
        icon: "🙄", 
        title: "Olhar de Lado Profissional", 
        desc: "Consegue julgar uma situação inteira sem dizer uma única palavra.",
        unlocked: true
    },
    { 
        icon: "🤦", 
        title: "Riso nas Piores Horas", 
        desc: "Possui um talento incrível de rir precisamente quando todos estão tentando ficar sérios. 😂🤦",
        unlocked: true
    },
    { 
        icon: "😂", 
        title: "Riso no Pior Momento Possível", 
        desc: "Possui um talento incrível de rir precisamente quando todos os outros estão tentando permanecer sérios.",
        unlocked: true
    },
    { 
        icon: "⌛", 
        title: "Profissional do 'Já Tô Pronta'", 
        desc: "Tempo estimado de preparação: 5 minutos. Tempo real de preparação: Desconhecido. ⌛🤣",
        unlocked: true
    },
    { 
        icon: "🏅", 
        title: "Membro da Associação de Segurança de Cobertor", 
        desc: "Acredita firmemente que nenhum monstro de terror pode atacar através de um cobertor. A pesquisa ainda está em andamento.",
        unlocked: true
    },
    { 
        icon: "🎭", 
        title: "Rainha do Drama Desnecessário", 
        desc: "Pode transformar qualquer situação normal em um evento épico digno de Oscar. 🎭😂",
        unlocked: true
    },
    { 
        icon: "🎮", 
        title: "Pro Player de 'Tô Com Frio'", 
        desc: "Pode estar em pleno verão tropical e ainda sentir frio. 🥶☀️",
        unlocked: true
    },
    { 
        icon: "💤", 
        title: "Hibernadora Sazonal", 
        desc: "Consegue dormir por horas e acordar ainda com sono. É um dom. 💤😴",
        unlocked: true
    }
];

const WISDOM_QUOTES = [
    "Confie no processo. Especialmente se Alicia aprovou.",
    "Na dúvida, pergunte a Alicia.",
    "Se o Plano A falhar, sempre tem Alicia.",
    "Se Alicia riu, provavelmente valeu a pena.",
    "A vida é curta, mas Alicia é eterna.",
    "Hoje é um bom dia porque Alicia existe.",
    "Não é coincidência, é Alicia.",
    "Se não tem solução, ainda não perguntou para Alicia.",
    "Alicia não erra, o universo que está errado.",
    "A resposta é 42. Ou Alicia. Provavelmente Alicia.",
    "Quando tudo der errado, lembre-se: Alicia já passou por isso e sobreviveu.",
    "Não existe problema que Alicia não possa complicar... digo, resolver.",
    "Se Alicia está calma, você deveria estar também.",
    "Alicia: provando desde sempre que impossível é só uma opinião.",
    "Siga seu coração, mas leve Alicia junto.",
    "A vida imita a arte, a arte imita Alicia.",
    "Não conte os dias, faça os dias contarem. Com Alicia, eles sempre contam.",
    "Alicia não precisa de introdução, mas merece uma ovação.",
    "Se existe um jeito mais fácil, Alicia já descobriu.",
    "Alicia: porque a normalidade está superestimada.",
    "O universo diz 'não'. Alicia diz 'assista'.",
    "Alicia não segue tendências, ela cria elas.",
    "Se Alicia disse que vai dar certo, vai dar certo.",
    "Alicia não encontra tempo, ela cria tempo.",
    "A lógica é opcional quando Alicia está envolvida.",
    "Alicia: a única constante no universo do caos.",
    "Se você acha que algo é impossível, não contou para Alicia ainda.",
    "Alicia não espera oportunidades, ela as inventa.",
    "A física chora, Alicia ri.",
    "Alicia: transformando o absurdo em arte desde sempre.",
    "Quando a vida te der limões, ligue para Alicia, ela sabe fazer limonada.",
    "Alicia não joga o jogo, ela muda as regras.",
    "O caos teme Alicia.",
    "Alicia: provando que sorte e talento são a mesma coisa.",
    "Se parece loucura, provavelmente é ideia de Alicia. E vai funcionar.",
    "Alicia não desiste, ela apenas encontra um caminho mais interessante.",
    "O impossível leva 5 minutos, o milagre, Alicia faz na hora.",
    "Alicia não precisa de plano B, o plano A sempre funciona.",
    "Dúvida é o que você tem. Certeza é o que Alicia tem.",
    "Alicia: porque o universo precisa de alguém para manter as coisas interessantes.",
    "Se o mundo fosse perfeito, seria chato. Por isso existe Alicia.",
    "Alicia não coleciona momentos, ela cria lendas.",
    "A gravidade puxa, Alicia empurra de volta.",
    "Alicia não tem defeitos, tem características únicas.",
    "Se existe manual, Alicia não leu. E ainda assim faz melhor.",
    "Alicia: a prova viva de que regras existem para ser questionadas.",
    "Não é sorte, é Alicia sendo Alicia.",
    "Se você quer algo bem feito, chame Alicia.",
    "Alicia não comete erros, ela cria variações.",
    "O tédio morreu quando Alicia nasceu.",
    "Alicia: tornando o impossível em 'já foi feito'.",
    "Se Alicia estiver envolvida, prepare-se para o inesperado.",
    "Alicia não segue roteiros, ela improvisa obras-primas.",
    "O mundo gira, Alicia conduz.",
    "Alicia: porque mediocridade não é uma opção.",
    "Se você acha que sabe tudo, não conheceu Alicia ainda.",
    "Alicia não precisa de validação, ela É a validação.",
    "O futuro é incerto, mas Alicia sempre chega lá primeiro.",
    "Alicia não quebra o gelo, ela derrete ele.",
    "Se tem jeito, Alicia encontra. Se não tem, ela inventa.",
    "Alicia: a razão pela qual o termo 'impossível' precisa ser revisado.",
    "Não pergunte como, pergunte 'Alicia?'",
    "Se parece magia, é porque Alicia fez parecer fácil.",
    "Alicia não segue o fluxo, ela é o fluxo.",
    "O universo dá voltas tentando entender Alicia.",
    "Alicia: porque a vida é curta demais para ser comum.",
    "Se você precisa de inspiração, pense em Alicia.",
    "Alicia não espera a tempestade passar, ela dança na chuva.",
    "O destino existe, mas Alicia decide o caminho.",
    "Alicia não tem limites, tem horizontes.",
    "Se Alicia fosse um super-poder, seria o mais OP do universo.",
    "Alicia não procura aventuras, aventuras procuram Alicia.",
    "O caos organizado tem nome: Alicia.",
    "Alicia: provando que você não precisa fazer sentido para estar certo.",
    "Se a vida é um jogo, Alicia joga no modo hard e ainda assim ganha.",
    "Alicia não faz história, ela é a história.",
    "O tempo voa quando Alicia está por perto.",
    "Alicia: a resposta que você não sabia que precisava.",
    "Se existe um jeito melhor, Alicia já testou todos os piores primeiro.",
    "Alicia não segue padrões, ela estabelece novos.",
    "O impossível é só uma sugestão para Alicia.",
    "Alicia não improvisa, ela executa arte espontânea.",
    "Se você está perdido, pergunte a Alicia. Ela provavelmente está perdida também, mas pelo menos será divertido.",
    "Alicia: porque o mundo precisa de mais pessoas que não fazem sentido, mas funcionam.",
    "Não é sobre ter razão, é sobre Alicia ter razão.",
    "Alicia não precisa de sorte, sorte precisa de Alicia.",
    "Se você quer mudar o mundo, comece perguntando a Alicia.",
    "Alicia: a única pessoa capaz de ganhar uma discussão consigo mesma.",
    "O universo tem leis. Alicia tem exceções.",
    "Alicia não espera a vida acontecer, ela faz a vida acontecer.",
    "Se parece complicado, é porque você não perguntou a Alicia ainda.",
    "Alicia não cria problemas, ela cria oportunidades de crescimento.",
    "O caos é só ordem que Alicia ainda não organizou.",
    "Alicia: porque a realidade é apenas uma sugestão.",
    "Se você acha que já viu de tudo, não conheceu Alicia ainda.",
    "Alicia não segue o manual, ela escreve um novo.",
    "O mundo é melhor porque Alicia existe nele.",
    "Alicia: transformando 'não vai dar' em 'já deu' desde sempre."
];

const STATS = [
    { 
        label: "Nível de Choro", 
        icon: "😭",
        value: 101, 
        max: 100,
        subtitle: "Cientistas concordam que sempre tem uma lágrima extra disponível.",
        color: "blue"
    },
    { 
        label: "Fome", 
        icon: "🍕",
        value: 300, 
        max: 100,
        subtitle: "Consegue terminar de comer... e imediatamente começar a pensar na próxima refeição.",
        color: "orange"
    },
    { 
        label: "Sonolência", 
        icon: "😴",
        value: "ERROR", 
        max: 100,
        subtitle: "O valor ficou tão alto que nossos cientistas e computadores falharam ao calcular.",
        color: "purple",
        special: "error"
    },
    { 
        label: "Velocidade de Resposta", 
        icon: "📱",
        value: 2, 
        max: 100,
        subtitle: "Carregando...",
        color: "red"
    },
    { 
        label: "Poder Fotogênico", 
        icon: "📸",
        value: 999, 
        max: 100,
        subtitle: "Toda câmera de alguma forma coopera.",
        color: "pink"
    },
    { 
        label: "Coragem em Filmes de Terror", 
        icon: "🎬",
        value: 8, 
        max: 100,
        subtitle: "Aumenta para 100% quando o cobertor está cobrindo os olhos.",
        color: "red"
    },
    { 
        label: "Chance de Ataque de Riso", 
        icon: "😂",
        value: 95, 
        max: 100,
        subtitle: "Especialmente durante momentos que exigem silêncio absoluto.",
        color: "yellow"
    },
    { 
        label: "Sobrevivência Contra Amendoins", 
        icon: "🥜",
        value: "Loading...", 
        max: 100,
        subtitle: "Por favor aguarde... Sistema travou.",
        color: "brown",
        special: "loading"
    },
    { 
        label: "Paciência com Thalles", 
        icon: "🍼",
        value: Infinity, 
        max: 100,
        subtitle: "Até a NASA não conseguiu encontrar o limite.",
        color: "cyan",
        special: "infinity"
    },
    { 
        label: "Detector de Drama", 
        icon: "🎭",
        value: 250, 
        max: 100,
        subtitle: "Consegue detectar drama antes mesmo de existir.",
        color: "purple"
    },
    { 
        label: "Precisão do Olhar de Lado", 
        icon: "👀",
        value: 100, 
        max: 100,
        subtitle: "Nunca erra o alvo.",
        color: "blue"
    },
    { 
        label: "Probabilidade de Dizer 'Tô Bem'", 
        icon: "🤦",
        value: 100, 
        max: 100,
        subtitle: "Probabilidade de realmente estar bem: Desconhecida.",
        color: "green"
    },
    { 
        label: "Atração de Snacks", 
        icon: "🍟",
        value: 500, 
        max: 100,
        subtitle: "Snacks desaparecem misteriosamente por perto.",
        color: "yellow"
    },
    { 
        label: "Habilidade de Acordar Cedo", 
        icon: "💤",
        value: "404", 
        max: 100,
        subtitle: "Não Encontrado.",
        color: "gray",
        special: "not-found"
    },
    { 
        label: "Probabilidade de Deixar Alguém Esperando", 
        icon: "📱",
        value: 97, 
        max: 100,
        subtitle: "Recurso funcionando exatamente como planejado.",
        color: "orange"
    },
    { 
        label: "Gerador de Riso Aleatório", 
        icon: "😂",
        value: "24/7", 
        max: 100,
        subtitle: "Ativado 24/7.",
        color: "pink",
        special: "always-on"
    },
    { 
        label: "Nível de Amizade", 
        icon: "❤️",
        value: 999999, 
        max: 100,
        subtitle: "Erro de Overflow.",
        color: "red"
    }
];

// ==================== CURSOR ====================

const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

if (!isTouchDevice && cursor && cursorFollower) {
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        requestAnimationFrame(animateFollower);
    }
    animateFollower();
} else {
    if (cursor) cursor.style.display = 'none';
    if (cursorFollower) cursorFollower.style.display = 'none';
    document.body.style.cursor = 'auto';
}

// ==================== NAVIGATION ====================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// ==================== TAB NAVIGATION WITH ANIMATIONS ====================

let currentSection = 'home';
let isTransitioning = false;

// Define tab order
const tabOrder = [
    'home',
    'cases',
    'terms',
    'contradictions',
    'stats',
    'achievements',
    'wisdom',
    'happiness',
    'secret',
    'foryou'
];

function showSection(targetId) {
    if (isTransitioning || targetId === currentSection) return;
    
    isTransitioning = true;
    
    const currentEl = document.getElementById(currentSection);
    const targetEl = document.getElementById(targetId);
    
    if (!targetEl) {
        isTransitioning = false;
        return;
    }
    
    // Remove active class and add exit animation to current section
    if (currentEl) {
        currentEl.classList.remove('active');
        currentEl.classList.add('tab-exit');
    }
    
    // Wait for exit animation, then show new section
    setTimeout(() => {
        // Hide current section
        if (currentEl) {
            currentEl.classList.remove('tab-exit');
            currentEl.style.display = 'none';
        }
        
        // Show and animate new section
        targetEl.style.display = 'block';
        
        // Reset happiness tab to initial state when entering it
        if (targetId === 'happiness') {
            resetHappinessTab();
        }
        
        // Force reflow
        void targetEl.offsetWidth;
        
        targetEl.classList.add('tab-enter');
        targetEl.classList.add('active');
        
        // Scroll to top of new section smoothly
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Clean up animation class
        setTimeout(() => {
            targetEl.classList.remove('tab-enter');
            currentSection = targetId;
            isTransitioning = false;
            
            // Update navigation buttons state
            updateNavButtons();
        }, 600);
        
    }, 400);
}

function updateNavButtons() {
    const prevBtn = document.getElementById('tabPrevBtn');
    const nextBtn = document.getElementById('tabNextBtn');
    
    if (!prevBtn || !nextBtn) return;
    
    const currentIndex = tabOrder.indexOf(currentSection);
    
    // Disable/enable buttons based on position
    if (currentIndex <= 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }
    
    if (currentIndex >= tabOrder.length - 1) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        
        // Close mobile menu
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Update active nav link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Show target section with animation
        showSection(targetId);
    });
});

// ==================== PREV/NEXT TAB NAVIGATION ====================

const tabPrevBtn = document.getElementById('tabPrevBtn');
const tabNextBtn = document.getElementById('tabNextBtn');

tabPrevBtn?.addEventListener('click', () => {
    const currentIndex = tabOrder.indexOf(currentSection);
    if (currentIndex > 0) {
        const prevSection = tabOrder[currentIndex - 1];
        const prevLink = document.querySelector(`a[href="#${prevSection}"]`);
        if (prevLink) {
            prevLink.click();
        }
    }
});

tabNextBtn?.addEventListener('click', () => {
    const currentIndex = tabOrder.indexOf(currentSection);
    if (currentIndex < tabOrder.length - 1) {
        const nextSection = tabOrder[currentIndex + 1];
        const nextLink = document.querySelector(`a[href="#${nextSection}"]`);
        if (nextLink) {
            nextLink.click();
        }
    }
});

// Keyboard navigation (Arrow keys)
document.addEventListener('keydown', (e) => {
    // Ignore if user is typing in an input field
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
    }
    
    // Arrow Left = Previous
    if (e.key === 'ArrowLeft') {
        e.preventDefault();
        tabPrevBtn?.click();
    }
    
    // Arrow Right = Next
    if (e.key === 'ArrowRight') {
        e.preventDefault();
        tabNextBtn?.click();
    }
});

// ==================== PARTICLES ====================

const particlesContainer = document.getElementById('particles');
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDuration = (10 + Math.random() * 20) + 's';
    particle.style.animationDelay = Math.random() * 10 + 's';
    const size = 2 + Math.random() * 4;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particlesContainer.appendChild(particle);
}

// ==================== COUNTERS ====================

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.fact-number').forEach(counter => {
    counterObserver.observe(counter);
});

// ==================== BUTTONS ====================

document.getElementById('startButton')?.addEventListener('click', () => {
    // Find the Cases nav link and trigger its click
    const casesLink = document.querySelector('a[href="#cases"]');
    if (casesLink) {
        casesLink.click();
    }
});

// ==================== CONTENT GENERATION ====================

function generateCaseFiles() {
    const grid = document.getElementById('casesGrid');
    if (!grid) return;
    
    CASE_FILES.forEach((caseFile, index) => {
        const card = document.createElement('div');
        card.className = 'case-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const statusClass = caseFile.statusColor === 'yellow' ? 'status-ongoing' : 
                           caseFile.statusColor === 'green' ? 'status-closed' : 'status-pending';
        
        card.innerHTML = `
            <div class="case-header">
                <span class="case-id">CASO #${caseFile.id}</span>
                <span class="case-classification">CONFIDENCIAL</span>
            </div>
            <h3 class="case-title">${caseFile.title}</h3>
            <div class="case-report">
                <div class="report-label">RELATÓRIO:</div>
                <p class="report-text">${caseFile.report}</p>
            </div>
            <div class="case-status">
                <span class="status-badge ${statusClass}">${caseFile.status}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

function generateTerms() {
    const grid = document.getElementById('termsGrid');
    if (!grid) return;
    
    TERMS.forEach((term, index) => {
        const card = document.createElement('div');
        card.className = 'term-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="term-clause"><span class="clause-symbol">§</span>${term.clause}</div>
            <p class="term-text">${term.text}</p>
        `;
        grid.appendChild(card);
    });
}

function generateContradictions() {
    const grid = document.getElementById('contradictionsGrid');
    if (!grid) return;
    
    CONTRADICTIONS.forEach((contradiction, index) => {
        const card = document.createElement('div');
        card.className = 'contradiction-card';
        card.style.animationDelay = `${index * 0.2}s`;
        card.innerHTML = `
            <div class="contradiction-header">
                <span class="contradiction-id">CONTRADIÇÃO #${contradiction.id}</span>
                <span class="scanning">🔍 Analisando...</span>
            </div>
            <h3 class="contradiction-title">${contradiction.title}</h3>
            <div class="contradiction-analysis">
                <div class="analysis-field">
                    <div class="field-label">ALEGAÇÃO:</div>
                    <p class="field-text">"${contradiction.claim}"</p>
                </div>
                <div class="analysis-field">
                    <div class="field-label">REALIDADE:</div>
                    <p class="field-text">"${contradiction.reality}"</p>
                </div>
            </div>
            <div class="hypocrisy-meter">
                <div class="meter-label">NÍVEL DE HIPOCRISIA</div>
                <div class="meter-bar">
                    <div class="meter-fill" data-level="${contradiction.level}"></div>
                </div>
                <div class="meter-value">${contradiction.level}%</div>
            </div>
        `;
        grid.appendChild(card);
    });
    
    // Animate hypocrisy meters on scroll
    const meterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const level = fill.getAttribute('data-level');
                setTimeout(() => {
                    fill.style.width = level + '%';
                }, 200);
                meterObserver.unobserve(fill);
            }
        });
    });
    
    document.querySelectorAll('.meter-fill').forEach(fill => {
        meterObserver.observe(fill);
    });
}

function generateLaws() {
    const grid = document.getElementById('lawsGrid');
    if (!grid) return;
    
    LAWS.forEach((law, index) => {
        const card = document.createElement('div');
        card.className = 'law-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `<p>${law}</p>`;
        grid.appendChild(card);
    });
}

function generateFacts() {
    const grid = document.getElementById('factsGrid');
    if (!grid) return;
    
    FACTS.forEach((fact, index) => {
        const card = document.createElement('div');
        card.className = 'fact-card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.setAttribute('data-fact', fact.toLowerCase());
        card.innerHTML = `<p>🔬 ${fact}</p>`;
        grid.appendChild(card);
    });
}

function generateSayings() {
    const grid = document.getElementById('sayingsGrid');
    if (!grid) return;
    
    SAYINGS.forEach((saying, index) => {
        const card = document.createElement('div');
        card.className = 'saying-card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.setAttribute('data-saying', saying.toLowerCase());
        card.innerHTML = `<p>${saying}</p>`;
        grid.appendChild(card);
    });
}

function generateStats() {
    const grid = document.getElementById('statsGrid');
    if (!grid) return;
    
    STATS.forEach(stat => {
        const card = document.createElement('div');
        card.className = 'stat-card';
        
        let displayValue = '';
        let percentage = 0;
        let barClass = '';
        
        // Handle special cases
        if (stat.special === 'error') {
            displayValue = 'ERROR';
            percentage = 100;
            barClass = 'stat-fill-error';
        } else if (stat.special === 'loading') {
            displayValue = 'Loading...';
            percentage = 50;
            barClass = 'stat-fill-loading';
        } else if (stat.special === 'infinity') {
            displayValue = '∞';
            percentage = 100;
            barClass = 'stat-fill-infinity';
        } else if (stat.special === 'not-found') {
            displayValue = '404';
            percentage = 0;
            barClass = 'stat-fill-notfound';
        } else if (stat.special === 'always-on') {
            displayValue = '24/7';
            percentage = 100;
            barClass = 'stat-fill-alwayson';
        } else if (typeof stat.value === 'number') {
            displayValue = `${stat.value}%`;
            percentage = Math.min((stat.value / stat.max) * 100, 100);
            
            // Add special class for overflow values
            if (stat.value > 100) {
                barClass = 'stat-fill-overflow';
            }
        } else {
            displayValue = stat.value;
            percentage = 100;
        }
        
        const colorClass = stat.color ? `stat-color-${stat.color}` : '';
        
        card.innerHTML = `
            <div class="stat-header">
                <span class="stat-icon">${stat.icon}</span>
                <span class="stat-label">${stat.label}</span>
            </div>
            <div class="stat-value-display ${stat.special ? 'stat-special' : ''}">${displayValue}</div>
            <div class="stat-bar">
                <div class="stat-fill ${barClass} ${colorClass}" data-width="${percentage}"></div>
            </div>
            <div class="stat-subtitle">${stat.subtitle}</div>
        `;
        grid.appendChild(card);
    });
    
    // Animate bars on scroll
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const width = fill.getAttribute('data-width');
                setTimeout(() => {
                    fill.style.width = width + '%';
                }, 100);
                statObserver.unobserve(fill);
            }
        });
    });
    
    document.querySelectorAll('.stat-fill').forEach(fill => {
        statObserver.observe(fill);
    });
}

function generateAchievements() {
    const grid = document.getElementById('achievementsGrid');
    if (!grid) return;
    
    ACHIEVEMENTS.forEach((achievement, index) => {
        const card = document.createElement('div');
        card.className = 'achievement-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-title">${achievement.title}</div>
            <div class="achievement-desc">${achievement.desc}</div>
            ${achievement.unlocked ? '<div class="unlocked-badge"><span class="check-icon">✓</span> Desbloqueado</div>' : ''}
        `;
        grid.appendChild(card);
    });
}

// ==================== WISDOM GENERATOR ====================

let wisdomCount = 0;
const wisdomQuote = document.getElementById('wisdomQuote');
const wisdomBtn = document.getElementById('wisdomBtn');
const wisdomCounter = document.getElementById('wisdomCount');

wisdomBtn?.addEventListener('click', () => {
    const randomQuote = WISDOM_QUOTES[Math.floor(Math.random() * WISDOM_QUOTES.length)];
    wisdomQuote.style.opacity = '0';
    wisdomQuote.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        wisdomQuote.textContent = `"${randomQuote}"`;
        wisdomQuote.style.opacity = '1';
        wisdomQuote.style.transform = 'translateY(0)';
        wisdomCount++;
        wisdomCounter.textContent = wisdomCount;
    }, 300);
});

// ==================== SEARCH ====================

const factsSearch = document.getElementById('factsSearch');
const sayingsSearch = document.getElementById('sayingsSearch');

factsSearch?.addEventListener('input', (e) => {
    const search = e.target.value.toLowerCase();
    document.querySelectorAll('.fact-card').forEach(card => {
        const text = card.getAttribute('data-fact');
        card.style.display = text.includes(search) ? 'block' : 'none';
    });
});

sayingsSearch?.addEventListener('input', (e) => {
    const search = e.target.value.toLowerCase();
    document.querySelectorAll('.saying-card').forEach(card => {
        const text = card.getAttribute('data-saying');
        card.style.display = text.includes(search) ? 'block' : 'none';
    });
});

// ==================== RANDOM BUTTONS ====================

document.getElementById('randomFact')?.addEventListener('click', () => {
    const cards = document.querySelectorAll('.fact-card');
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    randomCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    randomCard.style.transform = 'scale(1.05)';
    setTimeout(() => {
        randomCard.style.transform = '';
    }, 500);
});

document.getElementById('randomSaying')?.addEventListener('click', () => {
    const cards = document.querySelectorAll('.saying-card');
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    randomCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    randomCard.style.transform = 'scale(1.05)';
    setTimeout(() => {
        randomCard.style.transform = '';
    }, 500);
});

// ==================== EASTER EGG ====================

let keyPresses = [];
const modal = document.getElementById('easterEggModal');
const modalClose = document.getElementById('modalClose');

document.addEventListener('keypress', (e) => {
    if (e.key.toLowerCase() === 'a') {
        keyPresses.push('a');
        if (keyPresses.length > 3) keyPresses.shift();
        if (keyPresses.length === 3) {
            modal.classList.add('show');
            keyPresses = [];
        }
    } else {
        keyPresses = [];
    }
});

modalClose?.addEventListener('click', () => {
    modal.classList.remove('show');
});

modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// ==================== SMOOTH SCROLL ====================
// Handled by tab navigation system above

// ==================== INIT ====================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Terms Gate FIRST
    initTermsGate();
    
    generateCaseFiles();
    generateTerms();
    generateContradictions();
    generateStats();
    generateAchievements();
    
    // Initialize sections visibility
    const allSections = document.querySelectorAll('.content-section, .home-section');
    allSections.forEach(section => {
        if (section.id === 'home') {
            section.classList.add('active');
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
    
    // Initialize navigation buttons state
    updateNavButtons();
    
    // Handle browser back/forward
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.substring(1) || 'home';
        const targetLink = document.querySelector(`a[href="#${hash}"]`);
        if (targetLink && !isTransitioning) {
            navLinks.forEach(l => l.classList.remove('active'));
            targetLink.classList.add('active');
            showSection(hash);
        }
    });
    
    // Check initial hash
    if (window.location.hash) {
        const initialHash = window.location.hash.substring(1);
        const initialLink = document.querySelector(`a[href="#${initialHash}"]`);
        if (initialLink) {
            setTimeout(() => {
                initialLink.click();
            }, 100);
        }
    }
    
    console.log('%c✨ Bem-vindo à Aliciapedia ✨', 'font-size: 20px; font-weight: bold; color: #a855f7;');
    console.log('%cA enciclopédia mais confiável (e imparcial) sobre Alicia!', 'font-size: 14px; color: #a0a0b0;');
});


// ==================== SECRET BUTTON ====================

const dangerButton = document.getElementById('dangerButton');
const confirmModal = document.getElementById('confirmModal');
const confirmClose = document.getElementById('confirmClose');
const safeBtn = document.getElementById('safeBtn');
const confirmBtn = document.getElementById('confirmBtn');
const secretReveal = document.getElementById('secretReveal');

// Open confirmation modal
dangerButton?.addEventListener('click', () => {
    confirmModal.classList.add('show');
});

// Close modal
confirmClose?.addEventListener('click', () => {
    confirmModal.classList.remove('show');
});

// Safe choice - close modal
safeBtn?.addEventListener('click', () => {
    confirmModal.classList.remove('show');
});

// Dangerous choice - reveal secret
confirmBtn?.addEventListener('click', () => {
    confirmModal.classList.remove('show');
    setTimeout(() => {
        secretReveal.style.display = 'block';
        secretReveal.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
});

// Close modal on outside click
confirmModal?.addEventListener('click', (e) => {
    if (e.target === confirmModal) {
        confirmModal.classList.remove('show');
    }
});

// ==================== PARALLAX BACKGROUND ====================

let bgX = 0;
let bgY = 0;

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;
    
    bgX = mouseX * 30;
    bgY = mouseY * 30;
    
    const bgImage = document.querySelector('.background-image');
    if (bgImage) {
        bgImage.style.transform = `scale(1.1) translate(${bgX}px, ${bgY}px)`;
    }
});

// ==================== SMOOTH TRANSITIONS ====================
// Tab transitions are handled by the tab navigation system above

console.log('%c🎉 Novas seções secretas desbloqueadas!', 'font-size: 16px; font-weight: bold; color: #ec4899;');
console.log('%c😊 Sua Felicidade Diária & 🔒 Área Secreta agora disponíveis!', 'font-size: 14px; color: #a0a0b0;');

// ==================== HAPPINESS TAB INTERACTION ====================

const happinessInitial = document.getElementById('happinessInitial');
const happinessYes = document.getElementById('happinessYes');
const happinessNo = document.getElementById('happinessNo');
const explosionScreen = document.getElementById('explosionScreen');
const explosionButton = document.getElementById('explosionButton');
const explosionOverlay = document.getElementById('explosionOverlay');
const happinessQuiz = document.getElementById('happinessQuiz');
const quizAlexandre = document.getElementById('quizAlexandre');
const quizMainha = document.getElementById('quizMainha');
const happinessWrong = document.getElementById('happinessWrong');
const happinessCorrect = document.getElementById('happinessCorrect');
const retryQuiz = document.getElementById('retryQuiz');

// Reset happiness tab to initial state
function resetHappinessTab() {
    console.log('Resetting happiness tab to initial state');
    hideAllHappinessScreens();
    if (happinessInitial) {
        happinessInitial.style.display = 'block';
    }
}

// Hide all happiness screens
function hideAllHappinessScreens() {
    if (happinessInitial) happinessInitial.style.display = 'none';
    if (explosionScreen) explosionScreen.style.display = 'none';
    if (happinessQuiz) happinessQuiz.style.display = 'none';
    if (happinessWrong) happinessWrong.style.display = 'none';
    if (happinessCorrect) happinessCorrect.style.display = 'none';
}

// Show initial question
function showHappinessInitial() {
    hideAllHappinessScreens();
    if (happinessInitial) happinessInitial.style.display = 'block';
}

// "Sim" button - Start quiz
happinessYes?.addEventListener('click', () => {
    hideAllHappinessScreens();
    if (happinessQuiz) {
        happinessQuiz.style.display = 'block';
    }
});

// "Não" button - Show explosion screen
happinessNo?.addEventListener('click', () => {
    hideAllHappinessScreens();
    if (explosionScreen) {
        explosionScreen.style.display = 'block';
    }
});

// Explosion button - Trigger explosion and redirect
explosionButton?.addEventListener('click', () => {
    if (explosionOverlay) {
        explosionOverlay.classList.add('active');
        
        // Create explosion particles
        createExplosionParticles();
        
        // Shake the page
        document.body.style.animation = 'shake 0.5s ease-in-out';
        
        setTimeout(() => {
            explosionOverlay.classList.remove('active');
            document.body.style.animation = '';
            
            // Navigate to home
            const homeLink = document.querySelector('a[href="#home"]');
            if (homeLink) {
                homeLink.click();
            }
            
            // Reset happiness tab to initial state
            setTimeout(() => {
                showHappinessInitial();
            }, 500);
        }, 2000);
    }
});

// Create explosion particles effect
function createExplosionParticles() {
    const particlesContainer = explosionOverlay.querySelector('.explosion-particles');
    if (!particlesContainer) return;
    
    // Clear existing particles
    particlesContainer.innerHTML = '';
    
    // Create 30 particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '10px';
        particle.style.height = '10px';
        particle.style.borderRadius = '50%';
        particle.style.top = '50%';
        particle.style.left = '50%';
        
        // Random colors from site palette
        const colors = ['#a855f7', '#ec4899', '#3b82f6', '#ef4444', '#eab308'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
        
        // Random angle and distance
        const angle = (Math.PI * 2 * i) / 30;
        const distance = 150 + Math.random() * 100;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        particle.style.animation = `particle-explode 1s ease-out forwards`;
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        
        particlesContainer.appendChild(particle);
    }
}

// Quiz - Alexandre answer (wrong)
quizAlexandre?.addEventListener('click', () => {
    hideAllHappinessScreens();
    if (happinessWrong) {
        happinessWrong.style.display = 'block';
    }
});

// Quiz - Mainha answer (correct)
quizMainha?.addEventListener('click', () => {
    hideAllHappinessScreens();
    if (happinessCorrect) {
        happinessCorrect.style.display = 'block';
    }
});

// Retry quiz button - Fixed to properly restart the quiz
retryQuiz?.addEventListener('click', () => {
    console.log('Retry quiz clicked - resetting to quiz question');
    hideAllHappinessScreens();
    
    // Small delay to ensure display:none is applied before showing quiz
    setTimeout(() => {
        if (happinessQuiz) {
            happinessQuiz.style.display = 'block';
        }
    }, 50);
});

// Initialize happiness tab to show initial question
if (happinessInitial) {
    showHappinessInitial();
}

// ==================== MUSIC QUIZ GATE FOR SECRET SECTION ====================

// Song configuration with individual start times (in seconds)
const QUIZ_SONG_CONFIG = {
    'onze': {
        startTime: 45,  // Start at 45 seconds
        duration: 7     // Play for 7 seconds
    },
    'palacios': {
        startTime: 45,
        duration: 7
    },
    'samurai': {
        startTime: 45,
        duration: 7
    },
    'flor': {
        startTime: 45,
        duration: 7
    }
};

// Song clues - two variants per song, randomly selected each quiz attempt
const QUIZ_SONG_CLUES = {
    'onze': [
        "Uma canção sobre um horário que virou motivo de disputa entre duas pessoas.",
        "Fala de um momento do dia que ficou marcado por causa de um desentendimento bobo."
    ],
    'palacios': [
        "Uma canção que compara sentimentos a construções grandiosas e imponentes.",
        "Fala de algo que parece luxuoso e intocável, mas esconde fragilidade."
    ],
    'samurai': [
        "Uma canção que usa a figura de um guerreiro para falar de força e disciplina emocional.",
        "Compara alguém a uma figura de combate, alguém que enfrenta tudo com códigos de honra."
    ],
    'flor': [
        "Uma canção que mistura delicadeza e algo sombrio, como uma flor que esconde espinhos.",
        "Fala de vaidade e medo andando juntos, como algo bonito por fora mas perigoso por dentro."
    ]
};

const QUIZ_SONGS = [
    {
        id: 'onze',
        title: 'Onze e Vinte',
        audioFile: 'Onze%2020%20%20Pra%20Voc%C3%AA%20%C3%81udio.mp3'
    },
    {
        id: 'palacios',
        title: 'Palácios e Castelos',
        audioFile: 'Jo%C3%A3o%20Gomes%20Cantor%20-%20PAL%C3%81CIOS%20E%20CASTELOS%20-%20Jo%C3%A3o%20Gomes%20(P%C3%A9%20de%20Serrita).mp3'
    },
    {
        id: 'samurai',
        title: 'Samurai',
        audioFile: 'Djavan%20-%20Samurai%20(%C3%81udio%20Oficial)%20ft.%20Stevie%20Wonder.mp3'
    },
    {
        id: 'flor',
        title: 'Flor do Medo',
        audioFile: 'Djavan%20-%20Flor%20Do%20Medo%20(Vaidade)%20%5B%C3%81udio%20Oficial%5D.mp3'
    }
];

// Quiz state (now with persistent localStorage)
let quizState = {
    currentQuestionIndex: 0,
    questionsOrder: [],
    selectedClues: {},
    quizAudio: null,
    stopTimer: null
};

// Check if quiz is unlocked (persistent via localStorage)
function isQuizUnlocked() {
    return localStorage.getItem('secret_quiz_unlocked') === 'true';
}

// Unlock quiz (save to localStorage)
function unlockQuiz() {
    localStorage.setItem('secret_quiz_unlocked', 'true');
    console.log('✅ Quiz unlocked and saved to localStorage');
}

// Lock quiz (reset localStorage)
function lockQuiz() {
    localStorage.removeItem('secret_quiz_unlocked');
    console.log('🔒 Quiz locked (localStorage cleared)');
}

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize quiz
function initMusicQuiz() {
    console.log('🎵 Inicializando quiz musical...');
    quizState.questionsOrder = shuffleArray([...QUIZ_SONGS]);
    quizState.currentQuestionIndex = 0;
    quizState.selectedClues = {};
    
    // Randomly select one clue variant for each song this quiz attempt
    QUIZ_SONGS.forEach(song => {
        const clues = QUIZ_SONG_CLUES[song.id];
        const randomIndex = Math.floor(Math.random() * clues.length);
        quizState.selectedClues[song.id] = clues[randomIndex];
    });
    
    console.log('📝 Dicas selecionadas:', quizState.selectedClues);
    console.log('🔀 Ordem das perguntas:', quizState.questionsOrder.map(s => s.title));
    
    // Create quiz audio element
    if (!quizState.quizAudio) {
        quizState.quizAudio = new Audio();
        quizState.quizAudio.volume = 0.7;
    }
    
    // Stop any currently playing audio
    if (quizState.quizAudio) {
        quizState.quizAudio.pause();
        quizState.quizAudio.currentTime = 0;
    }
    if (quizState.stopTimer) {
        clearTimeout(quizState.stopTimer);
        quizState.stopTimer = null;
    }
}

// Show quiz question
function showQuizQuestion() {
    const quizContainer = document.getElementById('musicQuizGate');
    if (!quizContainer) return;
    
    const currentSong = quizState.questionsOrder[quizState.currentQuestionIndex];
    const questionNumber = quizState.currentQuestionIndex + 1;
    const totalQuestions = QUIZ_SONGS.length;
    
    // Shuffle answer options
    const answerOptions = shuffleArray([...QUIZ_SONGS]);
    
    // Get the selected clue for this song
    const clueText = quizState.selectedClues[currentSong.id];
    
    // Update quiz UI
    const questionCounter = quizContainer.querySelector('.quiz-question-number');
    const questionText = quizContainer.querySelector('.quiz-question-text');
    const clueContainer = quizContainer.querySelector('.quiz-clue');
    const optionsContainer = quizContainer.querySelector('.quiz-options-container');
    
    if (questionCounter) {
        questionCounter.textContent = `Pergunta ${questionNumber} de ${totalQuestions}`;
    }
    
    if (questionText) {
        questionText.textContent = 'Qual música está sendo descrita?';
    }
    
    // Display clue text
    if (clueContainer) {
        clueContainer.textContent = clueText;
    }
    
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        answerOptions.forEach(option => {
            const button = document.createElement('button');
            button.className = 'quiz-option-button';
            button.textContent = option.title;
            button.setAttribute('data-song-id', option.id);
            button.addEventListener('click', () => handleQuizAnswer(option.id, currentSong.id, button));
            optionsContainer.appendChild(button);
        });
    }
    
    // Stop any currently playing audio when loading new question
    if (quizState.quizAudio) {
        quizState.quizAudio.pause();
        quizState.quizAudio.currentTime = 0;
    }
    if (quizState.stopTimer) {
        clearTimeout(quizState.stopTimer);
        quizState.stopTimer = null;
    }
    
    // Reset play button state
    updateQuizPlayButton();
    
    // Store current song for the play button
    quizContainer.setAttribute('data-current-song-id', currentSong.id);
}

// Play audio snippet
function playQuizSnippet(song) {
    if (!quizState.quizAudio) return;
    
    // Clear any existing stop timer
    if (quizState.stopTimer) {
        clearTimeout(quizState.stopTimer);
        quizState.stopTimer = null;
    }
    
    // Stop current audio completely
    quizState.quizAudio.pause();
    quizState.quizAudio.currentTime = 0;
    quizState.quizAudio.src = '';
    
    // Get song config
    const config = QUIZ_SONG_CONFIG[song.id] || { startTime: 45, duration: 7 };
    
    // Set new audio source
    quizState.quizAudio.src = `imagens/music/${song.audioFile}`;
    
    // Wait for metadata to load, then seek and play
    const playSnippet = () => {
        const startTime = Math.min(config.startTime, quizState.quizAudio.duration - config.duration - 1);
        
        // Seek to start time
        quizState.quizAudio.currentTime = startTime;
        
        console.log(`Playing quiz snippet: ${song.title} from ${startTime}s for ${config.duration}s`);
        
        // Play the audio
        quizState.quizAudio.play().catch(err => {
            console.error('Error playing quiz audio:', err);
        });
        
        // Stop after configured duration
        quizState.stopTimer = setTimeout(() => {
            if (quizState.quizAudio && !quizState.quizAudio.paused) {
                quizState.quizAudio.pause();
                updateQuizPlayButton();
                console.log('Quiz snippet stopped after duration');
            }
        }, config.duration * 1000);
        
        // Update play button
        updateQuizPlayButton();
    };
    
    // Try to play immediately if metadata already loaded
    if (quizState.quizAudio.readyState >= 2) {
        playSnippet();
    } else {
        // Wait for metadata to load
        quizState.quizAudio.addEventListener('loadedmetadata', playSnippet, { once: true });
        
        // Also listen for canplay as a fallback
        quizState.quizAudio.addEventListener('canplay', () => {
            if (quizState.quizAudio.readyState >= 2 && quizState.quizAudio.paused) {
                playSnippet();
            }
        }, { once: true });
    }
}

// Update play button state (legacy function - no longer needed)
function updateQuizPlayButton() {
    // No-op: manual play button doesn't need state updates
    return;
}

// Handle quiz answer
function handleQuizAnswer(selectedId, correctId, button) {
    const optionsContainer = document.querySelector('.quiz-options-container');
    const feedbackEl = document.querySelector('.quiz-feedback');
    
    if (!optionsContainer || !feedbackEl) return;
    
    // Disable all buttons during feedback
    const allButtons = optionsContainer.querySelectorAll('.quiz-option-button');
    allButtons.forEach(btn => btn.disabled = true);
    
    // Stop any playing audio
    if (quizState.quizAudio) {
        quizState.quizAudio.pause();
    }
    if (quizState.stopTimer) {
        clearTimeout(quizState.stopTimer);
        quizState.stopTimer = null;
    }
    
    if (selectedId === correctId) {
        // Correct answer
        button.classList.add('correct');
        feedbackEl.innerHTML = '<span class="feedback-icon">✅</span> <span class="feedback-text">Correto!</span>';
        feedbackEl.classList.add('show', 'correct');
        
        // Move to next question or complete quiz
        setTimeout(() => {
            feedbackEl.classList.remove('show', 'correct');
            button.classList.remove('correct');
            
            quizState.currentQuestionIndex++;
            
            if (quizState.currentQuestionIndex >= QUIZ_SONGS.length) {
                // Quiz completed
                completeQuiz();
            } else {
                // Next question
                showQuizQuestion();
            }
        }, 1500);
        
    } else {
        // Wrong answer - restart entire quiz
        button.classList.add('wrong');
        feedbackEl.innerHTML = '<span class="feedback-icon">❌</span> <span class="feedback-text">Resposta errada, tente novamente desde o início</span>';
        feedbackEl.classList.add('show', 'wrong');
        
        // Restart quiz after showing error message
        setTimeout(() => {
            feedbackEl.classList.remove('show', 'wrong');
            button.classList.remove('wrong');
            
            // Restart from beginning with new order and new clues
            initMusicQuiz();
            showQuizQuestion();
        }, 2500);
    }
}

// Complete quiz and unlock secret
function completeQuiz() {
    const quizContainer = document.getElementById('musicQuizGate');
    const secretContent = document.getElementById('secretActualContent');
    
    if (!quizContainer || !secretContent) return;
    
    // Show unlock animation
    quizContainer.innerHTML = `
        <div class="quiz-complete-screen">
            <div class="unlock-animation">
                <div class="unlock-icon">🔓</div>
                <h2 class="unlock-title">Desbloqueado!</h2>
                <p class="unlock-message">Você provou seu conhecimento musical!</p>
                <div class="unlock-confetti" id="unlockConfetti"></div>
            </div>
        </div>
    `;
    
    // Create confetti
    const confettiContainer = document.getElementById('unlockConfetti');
    if (confettiContainer) {
        const colors = ['#a855f7', '#ec4899', '#3b82f6', '#eab308', '#10b981'];
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'unlock-confetti-piece';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            
            const angle = (Math.PI * 2 * i) / 30;
            const distance = 150 + Math.random() * 100;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            
            confetti.style.setProperty('--tx', `${tx}px`);
            confetti.style.setProperty('--ty', `${ty}px`);
            
            confettiContainer.appendChild(confetti);
        }
    }
    
    // Mark as unlocked persistently (localStorage)
    unlockQuiz();
    
    // Show actual secret content after animation
    setTimeout(() => {
        quizContainer.style.display = 'none';
        secretContent.style.display = 'block';
        secretContent.style.animation = 'fadeInUp 0.8s ease-out';
        
        // Initialize retry quiz button
        setTimeout(() => initRetrySecretQuizButton(), 500);
    }, 3000);
}

// Handle secret section access
function handleSecretAccess() {
    console.log('🔒 handleSecretAccess chamado');
    const secretSection = document.getElementById('secret');
    if (!secretSection) {
        console.error('❌ Seção secret não encontrada');
        return;
    }
    
    const quizContainer = document.getElementById('musicQuizGate');
    const secretContent = document.getElementById('secretActualContent');
    
    if (!quizContainer || !secretContent) {
        console.error('❌ Quiz container ou secret content não encontrado');
        return;
    }
    
    // Check persistent unlock state (localStorage)
    const unlocked = isQuizUnlocked();
    console.log('🔓 Quiz desbloqueado (localStorage)?', unlocked);
    
    if (unlocked) {
        // Unlocked - show content directly
        console.log('✅ Mostrando conteúdo secreto diretamente');
        quizContainer.style.display = 'none';
        secretContent.style.display = 'block';
        
        // Initialize retry quiz button
        setTimeout(() => initRetrySecretQuizButton(), 500);
    } else {
        // Show quiz gate
        console.log('🎮 Mostrando quiz gate');
        quizContainer.style.display = 'block';
        secretContent.style.display = 'none';
        initMusicQuiz();
        showQuizQuestion();
    }
}

// Intercept secret tab navigation
const originalShowSection = showSection;
window.showSection = function(targetId) {
    // Handle all navigation through one unified function
    // Will be extended by Para Você section later
    if (targetId === 'secret') {
        // Call original function first to handle tab switching
        originalShowSection(targetId);
        
        // Then handle quiz gate logic
        setTimeout(() => {
            handleSecretAccess();
        }, 100);
    } else {
        originalShowSection(targetId);
    }
};

// Handle play button in quiz
document.addEventListener('click', (e) => {
    if (e.target.closest('.quiz-listen-button')) {
        e.preventDefault();
        const quizContainer = document.getElementById('musicQuizGate');
        const currentSongId = quizContainer?.getAttribute('data-current-song-id');
        
        if (!currentSongId) return;
        
        const currentSong = quizState.questionsOrder[quizState.currentQuestionIndex];
        
        if (quizState.quizAudio) {
            if (quizState.quizAudio.paused || quizState.quizAudio.src !== `${window.location.origin}/imagens/music/${currentSong.audioFile}`) {
                // Play or replay the snippet
                playQuizSnippet(currentSong);
            } else {
                // Pause if already playing
                quizState.quizAudio.pause();
                if (quizState.stopTimer) {
                    clearTimeout(quizState.stopTimer);
                    quizState.stopTimer = null;
                }
                updateQuizPlayButton();
            }
        }
    }
});

// Update play button state on audio play/pause events
document.addEventListener('DOMContentLoaded', () => {
    if (quizState.quizAudio) {
        quizState.quizAudio.addEventListener('play', updateQuizPlayButton);
        quizState.quizAudio.addEventListener('pause', updateQuizPlayButton);
        quizState.quizAudio.addEventListener('ended', updateQuizPlayButton);
    }
});

console.log('🎵 Music quiz gate initialized for secret section (session-only unlock, resets on page reload)');

// ==================== RETRY SECRET QUIZ BUTTON ====================

function initRetrySecretQuizButton() {
    const retryButton = document.getElementById('retrySecretQuiz');
    
    if (!retryButton) {
        console.warn('⚠️ Retry Secret Quiz button not found');
        return;
    }
    
    retryButton.addEventListener('click', () => {
        console.log('🔄 Retry Secret Quiz clicked');
        
        // Lock the quiz (reset localStorage)
        lockQuiz();
        
        // Hide secret content and show quiz gate
        const secretContent = document.getElementById('secretActualContent');
        const quizContainer = document.getElementById('musicQuizGate');
        
        if (secretContent) {
            secretContent.style.display = 'none';
        }
        
        if (quizContainer) {
            quizContainer.style.display = 'block';
            
            // Reinitialize quiz
            initMusicQuiz();
            showQuizQuestion();
            
            // Scroll to quiz
            quizContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
    
    console.log('🔄 Retry Secret Quiz button initialized');
}

// Initialize retry button when Secret content is shown
document.addEventListener('DOMContentLoaded', () => {
    // Check if Secret content is already visible and initialize button
    const secretContent = document.getElementById('secretActualContent');
    if (secretContent && secretContent.style.display !== 'none') {
        initRetrySecretQuizButton();
    }
});

console.log('🎵 Music quiz with persistent unlock and retry button initialized');

// ==================== PARA VOCÊ - WORD SEARCH PUZZLE ====================

const WORDSEARCH_WORDS = ['SOL', 'LUA', 'MAR', 'FLOR', 'AMOR', 'SORRISO', 'ESTRELA', 'LIBERDADE', 'AMIZADE', 'FELICIDADE'];
const GRID_SIZE = 15;
const PORTUGUESE_LETTERS = 'ABCDEFGHIJLMNOPQRSTUVXZ';

let wordsearchState = {
    grid: [],
    words: [],
    foundWords: new Set(),
    isSelecting: false,
    selectedCells: [],
    startCell: null
};

// Generate word search grid
function generateWordSearchGrid() {
    // Initialize empty grid
    const grid = Array(GRID_SIZE).fill(null).map(() => 
        Array(GRID_SIZE).fill(null).map(() => ({
            letter: '',
            isWord: false,
            wordId: null
        }))
    );
    
    const placedWords = [];
    const directions = [
        { dx: 1, dy: 0 },   // horizontal
        { dx: 0, dy: 1 },   // vertical
        { dx: 1, dy: 1 },   // diagonal down-right
        { dx: 1, dy: -1 }   // diagonal up-right
    ];
    
    // Shuffle words for random placement
    const shuffledWords = [...WORDSEARCH_WORDS].sort(() => Math.random() - 0.5);
    
    // Place each word
    for (const word of shuffledWords) {
        let placed = false;
        let attempts = 0;
        const maxAttempts = 100;
        
        while (!placed && attempts < maxAttempts) {
            attempts++;
            
            // Random direction
            const dir = directions[Math.floor(Math.random() * directions.length)];
            
            // Random start position
            const startX = Math.floor(Math.random() * GRID_SIZE);
            const startY = Math.floor(Math.random() * GRID_SIZE);
            
            // Check if word fits
            let fits = true;
            const cells = [];
            
            for (let i = 0; i < word.length; i++) {
                const x = startX + (dir.dx * i);
                const y = startY + (dir.dy * i);
                
                if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) {
                    fits = false;
                    break;
                }
                
                const cell = grid[y][x];
                if (cell.letter !== '' && cell.letter !== word[i]) {
                    fits = false;
                    break;
                }
                
                cells.push({ x, y, letter: word[i] });
            }
            
            if (fits) {
                // Place the word
                const wordId = word;
                cells.forEach(cell => {
                    grid[cell.y][cell.x] = {
                        letter: cell.letter,
                        isWord: true,
                        wordId: wordId
                    };
                });
                
                placedWords.push({
                    word: word,
                    cells: cells
                });
                
                placed = true;
            }
        }
        
        if (!placed) {
            console.warn(`Could not place word: ${word}`);
        }
    }
    
    // Fill empty cells with random letters
    for (let y = 0; y < GRID_SIZE; y++) {
        for (let x = 0; x < GRID_SIZE; x++) {
            if (grid[y][x].letter === '') {
                grid[y][x].letter = PORTUGUESE_LETTERS[Math.floor(Math.random() * PORTUGUESE_LETTERS.length)];
            }
        }
    }
    
    wordsearchState.grid = grid;
    wordsearchState.words = placedWords;
    
    console.log('🔤 Word search grid generated:', placedWords.length, 'words placed');
}

// Render word search grid
function renderWordSearchGrid() {
    const gridContainer = document.getElementById('wordsearchGrid');
    if (!gridContainer) return;
    
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${GRID_SIZE}, 1fr)`;
    
    wordsearchState.grid.forEach((row, y) => {
        row.forEach((cell, x) => {
            const cellEl = document.createElement('div');
            cellEl.className = 'wordsearch-cell';
            cellEl.textContent = cell.letter;
            cellEl.setAttribute('data-x', x);
            cellEl.setAttribute('data-y', y);
            
            // Mouse events
            cellEl.addEventListener('mousedown', (e) => handleCellMouseDown(e, x, y));
            cellEl.addEventListener('mouseenter', (e) => handleCellMouseEnter(e, x, y));
            cellEl.addEventListener('mouseup', (e) => handleCellMouseUp(e));
            
            // Touch events for mobile
            cellEl.addEventListener('touchstart', (e) => handleCellTouchStart(e, x, y));
            cellEl.addEventListener('touchmove', (e) => handleCellTouchMove(e));
            cellEl.addEventListener('touchend', (e) => handleCellTouchEnd(e));
            
            gridContainer.appendChild(cellEl);
        });
    });
}

// Render word list
function renderWordList() {
    const listContainer = document.getElementById('wordsearchWordsList');
    if (!listContainer) return;
    
    listContainer.innerHTML = '';
    
    WORDSEARCH_WORDS.forEach(word => {
        const li = document.createElement('li');
        li.className = 'wordsearch-word-item';
        li.textContent = word;
        li.setAttribute('data-word', word);
        
        if (wordsearchState.foundWords.has(word)) {
            li.classList.add('found');
        }
        
        listContainer.appendChild(li);
    });
}

// Handle cell selection - Mouse
function handleCellMouseDown(e, x, y) {
    e.preventDefault();
    wordsearchState.isSelecting = true;
    wordsearchState.selectedCells = [{ x, y }];
    wordsearchState.startCell = { x, y };
    updateSelectedCells();
}

function handleCellMouseEnter(e, x, y) {
    if (!wordsearchState.isSelecting) return;
    
    const start = wordsearchState.startCell;
    const cells = getCellsInLine(start.x, start.y, x, y);
    wordsearchState.selectedCells = cells;
    updateSelectedCells();
}

function handleCellMouseUp(e) {
    if (!wordsearchState.isSelecting) return;
    
    wordsearchState.isSelecting = false;
    checkSelectedWord();
}

// Handle cell selection - Touch
function handleCellTouchStart(e, x, y) {
    e.preventDefault();
    wordsearchState.isSelecting = true;
    wordsearchState.selectedCells = [{ x, y }];
    wordsearchState.startCell = { x, y };
    updateSelectedCells();
}

function handleCellTouchMove(e) {
    if (!wordsearchState.isSelecting) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    
    if (element && element.classList.contains('wordsearch-cell')) {
        const x = parseInt(element.getAttribute('data-x'));
        const y = parseInt(element.getAttribute('data-y'));
        
        const start = wordsearchState.startCell;
        const cells = getCellsInLine(start.x, start.y, x, y);
        wordsearchState.selectedCells = cells;
        updateSelectedCells();
    }
}

function handleCellTouchEnd(e) {
    if (!wordsearchState.isSelecting) return;
    e.preventDefault();
    
    wordsearchState.isSelecting = false;
    checkSelectedWord();
}

// Get cells in a straight line
function getCellsInLine(x1, y1, x2, y2) {
    const cells = [];
    const dx = x2 - x1;
    const dy = y2 - y1;
    
    // Check if it's a valid direction (horizontal, vertical, or diagonal)
    if (dx !== 0 && dy !== 0 && Math.abs(dx) !== Math.abs(dy)) {
        return [{ x: x1, y: y1 }];
    }
    
    const steps = Math.max(Math.abs(dx), Math.abs(dy));
    const stepX = steps === 0 ? 0 : dx / steps;
    const stepY = steps === 0 ? 0 : dy / steps;
    
    for (let i = 0; i <= steps; i++) {
        cells.push({
            x: Math.round(x1 + stepX * i),
            y: Math.round(y1 + stepY * i)
        });
    }
    
    return cells;
}

// Update visual selection
function updateSelectedCells() {
    document.querySelectorAll('.wordsearch-cell').forEach(cell => {
        cell.classList.remove('selected');
    });
    
    wordsearchState.selectedCells.forEach(({ x, y }) => {
        const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
        if (cell) {
            cell.classList.add('selected');
        }
    });
}

// Check if selected cells form a valid word
function checkSelectedWord() {
    const selectedLetters = wordsearchState.selectedCells
        .map(({ x, y }) => wordsearchState.grid[y][x].letter)
        .join('');
    
    const reversedLetters = selectedLetters.split('').reverse().join('');
    
    // Check if it matches any word
    const foundWord = WORDSEARCH_WORDS.find(word => 
        word === selectedLetters || word === reversedLetters
    );
    
    if (foundWord && !wordsearchState.foundWords.has(foundWord)) {
        // Mark as found
        wordsearchState.foundWords.add(foundWord);
        
        // Highlight found cells
        wordsearchState.selectedCells.forEach(({ x, y }) => {
            const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
            if (cell) {
                cell.classList.add('found');
            }
        });
        
        // Update word list
        renderWordList();
        
        console.log('✅ Found word:', foundWord);
        
        // Check if all words found
        if (wordsearchState.foundWords.size === WORDSEARCH_WORDS.length) {
            showCompletion();
        }
    }
    
    // Clear selection
    wordsearchState.selectedCells = [];
    updateSelectedCells();
}

// Show completion message
function showCompletion() {
    const completionDiv = document.getElementById('wordsearchCompletion');
    if (completionDiv) {
        completionDiv.style.display = 'block';
        completionDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Store completion state PERSISTENTLY (localStorage, not sessionStorage)
        localStorage.setItem('wordsearch_completed', 'true');
        
        console.log('🎉 Word search completed and saved to localStorage! Key revealed: 26/10/2009');
        
        // Show password gate after a delay
        setTimeout(() => {
            showPasswordGate();
        }, 3000);
    }
}

// Show password gate
function showPasswordGate() {
    const passwordGate = document.getElementById('passwordGate');
    if (passwordGate) {
        passwordGate.style.display = 'block';
        passwordGate.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Focus on input
        const input = document.getElementById('passwordInput');
        if (input) {
            setTimeout(() => input.focus(), 500);
        }
    }
}

// Check password
function checkPassword() {
    const input = document.getElementById('passwordInput');
    const feedback = document.getElementById('passwordFeedback');
    
    if (!input || !feedback) return;
    
    const password = input.value.trim();
    const validPasswords = ['26/10/2009', '26102009'];
    
    if (validPasswords.includes(password)) {
        // Correct password
        console.log('✅ Password correct!');
        
        // DO NOT store unlock state - password must be re-entered every page load
        // (No sessionStorage or localStorage for password unlock)
        
        // Hide password gate with animation
        const passwordGate = document.getElementById('passwordGate');
        if (passwordGate) {
            passwordGate.style.animation = 'fadeOut 0.5s ease-out';
            setTimeout(() => {
                passwordGate.style.display = 'none';
            }, 500);
        }
        
        // Show final content after password gate fades out
        setTimeout(() => {
            const finalContent = document.getElementById('foryouFinalContent');
            if (finalContent) {
                finalContent.style.display = 'block';
                finalContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Initialize gratitude button
                setTimeout(() => initGratitudeButton(), 500);
            }
        }, 600);
        
    } else {
        // Incorrect password
        feedback.style.display = 'block';
        input.classList.add('error');
        
        // Shake animation
        input.style.animation = 'shake 0.5s ease';
        
        setTimeout(() => {
            feedback.style.display = 'none';
            input.classList.remove('error');
            input.style.animation = '';
            input.value = '';
            input.focus();
        }, 2000);
    }
}

// Initialize password gate handlers
function initPasswordGate() {
    const submitButton = document.getElementById('passwordSubmitButton');
    const input = document.getElementById('passwordInput');
    
    if (!submitButton || !input) {
        console.warn('⚠️ Password gate elements not found');
        return;
    }
    
    // Remove existing listeners to prevent duplicates
    const newSubmitButton = submitButton.cloneNode(true);
    submitButton.parentNode.replaceChild(newSubmitButton, submitButton);
    
    const newInput = input.cloneNode(true);
    input.parentNode.replaceChild(newInput, input);
    
    // Add fresh event listeners
    newSubmitButton.addEventListener('click', checkPassword);
    
    newInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
    
    console.log('🔐 Password gate handlers initialized');
}

// Check access to Para Você section
function checkForYouAccess() {
    const lockedDiv = document.getElementById('foryouLocked');
    const contentDiv = document.getElementById('foryouContent');
    const completionDiv = document.getElementById('wordsearchCompletion');
    const passwordGateDiv = document.getElementById('passwordGate');
    const finalContentDiv = document.getElementById('foryouFinalContent');
    
    if (!lockedDiv || !contentDiv) return;
    
    // Check if Secret quiz has been completed (persistent localStorage)
    const hasAccessToSecret = isQuizUnlocked();
    
    if (hasAccessToSecret) {
        // User has access to Para Você section
        lockedDiv.style.display = 'none';
        contentDiv.style.display = 'block';
        
        // Check if word search was completed before (PERSISTENT - localStorage)
        const wordsearchCompleted = localStorage.getItem('wordsearch_completed') === 'true';
        
        console.log('📊 Para Você state check:', {
            secretUnlocked: hasAccessToSecret,
            wordsearchCompleted: wordsearchCompleted
        });
        
        if (wordsearchCompleted) {
            // Word search already completed in a previous session
            // ALWAYS show password gate (password is NEVER persistent)
            console.log('✅ Word search already completed, showing password gate directly');
            
            // Hide word search grid and completion message
            const gridContainer = document.querySelector('.wordsearch-grid-container');
            const wordsContainer = document.querySelector('.wordsearch-words-container');
            const introCard = document.querySelector('.wordsearch-intro');
            
            if (gridContainer) gridContainer.style.display = 'none';
            if (wordsContainer) wordsContainer.style.display = 'none';
            if (introCard) introCard.style.display = 'none';
            if (completionDiv) completionDiv.style.display = 'none';
            if (finalContentDiv) finalContentDiv.style.display = 'none';
            
            // Show password gate directly
            if (passwordGateDiv) {
                passwordGateDiv.style.display = 'block';
                
                // CRITICAL: Initialize password gate handlers every time
                initPasswordGate();
                
                // Focus on password input
                const input = document.getElementById('passwordInput');
                if (input) {
                    setTimeout(() => input.focus(), 500);
                }
            }
            
        } else {
            // Word search NOT completed yet - show word search puzzle
            console.log('🔤 Word search not completed yet, showing puzzle');
            
            // Initialize word search if not already done
            if (wordsearchState.grid.length === 0) {
                generateWordSearchGrid();
                renderWordSearchGrid();
                renderWordList();
                initPasswordGate();
            }
            
            // Show word search, hide everything else
            const gridContainer = document.querySelector('.wordsearch-grid-container');
            const wordsContainer = document.querySelector('.wordsearch-words-container');
            const introCard = document.querySelector('.wordsearch-intro');
            
            if (gridContainer) gridContainer.style.display = 'block';
            if (wordsContainer) wordsContainer.style.display = 'block';
            if (introCard) introCard.style.display = 'block';
            if (completionDiv) completionDiv.style.display = 'none';
            if (passwordGateDiv) passwordGateDiv.style.display = 'none';
            if (finalContentDiv) finalContentDiv.style.display = 'none';
        }
    } else {
        // No access to Secret yet - show locked message
        lockedDiv.style.display = 'block';
        contentDiv.style.display = 'none';
    }
}

// Intercept foryou tab navigation (extend existing showSection override)
window.showSection = function(targetId) {
    if (targetId === 'foryou') {
        // Call original function first
        originalShowSection(targetId);
        
        // Then check access
        setTimeout(() => {
            checkForYouAccess();
        }, 100);
    } else if (targetId === 'secret') {
        // Call original function first to handle tab switching
        originalShowSection(targetId);
        
        // Then handle quiz gate logic
        setTimeout(() => {
            handleSecretAccess();
        }, 100);
    } else {
        originalShowSection(targetId);
    }
};

console.log('💌 Para Você tab with word search initialized');

// ==================== GRATITUDE BUTTON & CONFETTI ====================

// Confetti animation
function triggerConfetti() {
    const overlay = document.getElementById('confettiOverlay');
    const canvas = document.getElementById('confettiCanvas');
    
    if (!overlay || !canvas) {
        console.error('❌ Confetti overlay or canvas not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Show overlay
    overlay.classList.add('active');
    
    // Confetti particles
    const particles = [];
    const colors = ['#a855f7', '#ec4899', '#3b82f6', '#eab308', '#10b981', '#f97316', '#06b6d4'];
    
    // Create particles
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedY: Math.random() * 3 + 2,
            speedX: Math.random() * 2 - 1,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5,
            shape: Math.random() > 0.5 ? 'circle' : 'square'
        });
    }
    
    // Animation loop
    let animationId;
    let frameCount = 0;
    const maxFrames = 300; // 5 seconds at 60fps
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            // Update position
            p.y += p.speedY;
            p.x += p.speedX;
            p.rotation += p.rotationSpeed;
            
            // Draw particle
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.fillStyle = p.color;
            
            if (p.shape === 'circle') {
                ctx.beginPath();
                ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            }
            
            ctx.restore();
            
            // Reset particle if out of bounds
            if (p.y > canvas.height) {
                p.y = -20;
                p.x = Math.random() * canvas.width;
            }
        });
        
        frameCount++;
        
        if (frameCount < maxFrames) {
            animationId = requestAnimationFrame(animate);
        } else {
            // Fade out
            overlay.classList.remove('active');
            cancelAnimationFrame(animationId);
        }
    }
    
    animate();
}

// Gratitude button handler
function initGratitudeButton() {
    const gratitudeButton = document.getElementById('gratitudeButton');
    const gratitudeMessage = document.getElementById('gratitudeMessage');
    
    if (!gratitudeButton) {
        console.warn('⚠️ Gratitude button not found');
        return;
    }
    
    gratitudeButton.addEventListener('click', () => {
        console.log('💝 Gratitude button clicked');
        
        // Trigger confetti
        triggerConfetti();
        
        // Show gratitude message after short delay
        setTimeout(() => {
            if (gratitudeMessage) {
                gratitudeMessage.style.display = 'block';
                gratitudeMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 1000);
        
        // Disable button after click
        gratitudeButton.disabled = true;
        gratitudeButton.style.opacity = '0.6';
        gratitudeButton.style.cursor = 'not-allowed';
    });
}

// Initialize gratitude button when final content is shown
document.addEventListener('DOMContentLoaded', () => {
    // Check if final content is already visible and initialize button
    const finalContent = document.getElementById('foryouFinalContent');
    if (finalContent && finalContent.style.display !== 'none') {
        initGratitudeButton();
    }
});

console.log('💝 Gratitude button and confetti animation initialized');

