// main.js — основные интерактивные функции сайта

// 1. Открытие/закрытие мобильного меню
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    document.querySelector('.header-content').prepend(menuToggle);

    const nav = document.querySelector('nav ul');
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('show');
    });

    // Закрыть меню при клике на ссылку
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show');
        });
    });
});

// 2. Плавная прокрутка по якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 3. Активация кнопки чат-бота
document.addEventListener('DOMContentLoaded', function () {
    const chatButton = document.createElement('button');
    chatButton.id = 'chat-bot-btn';
    chatButton.textContent = '💬 Поддержка';
    document.body.appendChild(chatButton);

    chatButton.addEventListener('click', function () {
        alert('Чат-бот временно недоступен. Обратитесь на info@drivebit.ru');
    });
});

// 4. Управление датами в форме поиска
document.addEventListener('DOMContentLoaded', function () {
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');

    if (startDateInput && endDateInput) {
        const today = new Date().toISOString().split('T')[0];
        startDateInput.min = today;
        endDateInput.min = today;

        startDateInput.addEventListener('change', function () {
            if (this.value) {
                endDateInput.min = this.value;
            }
        });
    }
});