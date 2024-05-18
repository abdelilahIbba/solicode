document.getElementById('language-toggle').addEventListener('click', function()
{
    document.documentElement.setAttribute('lang', document.documentElement.lang === 'en' ? 'fr' : 'en');
    this.textContent = document.documentElement.lang === 'en' ? 'Switch to French' : 'Switch to English';
});
