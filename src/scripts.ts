document.addEventListener('DOMContentLoaded', () => {
  console.log('Document is ready!');

  // Smooth scrolling for anchor links
  document.querySelectorAll < HTMLAnchorElement > ('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e: Event) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId) {
        document.querySelector(targetId)?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Language toggle
  const toggleLangButton = document.getElementById('toggle-lang') as HTMLButtonElement;
  toggleLangButton.addEventListener('click', () => {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    const newDir = currentLang === 'en' ? 'rtl' : 'ltr';

    document.documentElement.lang = newLang;
    document.documentElement.dir = newDir;

    document.querySelectorAll < HTMLElement > ('[data-en]').forEach(element => {
      const newText = element.getAttribute(`data-${newLang}`);
      if (newText) {
        element.textContent = newText;
      }
    });

    toggleLangButton.textContent = newLang === 'en' ? 'AR' : 'EN';
  });
});
