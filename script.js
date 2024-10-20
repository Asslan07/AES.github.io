if ('IntersectionObserver' in window) {
    // Функция для запуска и остановки анимации
    function playAnimation(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Запуск анимации
                entry.target.style.animationPlayState = 'running';
            } else {
                // Остановка анимации
                entry.target.style.animationPlayState = 'paused';
            }
        });
    }

    // Настройка Intersection Observer
    var observer = new IntersectionObserver(playAnimation, {
        threshold: 0.4  // 50% видимости
    });

    // Отслеживаем элементы с классами 'krishka' и 'zopa'
    document.querySelectorAll('.a1, .a2, .a3, .a4, .a5, .a6').forEach(function(element) {
        observer.observe(element);
    });
} else {
    // Если IntersectionObserver не поддерживается
    console.warn('IntersectionObserver не поддерживается вашим браузером.');
}

window.addEventListener('scroll', function() {
    const fadeDiv = document.getElementById('fadeDiv');
    const rect = fadeDiv.getBoundingClientRect();

    // Проверяем, виден ли элемент
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Проверяем, добавлен ли уже класс 'visible'
        if (!fadeDiv.classList.contains('visible')) {
            // Устанавливаем задержку 3 секунды перед добавлением класса
            setTimeout(() => {
                fadeDiv.classList.add('visible'); // Добавить класс для анимации
            }, 1000); // Задержка в 3000 миллисекунд (3 секунды)
        }
    }
});