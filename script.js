document.addEventListener('DOMContentLoaded', () => {
    const loadingPage = document.getElementById('loading-page');
    const reportageContent = document.getElementById('reportage-content');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    let progress = 0;

    // Lógica da tela de carregamento
    const timer = setInterval(() => {
        progress += 2;
        if (progress >= 100) {
            progress = 100;
            clearInterval(timer);
            setTimeout(() => {
                loadingPage.style.display = 'none';
                reportageContent.style.display = 'block';
                // Inicia a observação das seções após o conteúdo ser exibido
                observeSections();
            }, 500);
        }
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
        if (progressText) {
            progressText.textContent = `${progress}%`;
        }
    }, 60);

    // Lógica da animação de fade-in
    function observeSections() {
        const sections = document.querySelectorAll('.fade-in-section');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });
    }
});