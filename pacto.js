document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha todos os outros itens para criar efeito de um por vez
      accordionItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const otherHeader = otherItem.querySelector('.accordion-header');
          const otherContent = otherItem.querySelector('.accordion-content');
          otherContent.style.maxHeight = '0px';
          otherHeader.setAttribute('aria-expanded', 'false');
          otherContent.setAttribute('aria-hidden', 'true');
        }
      });

      // Alterna o estado (aberto/fechado) do item clicado
      item.classList.toggle('active');
      
      if (item.classList.contains('active')) {
        // A altura do conteúdo é calculada dinamicamente para animar
        content.style.maxHeight = content.scrollHeight + 'px';
        header.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
      } else {
        content.style.maxHeight = '0px';
        header.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');
      }
    });
  });

  // Atualiza o ano no rodapé automaticamente
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = currentYear;
  }
});