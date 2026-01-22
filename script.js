// ============================================
// DARK MODE TOGGLE
// ============================================

// Obtener elementos
const switcher = document.querySelector('.swicther');
const body = document.body;

// Verificar si hay preferencia guardada
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
}

// Toggle al hacer click
switcher.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Guardar preferencia
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// ============================================
// SMOOTH SCROLL PARA NAVEGACIÓN
// ============================================

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// FILTRO DE TRABAJOS (Opcional)
// ============================================

const filterButtons = document.querySelectorAll('.btn-jobs button');
const jobCards = document.querySelectorAll('.job1 > div, .jobs2 > div');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase activa de todos
        filterButtons.forEach(btn => {
            btn.parentElement.className = btn.parentElement.className.replace(' active', '');
        });
        
        // Agregar clase activa al clickeado
        button.parentElement.classList.add('active');
        
        // Aquí podrías filtrar las tarjetas según categoría
        // Por ahora solo muestra todas
        jobCards.forEach(card => {
            card.style.display = 'block';
        });
    });
});

// ============================================
// VALIDACIÓN DE FORMULARIO
// ============================================

const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validaciones simples
    if (nameInput.value.trim() === '') {
        alert('Por favor ingresa tu nombre');
        nameInput.focus();
        return;
    }
    
    if (!isValidEmail(emailInput.value)) {
        alert('Por favor ingresa un correo válido');
        emailInput.focus();
        return;
    }
    
    if (messageInput.value.trim() === '') {
        alert('Por favor escribe un mensaje');
        messageInput.focus();
        return;
    }
    
    // Si todo está bien
    alert('¡Mensaje enviado correctamente! (simulado)');
    form.reset();
});

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ============================================
// ANIMACIONES AL HACER SCROLL (Opcional)
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar a las secciones
const sections = document.querySelectorAll('.my-clients, .my-jobs, .about-me, .form-contac');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ============================================
// AÑO DINÁMICO EN FOOTER
// ============================================

const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}