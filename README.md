# Site Assis & Pedroza Sociedade de Advogados

Site institucional desenvolvido para o escritório de advocacia Assis & Pedroza, com foco em experiência do usuário, SEO e conversão de clientes.

## 🚀 Características

- **Design Responsivo**: Adaptado para todos os dispositivos
- **SEO Otimizado**: Meta tags, Schema.org e estrutura semântica
- **Performance**: CSS minificado, lazy loading e otimizações
- **Acessibilidade**: Seguindo padrões WCAG
- **Animações Suaves**: Efeitos visuais modernos e profissionais

## 📁 Estrutura do Projeto

```
assis-pedroza-site/
├── index.html                 # Página inicial
├── sobre.html                 # Página sobre o escritório
├── areas-de-atuacao.html      # Áreas de atuação jurídica
├── equipe.html                # Apresentação da equipe
├── contato.html               # Formulário de contato
├── localizacao.html           # Localização dos escritórios
├── politica-privacidade.html  # Política de privacidade (LGPD)
├── css/
│   ├── main.css              # CSS compilado
│   └── main.min.css          # CSS minificado
├── scss/
│   ├── main.scss             # Arquivo principal SCSS
│   ├── _variables.scss       # Variáveis (cores, fontes, etc.)
│   ├── _mixins.scss          # Mixins reutilizáveis
│   ├── _reset.scss           # Reset CSS
│   ├── _grid.scss            # Sistema de grid
│   ├── _header.scss          # Estilos do header
│   ├── _home.scss            # Estilos da página inicial
│   └── _pages.scss           # Estilos das páginas internas
├── js/
│   ├── main.js               # JavaScript principal
│   └── enhanced.js           # Funcionalidades avançadas
├── img/
│   ├── logo-assisepedroza.webp  # Logo do escritório
│   └── images-needed.txt        # Lista de imagens necessárias
└── README.md                 # Este arquivo
```

## 🎨 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **SCSS/CSS3**: Estilização avançada com pré-processador
- **JavaScript ES6+**: Interatividade e animações
- **Font Awesome**: Ícones profissionais
- **Google Fonts**: Tipografia (Montserrat + Open Sans)

## 🔧 Configuração e Instalação

### Pré-requisitos
- Sass (para compilar SCSS)
- Servidor web local (opcional)

### Instalação

1. **Compilar SCSS** (se necessário):
```bash
# Instalar Sass globalmente
npm install -g sass

# Compilar arquivos SCSS
sass scss/main.scss css/main.css

# Compilar versão minificada
sass scss/main.scss css/main.min.css --style=compressed
```

2. **Servir o site**:
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js
npx serve .

# Ou simplesmente abrir index.html no navegador
```

## 📱 Páginas Incluídas

### 1. **Página Inicial (index.html)**
- Hero section com call-to-action
- Apresentação do escritório
- Áreas de atuação em destaque
- Depoimentos de clientes
- Formulário de contato rápido

### 2. **Sobre (sobre.html)**
- História do escritório
- Missão, visão e valores
- Diferenciais competitivos
- Números e conquistas
- Compromisso ético

### 3. **Áreas de Atuação (areas-de-atuacao.html)**
- Direito Empresarial
- Direito Tributário
- Direito Imobiliário
- Direito do Consumidor
- Assessoria ao Idoso/Deficiente
- Direito Previdenciário
- FAQ por área

### 4. **Equipe (equipe.html)**
- Dr. Diego de Assis Ferreira
- Dr. Matheus Silva Pedroza
- Dr. Juan Pereira
- Valores profissionais
- Filosofia de trabalho

### 5. **Contato (contato.html)**
- Formulário de contato completo
- Informações das unidades
- Horários de atendimento
- FAQ sobre atendimento

### 6. **Localização (localizacao.html)**
- Mapas interativos
- Endereços completos
- Como chegar
- Informações de acessibilidade

## 🎯 Funcionalidades Especiais

### SEO e Performance
- Meta tags otimizadas
- Schema.org para advogados
- Open Graph para redes sociais
- Lazy loading de imagens
- CSS e JS minificados

### Interatividade
- Menu mobile responsivo
- Animações on scroll
- Formulários com validação
- FAQ accordion
- Smooth scrolling
- Progress bar de leitura
- Botão scroll to top

### Conversão
- Botões WhatsApp flutuantes
- CTAs estratégicos
- Formulários otimizados
- Links diretos para contato

## 📞 Informações de Contato

### Volta Redonda (Matriz)
- **Endereço**: R. Idalina Savignon Cardoso, 54, Aterrado
- **CEP**: 27215-250
- **WhatsApp**: (24) 99882-6321

### Belford Roxo (Filial)
- **Endereço**: Av. Joaquim da Costa Lima, 7070, sala 101, Lote XV
- **CEP**: 26112-055
- **WhatsApp**: (24) 99882-6321

### Digital
- **Instagram**: @adv.assispedroza
- **Horário**: Segunda a Sexta, 9h às 18h

## 🔒 Conformidade LGPD

O site inclui:
- Política de Privacidade completa
- Consentimento para uso de dados
- Informações sobre cookies
- Direitos do titular dos dados

## 📝 Customização

### Cores
As cores principais estão definidas em `scss/_variables.scss`:
- Primária: `rgb(122, 9, 16)` (Vinho)
- Secundária: `rgb(227, 27, 41)` (Vermelho)
- WhatsApp: `#25D366`

### Fontes
- **Títulos**: Montserrat (Google Fonts)
- **Texto**: Open Sans (Google Fonts)

### Imagens
Consulte `img/images-needed.txt` para a lista completa de imagens necessárias e suas especificações.

## 🚀 Deploy

O site está pronto para deploy em qualquer servidor web. Recomendações:

1. **Hospedagem**: Netlify, Vercel, GitHub Pages
2. **CDN**: Cloudflare para performance
3. **SSL**: Certificado obrigatório
4. **Domínio**: assisepedroza.com.br (sugerido)

## 📈 Próximos Passos

1. Adicionar imagens reais da equipe e escritórios
2. Integrar formulário com backend/email
3. Configurar Google Analytics
4. Implementar chat online
5. Adicionar blog jurídico
6. Integração com redes sociais

## 🤝 Suporte

Para dúvidas sobre implementação ou customização, consulte a documentação dos arquivos ou entre em contato com a equipe de desenvolvimento.

---

**Desenvolvido com ❤️ para Assis & Pedroza Sociedade de Advogados**
