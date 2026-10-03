# Café Raízes

**Site institucional de cafeteria com cardápio interativo e layout responsivo.**

Projeto de portfólio front-end desenvolvido com HTML, CSS e JavaScript puro. Reúne a apresentação da marca, seus diferenciais, um catálogo de produtos e informações de contato em uma página com navegação por seções.

**[Acessar demonstração ao vivo →](https://thiagomiranda92.github.io/cafe-raizes/)**

## Sobre o projeto

A proposta é apresentar uma cafeteria na web e permitir que o visitante explore o cardápio tanto pelo computador quanto pelo celular. Ao selecionar um produto, uma janela de detalhes exibe sua imagem, descrição e preço sem sair da página.

O projeto demonstra fundamentos de desenvolvimento de interfaces: organização de conteúdo em HTML, layouts com CSS Grid e Flexbox, adaptação para diferentes telas e manipulação do DOM com JavaScript.

## Funcionalidades

- **Cardápio interativo:** seis produtos com imagem, descrição e preço; um único modal apresenta os detalhes do item selecionado.
- **Layout responsivo:** grade de produtos adaptável e cabeçalho compacto no celular, com os links do menu na mesma linha.
- **Navegação por seções:** menu fixo no topo durante a rolagem e transição suave para Home, Cardápio e Contato.
- **Interação por teclado:** abertura dos produtos com Enter ou Espaço e fechamento do modal com Escape.
- **Conteúdo institucional:** história, valores, diferenciais e informações de contato da cafeteria.

## Tecnologias e decisões técnicas

| Tecnologia | Aplicação no projeto |
| --- | --- |
| HTML5 | Estrutura com elementos como `header`, `nav`, `main`, `section` e `article`, além de textos alternativos nas imagens. |
| CSS3 | Grid para o cardápio, Flexbox para alinhamentos, variáveis para a paleta de cores e media queries para ajustes em telas menores. |
| JavaScript | Eventos de clique e teclado, leitura de atributos `data-*` e atualização do conteúdo do modal por meio do DOM. |
| GitHub Pages | Hospedagem estática com publicação a partir da branch `main`. |

A implementação utiliza recursos nativos do navegador, sem frameworks ou dependências de execução. Os dados de cada produto ficam em atributos `data-*`, que alimentam o mesmo modal e permitem reutilizar a lógica de exibição.

Há recursos de acessibilidade implementados, como rótulos ARIA, descrição das imagens e foco no botão de fechar ao abrir o modal. O gerenciamento completo do foco ainda é uma oportunidade de melhoria.

## Executar localmente

É necessário apenas um navegador. Para clonar o projeto, utilize o Git:

```bash
git clone https://github.com/thiagomiranda92/cafe-raizes.git
cd cafe-raizes
```

Abra o arquivo `index.html` no navegador. Não é necessário instalar pacotes nem executar uma etapa de build. Mantenha as pastas `css`, `js` e `images` na mesma estrutura do repositório.

## Estrutura do repositório

```text
cafe-raizes/
├── index.html          # Conteúdo e estrutura da página
├── css/
│   └── styles.css      # Identidade visual, componentes e responsividade
├── js/
│   └── script.js       # Navegação e interação com o cardápio
├── images/
│   └── img/            # Fotografias utilizadas no site
└── README.md
```

## Explorar a demonstração

1. Use o menu para navegar até o cardápio e a seção de contato.
2. Selecione um produto para visualizar seus detalhes.
3. Feche o modal pelo botão de fechar, pela área externa ou pela tecla Escape.
4. Abra o site no celular para conferir a adaptação do menu e dos cards.

## Próximas melhorias

- Completar o gerenciamento de foco do modal, com contenção do foco e retorno ao produto que o abriu.
- Otimizar e padronizar os formatos das imagens.
- Implementar a página de política de privacidade referenciada no rodapé.

## Autoria

Desenvolvido por **[thiagomiranda92](https://github.com/thiagomiranda92)** como parte do portfólio de desenvolvimento front-end.
