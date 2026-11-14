/**
 * The Hawthorn Tree Acupuncture Clinic — Standalone Script
 * Pure Vanilla JavaScript. Zero external frameworks.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            const isOpen = mobileNav.classList.contains('active');
            mobileMenuBtn.innerHTML = isOpen ? '&times;' : '&#9776;';
        });

        // Close mobile nav when clicking a link
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                mobileMenuBtn.innerHTML = '&#9776;';
            });
        });
    }

    // 2. FAQ Accordion Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        if (questionBtn) {
            questionBtn.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                // Close other items
                faqItems.forEach(other => other.classList.remove('active'));
                // Toggle clicked item
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // 3. Service Cards Click-to-Enquire linking
    const serviceButtons = document.querySelectorAll('.select-service-btn');
    const serviceSelect = document.getElementById('userService');

    serviceButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const serviceName = btn.getAttribute('data-service-name');
            if (serviceSelect && serviceName) {
                for (let i = 0; i < serviceSelect.options.length; i++) {
                    if (serviceSelect.options[i].value === serviceName) {
                        serviceSelect.selectedIndex = i;
                        break;
                    }
                }
            }
        });
    });

    // 4. Appointment Enquiry Form
    const enquiryForm = document.getElementById('enquiryForm');
    const successBox = document.getElementById('successBox');
    const successTitle = document.getElementById('successTitle');
    const successDesc = document.getElementById('successDesc');
    const resetFormBtn = document.getElementById('resetFormBtn');

    if (enquiryForm && successBox) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('userName');
            const emailInput = document.getElementById('userEmail');
            const serviceInput = document.getElementById('userService');

            const name = nameInput ? nameInput.value.trim() : 'Patient';
            const email = emailInput ? emailInput.value.trim() : '';
            const service = serviceInput ? serviceInput.value : 'Acupuncture';

            // Show friendly confirmation
            if (successTitle) {
                successTitle.textContent = `Thank you, ${name}!`;
            }
            if (successDesc) {
                successDesc.textContent = `Your enquiry regarding ${service} has been received. Maureen will be in touch directly with you via ${email} to discuss your appointment.`;
            }

            enquiryForm.style.display = 'none';
            successBox.style.display = 'block';
        });

        if (resetFormBtn) {
            resetFormBtn.addEventListener('click', () => {
                enquiryForm.reset();
                enquiryForm.style.display = 'flex';
                successBox.style.display = 'none';
            });
        }
    }
});
