// Função para criar um cartão
function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container'); // Pega a seção onde os cartões serão colocados
    const article = document.createElement('article'); // Cria o elemento do cartão
    article.className = 'cartao'; // Atribui a classe de estilo 'cartao'

    const conteudo = document.createElement('div'); // Cria o conteúdo do cartão
    conteudo.className = 'cartao__conteudo'; // Atribui a classe de conteúdo

    // Frente do cartão
    const frente = document.createElement('div');
    frente.className = 'cartao__frente';
    frente.innerHTML = `<div><h3>${categoria}</h3><p>${pergunta}</p></div>`;

    // Verso do cartão
    const verso = document.createElement('div');
    verso.className = 'cartao__verso';
    verso.innerHTML = `<p>${resposta}</p>`;

    conteudo.appendChild(frente); // Adiciona a frente do cartão
    conteudo.appendChild(verso);  // Adiciona o verso do cartão

    article.appendChild(conteudo); // Adiciona o conteúdo ao cartão

    // Adiciona a funcionalidade de virar o cartão ao clicar
    article.addEventListener('click', () => {
        article.classList.toggle('virado'); // Alterna a classe 'virado' para aplicar a rotação
    });

    container.appendChild(article); // Adiciona o cartão ao container
}
