/* Kyukei SCS2111 Course Helper Script (Clean Text Focus - No Animations) */

document.addEventListener('DOMContentLoaded', () => {
  initTabControllers();
});

function initTabControllers() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      const container = btn.closest('.tab-container');
      if (!container) return;
      
      container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      btn.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.classList.add('active');
    });
  });
}

function toggleAns(id) {
  const el = document.getElementById(id);
  if (el) {
    if (el.style.display === 'none' || el.style.display === '') {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  }
}

window.toggleAns = toggleAns;
