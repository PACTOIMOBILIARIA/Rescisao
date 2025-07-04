const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    // Fecha todos os outros itens para criar efeito de um por vez
    accordionItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active');
        otherItem.querySelector('.accordion-content').style.maxHeight = '0px';
      }
    });

    // Abre ou fecha o item clicado
    item.classList.toggle('active');
    if (item.classList.contains('active')) {
      // A altura do conteúdo é calculada dinamicamente
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0px';
    }
  });
});

// Atualiza o ano no rodapé automaticamente
document.getElementById('currentYear').textContent = new Date().getFullYear();