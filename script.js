/**
 * Função para fazer busca da planta conforme informação digita pelo usuário.
 */
function buscarPlanta() {
    // Obtém o valor digitado no campo de busca, converte para minúsculas para a comparação
    const busca = document.getElementById('busca').value.toLowerCase();
  
    // Obtém a seção onde os resultados serão exibidos
    const secao = document.getElementById('resultados');
  
    // Limpa a seção de resultados antes de exibir novos resultados
    secao.innerHTML = '';
  
    // Filtra o array de plantas, buscando por nome comum ou científico
    const resultados = plantas.filter(planta => {
      // Retorna as plantas onde o nome ou nome científico contém a palavra buscada (ignorando maiúsculas e minúsculas)
      return planta.nome.toLowerCase().includes(busca) ||
             planta.nomeCientifico.toLowerCase().includes(busca);
    });
  
    // Verifica se foram encontrados resultados
    if (resultados.length > 0) {
      // Cria uma string para armazenar os resultados formatados
      let divResultado = '';
  
      // Itera sobre os resultados e cria o HTML para cada planta
      resultados.forEach(planta => {
        divResultado += `
          <div class="item-resultado">
            <h2>${planta.nome}</h2>
            <p class="nome-cientifico-meta">Nome científico: ${planta.nomeCientifico}</p>
            <p class="como-cuidar-meta">Como cuidar: ${planta.comoCuidar}</p>
          </div>`;
      });
  
      // Insere o HTML formatado na seção de resultados
      secao.innerHTML = divResultado;
    } else {
      // Exibe uma mensagem informando que a planta não foi encontrada
      secao.innerHTML = 'Planta não encontrada.';
    }
  }