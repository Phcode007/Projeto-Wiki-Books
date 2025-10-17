// ==========================================
// FUNÇÕES AUXILIARES
// ==========================================

/**
 * Normaliza texto removendo acentos e convertendo para minúsculas
 * @param {string} texto - Texto a ser normalizado
 * @returns {string} Texto normalizado
 */
function normalizar(texto) {
  if (!texto) return "";
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/**
 * Debounce para evitar execuções excessivas de funções
 * @param {Function} func - Função a ser executada
 * @param {number} delay - Tempo de espera em milissegundos
 * @returns {Function}
 */
let timeoutId;
function debounce(func, delay = 300) {
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

/**
 * Destaca o termo de pesquisa no texto
 * @param {string} texto - Texto original
 * @param {string} termo - Termo a ser destacado
 * @returns {string} Texto com destaque HTML
 */
function destacarTexto(texto, termo) {
  if (!termo || termo.length < 2) return texto;

  const regex = new RegExp(`(${termo})`, "gi");
  return texto.replace(regex, "<mark>$1</mark>");
}

// ==========================================
// FUNÇÃO PRINCIPAL DE PESQUISA
// ==========================================

/**
 * Realiza a pesquisa nos dados de livros
 */
function pesquisar() {
  const section = document.getElementById("resultados-pesquisa");
  const campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

  // Validação de entrada
  if (!campoPesquisa) {
    section.innerHTML = `
      <div class="mensagem-vazia">
        <p>📚 Digite o nome de um livro, autor ou palavra-chave para começar sua busca!</p>
      </div>
    `;
    return;
  }

  // Validação de tamanho mínimo
  if (campoPesquisa.length < 2) {
    section.innerHTML = `
      <div class="mensagem-vazia">
        <p>⚠️ Digite pelo menos 2 caracteres para realizar a busca.</p>
      </div>
    `;
    return;
  }

  const termoPesquisa = normalizar(campoPesquisa);
  const resultados = [];

  // Busca com sistema de pontuação de relevância
  for (const dado of dados) {
    let pontos = 0;
    const titulo = normalizar(dado.titulo);
    const descricao = normalizar(dado.descricao);
    const autor = normalizar(dado.autor || "");
    const tags = normalizar(dado.tags || "");

    // Sistema de pontuação progressivo
    // Título exato = máxima prioridade
    if (titulo === termoPesquisa) {
      pontos += 100;
    } else if (titulo.startsWith(termoPesquisa)) {
      pontos += 50;
    } else if (titulo.includes(termoPesquisa)) {
      pontos += 30;
    }

    // Autor
    if (autor === termoPesquisa) {
      pontos += 80;
    } else if (autor.includes(termoPesquisa)) {
      pontos += 40;
    }

    // Tags
    if (tags.includes(termoPesquisa)) {
      pontos += 20;
    }

    // Descrição (menor prioridade)
    if (descricao.includes(termoPesquisa)) {
      pontos += 10;
    }

    // Se houver alguma pontuação, adiciona aos resultados
    if (pontos > 0) {
      resultados.push({ dado, pontos });
    }
  }

  // Ordena por relevância (maior pontuação primeiro)
  resultados.sort((a, b) => b.pontos - a.pontos);

  // Renderiza os resultados
  renderizarResultados(resultados, campoPesquisa, section);
}

// ==========================================
// RENDERIZAÇÃO DE RESULTADOS
// ==========================================

/**
 * Renderiza os resultados da pesquisa na tela
 * @param {Array} resultados - Array com os resultados encontrados
 * @param {string} termoPesquisa - Termo pesquisado
 * @param {HTMLElement} section - Elemento onde exibir resultados
 */
function renderizarResultados(resultados, termoPesquisa, section) {
  // Nenhum resultado encontrado
  if (resultados.length === 0) {
    section.innerHTML = `
      <div class="mensagem-vazia">
        <p>😕 Nenhum resultado encontrado para "<strong>${escapeHtml(
          termoPesquisa
        )}</strong>"</p>
        <p>Tente pesquisar por:</p>
        <ul>
          <li>Nome do livro (ex: "1984", "Dom Casmurro")</li>
          <li>Nome do autor (ex: "Machado de Assis", "George Orwell")</li>
          <li>Gênero ou tema (ex: "romance", "distopia", "finanças")</li>
        </ul>
      </div>
    `;
    return;
  }

  // Monta o HTML dos resultados
  const htmlResultados = resultados
    .map(
      ({ dado }) => `
    <article class="item-resultado">
      <h2>
        <a href="${escapeHtml(
          dado.link
        )}" target="_blank" rel="noopener noreferrer">
          ${escapeHtml(dado.titulo)}
        </a>
      </h2>
      ${dado.autor ? `<p class="autor">✍️ ${escapeHtml(dado.autor)}</p>` : ""}
      <p class="descricao-meta">${escapeHtml(dado.descricao)}</p>
      <div class="links-container">
        <a href="${escapeHtml(dado.link)}" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="link-info"
           title="Mais informações sobre ${escapeHtml(dado.titulo)}">
          📖 Mais informações
        </a>
        ${
          dado.linkof
            ? `
          <a href="${escapeHtml(dado.linkof)}" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="link-ofertas"
             title="Ver ofertas de ${escapeHtml(dado.titulo)}">
            🛒 Ver ofertas
          </a>
        `
            : ""
        }
      </div>
    </article>
  `
    )
    .join("");

  // Exibe contador e resultados
  section.innerHTML = `
    <div class="contador-resultados">
      <p>✨ Encontrado${resultados.length > 1 ? "s" : ""} <strong>${
    resultados.length
  }</strong> 
         resultado${resultados.length > 1 ? "s" : ""} para 
         "<strong>${escapeHtml(termoPesquisa)}</strong>"</p>
    </div>
    ${htmlResultados}
  `;

  // Scroll suave para o primeiro resultado
  section.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// SEGURANÇA - ESCAPE HTML
// ==========================================

/**
 * Escapa caracteres HTML para prevenir XSS
 * @param {string} texto - Texto a ser escapado
 * @returns {string} Texto seguro
 */
function escapeHtml(texto) {
  if (!texto) return "";
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

function inicializar() {
  const input = document.getElementById("campo-pesquisa");
  const button = document.querySelector('button[onclick="pesquisar()"]');

  if (!input || !button) {
    console.error("Elementos não encontrados!");
    return;
  }

  // Pesquisa ao pressionar Enter
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      pesquisar();
    }
  });

  input.focus();

  input.addEventListener("input", function () {
    if (this.value.length === 1) {
      const section = document.getElementById("resultados-pesquisa");
      const mensagemInicial = section.querySelector(".mensagem-inicial");
      if (mensagemInicial) {
        section.innerHTML = "";
      }
    }
  });

  console.log("✅ Wiki Books inicializado com sucesso!");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", inicializar);
} else {
  inicializar();
}
