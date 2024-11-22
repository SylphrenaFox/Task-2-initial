import './index.css';

const cookieConsent = document.querySelector('.cookie-consent');
const consentButton = document.querySelector('.cookie-consent__button');
const hasConsented = localStorage.getItem('cookie-consent');

if (hasConsented) {
    cookieConsent.classList.add('hide');
}

consentButton.addEventListener('click', () => {
    localStorage.setItem('cookie-consent', 'true');
    cookieConsent.classList.add('hide');
});