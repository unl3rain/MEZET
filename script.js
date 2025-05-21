document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - (document.querySelector('.header').offsetHeight || 0),
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    var span = document.getElementsByClassName("close-button")[0];
    var galleryImages = document.querySelectorAll(".works-section .work-item .work-image");
    galleryImages.forEach(function(img) {
        img.onclick = function() {
            modal.style.display = "flex";
            modalImg.src = this.src;
            var workInfo = this.nextElementSibling;
            var title = workInfo.querySelector('h3').innerText;
            var artist = workInfo.querySelector('.work-artist').innerText;
            captionText.innerHTML = "<strong>" + title + "</strong><br>" + artist;
        }
    });
    span.onclick = function() {
        modal.style.display = "none";
    }
    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // ... Ваш существующий код для модального окна ...

    // Инициализация Swiper для галереи фотосессии
    var mySwiper = new Swiper('.photoshoot-gallery', {
        // Обязательные параметры
        slidesPerView: 'auto', // Отображает столько слайдов, сколько помещается, с учетом их ширины
        spaceBetween: 20, // Расстояние между слайдами (должно совпадать с gap в CSS или быть немного больше)

        // Навигация (стрелки)
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Пагинация (точки внизу)
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Позволяет кликать по точкам для перехода к слайду
        },

        // Улучшение чувствительности и поведения свайпа (как в Instagram)
        freeMode: true, // Позволяет свободно прокручивать, без прилипания к слайду
        grabCursor: true, // Меняет курсор на "руку" при наведении
        resistanceRatio: 0.8, // Контролирует сопротивление при перетаскивании (0 - нет сопротивления, 1 - полное)
                               // Экспериментируйте: меньшее значение для более "свободного" свайпа.

        // Адаптивность (опционально, для разных размеров экрана)
        breakpoints: {
            640: { // Когда ширина экрана <= 640px
                slidesPerView: 1,
                spaceBetween: 10,
                freeMode: false, // На мобильных часто лучше иметь прилипание к слайду
            },
            768: { // Когда ширина экрана >= 768px
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: { // Когда ширина экрана >= 1024px
                slidesPerView: 'auto',
                spaceBetween: 30,
            },
        },
    });
});