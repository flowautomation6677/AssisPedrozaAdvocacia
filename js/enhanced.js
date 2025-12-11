// ===== FUNCIONALIDADES INTERATIVAS AVANÇADAS =====

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== FAQ ACCORDION =====
    function initFAQAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');
            const icon = question.querySelector('i');
            
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Fechar todos os outros itens
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                    const otherIcon = otherItem.querySelector('.faq-question i');
                    if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                });
                
                // Abrir/fechar o item clicado
                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                    if (icon) icon.style.transform = 'rotate(180deg)';
                }
            });
        });
    }
    
    // ===== SCROLL TO TOP BUTTON =====
    function initScrollToTop() {
        const scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        scrollBtn.className = 'scroll-to-top-btn';
        scrollBtn.setAttribute('aria-label', 'Voltar ao topo');
        
        scrollBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: rgb(122, 9, 16);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            font-size: 18px;
        `;
        
        document.body.appendChild(scrollBtn);
        
        window.addEventListener('scroll', throttle(() => {
            if (window.pageYOffset > 300) {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.visibility = 'visible';
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.visibility = 'hidden';
            }
        }, 100));
        
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Hover effect
        scrollBtn.addEventListener('mouseenter', () => {
            scrollBtn.style.background = 'rgb(227, 27, 41)';
            scrollBtn.style.transform = 'scale(1.1)';
        });
        
        scrollBtn.addEventListener('mouseleave', () => {
            scrollBtn.style.background = 'rgb(122, 9, 16)';
            scrollBtn.style.transform = 'scale(1)';
        });
    }
    
    // ===== PROGRESS BAR =====
    function initProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.className = 'reading-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, rgb(122, 9, 16), rgb(227, 27, 41));
            z-index: 9999;
            transition: width 0.3s ease;
        `;
        
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', throttle(() => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
            
            progressBar.style.width = scrollPercent + '%';
        }, 50));
    }
    
    // ===== HOVER EFFECTS AVANÇADOS =====
    function initAdvancedHoverEffects() {
        // Cards com efeito de elevação
        const cards = document.querySelectorAll('.card, .service-card, .area-card, .team-card, .contato-card, .valor-item, .diferencial-item');
        
        cards.forEach(card => {
            card.style.transition = 'all 0.3s ease';
            
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
                this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            });
        });
        
        // Botões com efeito ripple
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-whatsapp, .header-cta');
        
        buttons.forEach(button => {
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255,255,255,0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
    
    // ===== TYPEWRITER EFFECT =====
    function initTypewriter() {
        const typewriterElements = document.querySelectorAll('.typewriter');
        
        typewriterElements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            element.style.borderRight = '2px solid rgb(122, 9, 16)';
            element.style.animation = 'blink 1s infinite';
            
            let i = 0;
            const typeInterval = setInterval(() => {
                element.textContent += text.charAt(i);
                i++;
                
                if (i >= text.length) {
                    clearInterval(typeInterval);
                    setTimeout(() => {
                        element.style.borderRight = 'none';
                        element.style.animation = 'none';
                    }, 1000);
                }
            }, 100);
        });
    }
    
    // ===== PARALLAX SUAVE =====
    function initParallax() {
        const parallaxElements = document.querySelectorAll('.parallax, .hero-bg');
        
        if (parallaxElements.length > 0) {
            window.addEventListener('scroll', throttle(() => {
                const scrolled = window.pageYOffset;
                
                parallaxElements.forEach(element => {
                    const rate = scrolled * -0.3;
                    element.style.transform = `translateY(${rate}px)`;
                });
            }, 16));
        }
    }
    
    // ===== LAZY LOADING AVANÇADO =====
    function initAdvancedLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Criar uma nova imagem para pré-carregar
                    const newImg = new Image();
                    newImg.onload = () => {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        img.classList.remove('lazy');
                    };
                    newImg.src = img.dataset.src;
                    
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px'
        });
        
        images.forEach(img => {
            img.classList.add('lazy');
            imageObserver.observe(img);
        });
    }
    
    // ===== FORMULÁRIO MELHORADO =====
    function initEnhancedForm() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea, select');
            
            inputs.forEach(input => {
                // Efeito de foco nos inputs
                input.addEventListener('focus', function() {
                    this.parentElement.classList.add('focused');
                });
                
                input.addEventListener('blur', function() {
                    if (!this.value) {
                        this.parentElement.classList.remove('focused');
                    }
                });
                
                // Validação em tempo real
                input.addEventListener('input', function() {
                    validateField(this);
                });
            });
        });
    }
    
    function validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        const required = field.hasAttribute('required');
        
        // Remover classes de validação anteriores
        field.classList.remove('valid', 'invalid');
        
        if (required && !value) {
            field.classList.add('invalid');
            return false;
        }
        
        if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.classList.add('invalid');
                return false;
            }
        }
        
        if (type === 'tel' && value) {
            const phoneRegex = /^(\+55\s?)?(\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$/;
            if (!phoneRegex.test(value.replace(/\s/g, ''))) {
                field.classList.add('invalid');
                return false;
            }
        }
        
        if (value) {
            field.classList.add('valid');
        }
        
        return true;
    }
    
    // ===== NOTIFICAÇÕES TOAST =====
    function showToast(message, type = 'info', duration = 5000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="toast-close" aria-label="Fechar">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
            color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
            border: 1px solid ${type === 'success' ? '#c3e6cb' : type === 'error' ? '#f5c6cb' : '#bee5eb'};
            border-radius: 8px;
            padding: 16px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            max-width: 400px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        `;
        
        document.body.appendChild(toast);
        
        // Animar entrada
        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
        }, 100);
        
        // Botão de fechar
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => {
            removeToast(toast);
        });
        
        // Auto-remover
        setTimeout(() => {
            removeToast(toast);
        }, duration);
    }
    
    function removeToast(toast) {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }
    
    // ===== MODAL SYSTEM =====
    function initModalSystem() {
        const modalTriggers = document.querySelectorAll('[data-modal]');
        
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                const modalId = this.getAttribute('data-modal');
                openModal(modalId);
            });
        });
    }
    
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // Fechar com ESC
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeModal(modalId);
                }
            });
            
            // Fechar clicando fora
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal(modalId);
                }
            });
        }
    }
    
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
    
    // ===== SEARCH FUNCTIONALITY =====
    function initSearch() {
        const searchInput = document.querySelector('.search-input');
        if (!searchInput) return;
        
        searchInput.addEventListener('input', debounce(function() {
            const query = this.value.toLowerCase().trim();
            const searchableElements = document.querySelectorAll('[data-searchable]');
            
            searchableElements.forEach(element => {
                const text = element.textContent.toLowerCase();
                if (text.includes(query) || query === '') {
                    element.style.display = '';
                } else {
                    element.style.display = 'none';
                }
            });
        }, 300));
    }
    
    // ===== INICIALIZAÇÃO =====
    initFAQAccordion();
    initScrollToTop();
    initProgressBar();
    initAdvancedHoverEffects();
    initTypewriter();
    initParallax();
    initAdvancedLazyLoading();
    initEnhancedForm();
    initModalSystem();
    initSearch();
    
    // Adicionar estilos CSS necessários
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes blink {
            0%, 50% { border-color: transparent; }
            51%, 100% { border-color: rgb(122, 9, 16); }
        }
        
        .lazy {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .lazy.loaded {
            opacity: 1;
        }
        
        .form-group.focused label {
            color: rgb(122, 9, 16);
            transform: translateY(-20px) scale(0.9);
        }
        
        .form-group input.valid,
        .form-group textarea.valid,
        .form-group select.valid {
            border-color: #28a745;
        }
        
        .form-group input.invalid,
        .form-group textarea.invalid,
        .form-group select.invalid {
            border-color: #dc3545;
        }
        
        .toast-content {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .toast-close {
            background: none;
            border: none;
            cursor: pointer;
            opacity: 0.7;
            transition: opacity 0.2s ease;
        }
        
        .toast-close:hover {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
    
    // Expor funções globalmente se necessário
    window.showToast = showToast;
    window.openModal = openModal;
    window.closeModal = closeModal;
});

// ===== UTILITY FUNCTIONS =====

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
