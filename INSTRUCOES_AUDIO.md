# 🎵 Instruções para Arquivos de Áudio

## ✅ CAMINHO CORRETO CONFIRMADO

### 📁 Localização dos Arquivos

Os arquivos de áudio estão localizados em:

```
c:\Users\cambu\projetos\imagens\music\
```

**Estrutura confirmada:**
```
c:\Users\cambu\projetos\
├── imagens/
│   ├── music/                          ← PASTA CORRETA
│   │   ├── Onze 20  Pra Você Áudio.mp3
│   │   ├── João Gomes Cantor - PALÁCIOS E CASTELOS - João Gomes (Pé de Serrita).mp3
│   │   ├── Djavan - Samurai (Áudio Oficial) ft. Stevie Wonder.mp3
│   │   └── Djavan - Flor Do Medo (Vaidade) [Áudio Oficial].mp3
│   ├── ela.jpeg
│   ├── eu e ela.jpeg
│   ├── line-chart.png
│   └── pé.jpeg
├── index.html
├── aliciapedia.css
└── aliciapedia.js
```

### 📋 Arquivos de Música (nomes reais)

1. **`Onze 20  Pra Você Áudio.mp3`**
   - Usado para: "Onze e Vinte"
   - ⚠️ Observação: Tem dois espaços entre "20" e "Pra"

2. **`João Gomes Cantor - PALÁCIOS E CASTELOS - João Gomes (Pé de Serrita).mp3`**
   - Usado para: "Palácios e Castelos"

3. **`Djavan - Samurai (Áudio Oficial) ft. Stevie Wonder.mp3`**
   - Usado para: "Samurai"

4. **`Djavan - Flor Do Medo (Vaidade) [Áudio Oficial].mp3`**
   - Usado para: "Flor do Medo"

### ✅ Status Atual

**✓ Arquivos encontrados e configurados!**

Todos os 4 arquivos de áudio estão presentes na pasta `imagens/music/` e o código está apontando corretamente para eles.

### 🎵 Como Usar

1. Abra o site no navegador
2. Navegue até a aba "🎵 Trilha Sonora Oficial"
3. Clique nos botões de play (▶) em cada uma das 4 músicas:
   - 🎵 Onze e Vinte (com disputa de custódia)
   - 🎵 Palácios e Castelos
   - 🎵 Samurai
   - 🎵 Flor do Medo

As músicas devem tocar normalmente agora!

### 🔧 Referências no Código

Os arquivos estão referenciados no `index.html` com URL encoding:

```html
<audio id="audio-onze" src="imagens/music/Onze%2020%20%20Pra%20Voc%C3%AA%20%C3%81udio.mp3" preload="metadata"></audio>
<audio id="audio-palacios" src="imagens/music/Jo%C3%A3o%20Gomes%20Cantor%20-%20PAL%C3%81CIOS%20E%20CASTELOS%20-%20Jo%C3%A3o%20Gomes%20(P%C3%A9%20de%20Serrita).mp3" preload="metadata"></audio>
<audio id="audio-samurai" src="imagens/music/Djavan%20-%20Samurai%20(%C3%81udio%20Oficial)%20ft.%20Stevie%20Wonder.mp3" preload="metadata"></audio>
<audio id="audio-flor" src="imagens/music/Djavan%20-%20Flor%20Do%20Medo%20(Vaidade)%20%5B%C3%81udio%20Oficial%5D.mp3" preload="metadata"></audio>
```

**URL Encoding usado:**
- Espaço → `%20`
- Acentos: á → `%C3%A1`, ã → `%C3%A3`, ó → `%C3%B3`, etc.
- Parênteses: `(` → `%28`, `)` → `%29`
- Colchetes: `[` → `%5B`, `]` → `%5D`

---

## ✅ Funcionalidades do Player (quando os arquivos estiverem presentes)

- ▶️ **Play/Pause**: Clique no botão circular no centro do album cover
- 📊 **Barra de Progresso**: Clique para avançar/retroceder
- ⏱️ **Tempo**: Mostra tempo atual e duração total
- 🎵 **Auto-pausa**: Tocar uma música pausa automaticamente a outra
- 🔄 **Reset**: Ao terminar, a música volta ao início

---

**Última atualização**: Dezembro 2024
