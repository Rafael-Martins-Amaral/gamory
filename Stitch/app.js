const app = {
  activeScreen: 'login',
  isLoggedIn: false,

  init() {
    // Hide nav items on login screen initially
    this.updateHeaderVisibility();
    
    // Add interactive hover effects to tags
    document.querySelectorAll('.tag').forEach(tag => {
      tag.addEventListener('click', (e) => {
        e.target.parentElement.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
      });
    });

    // Star rating interaction in modal
    const stars = document.querySelectorAll('.star-rating i');
    stars.forEach((star, index) => {
      star.addEventListener('click', () => {
        stars.forEach((s, i) => {
          if (i <= index) {
            s.classList.remove('ph-regular');
            s.classList.add('ph-fill');
          } else {
            s.classList.remove('ph-fill');
            s.classList.add('ph-regular');
          }
        });
      });
    });
  },

  navigate(screenId) {
    if (screenId !== 'login' && !this.isLoggedIn) {
      screenId = 'login';
    }

    // Update active screen state
    this.activeScreen = screenId;

    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active');
    });

    // Show target screen
    const target = document.getElementById(`screen-${screenId}`);
    if (target) {
      target.classList.add('active');
      // Scroll to top
      target.scrollTop = 0;
    }

    // Update nav links active state
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.textContent.toLowerCase().includes(screenId) || 
         (screenId === 'search' && link.textContent === 'Browse')) {
        link.classList.add('active');
      }
    });

    this.updateHeaderVisibility();
  },

  login() {
    this.isLoggedIn = true;
    this.navigate('home');
  },

  updateHeaderVisibility() {
    const nav = document.querySelector('.header-nav');
    const authBtn = document.querySelector('.header-actions .btn-primary');
    const avatar = document.getElementById('user-avatar');

    if (this.activeScreen === 'login') {
      nav.style.display = 'none';
      if (authBtn) authBtn.style.display = 'flex';
      if (avatar) avatar.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      if (authBtn) authBtn.style.display = 'none';
      if (avatar) avatar.style.display = 'block';
    }
  },

  openModal() {
    const modal = document.getElementById('review-modal');
    if (modal) modal.classList.add('active');
  },

  closeModal() {
    const modal = document.getElementById('review-modal');
    if (modal) modal.classList.remove('active');
  }
};

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
