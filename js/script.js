// ==========================================================
// ROLAGEM SUAVE — menu (Home, Cardápio, Contato)
// ==========================================================
document.querySelectorAll('nav a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (evento) {
        evento.preventDefault(); // impede o salto brusco padrão do navegador

        const idAlvo = this.getAttribute('href').substring(1); // remove o "#"
        const secaoAlvo = document.getElementById(idAlvo);

        if (secaoAlvo) {
            secaoAlvo.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================================
// MODAL DE DETALHES DO PRODUTO
// Cada card do cardápio tem atributos data-nome, data-descricao,
// data-preco e data-imagem. Ao clicar, lemos esses atributos e
// preenchemos o modal antes de exibi-lo.
// ==========================================================
const overlay = document.getElementById('modalOverlay');
const modalImagem = document.getElementById('modalImagem');
const modalTitulo = document.getElementById('modalTitulo');
const modalDescricao = document.getElementById('modalDescricao');
const modalPreco = document.getElementById('modalPreco');
const botaoFechar = document.getElementById('modalFechar');

function abrirModal(card) {
    modalImagem.src = card.dataset.imagem;
    modalImagem.alt = card.dataset.nome;
    modalTitulo.textContent = card.dataset.nome;
    modalDescricao.textContent = card.dataset.descricao;
    modalPreco.textContent = card.dataset.preco;

    overlay.classList.add('aberto');
    botaoFechar.focus(); // acessibilidade: foco vai direto pro botão de fechar
}

function fecharModal() {
    overlay.classList.remove('aberto');
}

// Abre o modal ao clicar em qualquer card do cardápio
document.querySelectorAll('.produto-card').forEach(function (card) {
    card.addEventListener('click', function () {
        abrirModal(card);
    });

    // Acessibilidade: permite abrir o modal também pelo teclado (Enter ou Espaço)
    card.addEventListener('keydown', function (evento) {
        if (evento.key === 'Enter' || evento.key === ' ') {
            evento.preventDefault();
            abrirModal(card);
        }
    });
});

// Fecha o modal ao clicar no "X"
botaoFechar.addEventListener('click', fecharModal);

// Fecha o modal ao clicar fora da caixa (na área escura ao redor)
overlay.addEventListener('click', function (evento) {
    if (evento.target === overlay) {
        fecharModal();
    }
});

// Fecha o modal ao apertar a tecla ESC
document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape' && overlay.classList.contains('aberto')) {
        fecharModal();
    }
});