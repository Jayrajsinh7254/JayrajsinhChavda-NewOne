'use strict';

// Reading Progress Bar
const progressBar = document.getElementById('readingProgress');

window.addEventListener('scroll', () => {
  const totalScroll = document.documentElement.scrollTop;
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  if (windowHeight > 0 && progressBar) {
    const scrollPercent = (totalScroll / windowHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
  }
});

// Toast notification trigger
function showToast(message) {
  let toast = document.getElementById('blogToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'blogToast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<ion-icon name="checkmark-circle-outline" style="color: var(--orange-yellow-crayola); font-size: 20px;"></ion-icon> <span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Copy link function
function copyCurrentUrl() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showToast('Article link copied to clipboard!');
  }).catch(() => {
    showToast('Failed to copy link.');
  });
}

// Share functions
function shareOnWhatsApp(title) {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(`Check out this article by Jayrajsinh Chavda: "${title}" - ${window.location.href}`);
  window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
}

function shareOnLinkedIn() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
}

function shareOnTwitter(title) {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(`"${title}" by @Jayrajsinh7254`);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

// FAQ Accordion Toggle
document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      parent.classList.toggle('active');
    });
  });
});

