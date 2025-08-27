// script.js - все скрипты для DriveBit

// Ждем пока вся страница загрузится
document.addEventListener('DOMContentLoaded', function() {
    console.log('DriveBit website loaded!');
    
    // Настройка дат в форме поиска
    setupDateFields();
    
    // Обработка формы поиска
    setupSearchForm();
    
    // Открытие попапа бронирования
    setupBookingPopup();
});

// Настройка полей с датами
function setupDateFields() {
    const today = new Date().toISOString().split('T')[0];
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    
    if (startDateInput) {
        startDateInput.setAttribute('min', today);
    }
    
    if (endDateInput) {
        endDateInput.setAttribute('min', today);
    }
    
    // Обновляем минимальную дату для возврата при выборе даты получения
    if (startDateInput && endDateInput) {
        startDateInput.addEventListener('change', function() {
            endDateInput.setAttribute('min', this.value);
        });
    }
}

// Обработка формы поиска
function setupSearchForm() {
    const searchForm = document.getElementById('searchForm');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const city = document.getElementById('city').value;
            const startDate = document.getElementById('start-date').value;
            const endDate = document.getElementById('end-date').value;
            
            if (!city || !startDate || !endDate) {
                alert('Пожалуйста, заполните все поля');
                return;
            }
            
            // Переходим на страницу каталога
            window.location.href = 'catalog.html';
        });
    }
}

// Попап бронирования
function setupBookingPopup() {
    // Функция открытия попапа
    window.openPopup = function(carId) {
        console.log('Opening popup for car:', carId);
        alert('В реальной версии здесь открывается форма бронирования для ' + carId);
        // Здесь будет код для открытия попапа
    }
    
    // Функция закрытия попапа
    window.closePopup = function() {
        console.log('Closing popup');
        // Здесь будет код для закрытия попапа
    }
}

// Показ уведомлений
function showNotification(message, type = 'success') {
    console.log('Notification:', message);
    // Здесь будет красивый вывод уведомлений
}

// Проверка формы бронирования
function validateBookingForm(formData) {
    console.log('Validating form data:', formData);
    return true; // Временная заглушка
}

// Отправка данных формы
function submitBookingForm(formData) {
    console.log('Submitting booking form:', formData);
    // Здесь будет отправка данных на сервер
}