/* Kyukei SCS2111 Navigation & Progress Tracker (Updated Scope) */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initProgressTracker();
  initTabControllers();
});

const modulePhases = [
  { num: 'M1', title: 'Data Comm Foundations', file: 'phase1_foundations.html' },
  { num: 'M2', title: 'Architectures & Topologies', file: 'phase2_architectures_topologies.html' },
  { num: 'M3', title: 'OSI & TCP/IP Reference Models', file: 'phase3_osi_tcpip_layers.html' },
  { num: 'M4', title: 'Hardware, Media & Cabling', file: 'phase4_hardware_media.html' },
  { num: 'M5', title: 'IP Addressing & Subnetting', file: 'phase5_ip_addressing_subnetting.html' },
  { num: 'M6', title: 'Routing, Switching & VLANs', file: 'phase6_routing_switching_vlans.html' },
  { num: 'M7', title: 'Wireless, Security & NOS', file: 'phase7_wireless_security_nos.html' },
  { num: 'M8', title: 'Attachment Lab & Troubleshooting', file: 'phase8_industrial_attachment_lab.html' }
];

const examDrills = [
  { num: 'E1', title: 'Phase 1: Foundations (30%)', file: 'exam_drill_phase1.html' },
  { num: 'E2', title: 'Phase 2: Subnetting Math (30%)', file: 'exam_drill_phase2.html' },
  { num: 'E3', title: 'Phase 3: Cisco CLI & Topology (20%)', file: 'exam_drill_phase3.html' },
  { num: 'E4', title: 'Phase 4: Enterprise Defense (10%)', file: 'exam_drill_phase4.html' }
];

const ptTutorials = [
  { num: 'PT1', title: 'PT Basics & Ping Mechanics', file: 'pt_tutorial_phase1.html' },
  { num: 'PT2', title: 'VLANs, Trunking & Routing', file: 'pt_tutorial_phase2.html' },
  { num: 'PT3', title: 'Industry IT Mindset & Solvers', file: 'pt_tutorial_phase3.html' }
];

function initNavigation() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;

  // Setup Mobile Drawer Toggle & Backdrop Overlay
  let backdrop = document.querySelector('.sidebar-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'sidebar-backdrop';
    document.body.appendChild(backdrop);
  }

  const header = document.querySelector('header');
  if (header && !document.querySelector('.mobile-toggle-btn')) {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'mobile-toggle-btn';
    toggleBtn.setAttribute('aria-label', 'Toggle Navigation Menu');
    toggleBtn.innerHTML = `☰ <span>Menu</span>`;
    
    // Insert toggle button next to logo
    const logoGroup = header.querySelector('.logo-group');
    if (logoGroup) {
      logoGroup.insertAdjacentElement('afterend', toggleBtn);
    } else {
      header.prepend(toggleBtn);
    }

    const toggleSidebar = () => {
      sidebar.classList.toggle('mobile-open');
      backdrop.classList.toggle('active');
    };

    toggleBtn.addEventListener('click', toggleSidebar);
    backdrop.addEventListener('click', toggleSidebar);
  }

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  let html = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
      <div class="sidebar-title" style="margin-bottom:0;">Course Dashboard</div>
      <button class="mobile-toggle-btn" style="padding:2px 8px; font-size:0.75rem;" onclick="document.querySelector('.sidebar').classList.remove('mobile-open'); document.querySelector('.sidebar-backdrop').classList.remove('active');">✕ Close</button>
    </div>
    <ul class="phase-nav">
      <li>
        <a href="index.html" class="${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}">
          <span class="phase-num">HUB</span>
          <span>Master Course Hub</span>
        </a>
      </li>
    </ul>

    <div class="sidebar-title" style="margin-top:1rem;">Core Topic Modules</div>
    <ul class="phase-nav">
  `;

  modulePhases.forEach((p) => {
    const isActive = currentPath === p.file;
    html += `
      <li>
        <a href="${p.file}" class="${isActive ? 'active' : ''}">
          <span class="phase-num">${p.num}</span>
          <span>${p.title}</span>
        </a>
      </li>
    `;
  });

  html += `
    </ul>
    <div class="sidebar-title" style="margin-top:1rem;">Structured Exam Drills</div>
    <ul class="phase-nav">
  `;

  examDrills.forEach((e) => {
    const isActive = currentPath === e.file;
    html += `
      <li>
        <a href="${e.file}" class="${isActive ? 'active' : ''}">
          <span class="phase-num" style="background:rgba(129,140,248,0.2); color:var(--accent-purple);">${e.num}</span>
          <span>${e.title}</span>
        </a>
      </li>
    `;
  });

  html += `
    </ul>
    <div class="sidebar-title" style="margin-top:1rem;">Packet Tracer Attachment Labs</div>
    <ul class="phase-nav">
  `;

  ptTutorials.forEach((pt) => {
    const isActive = currentPath === pt.file;
    html += `
      <li>
        <a href="${pt.file}" class="${isActive ? 'active' : ''}">
          <span class="phase-num" style="background:rgba(52,211,153,0.2); color:var(--accent-green);">${pt.num}</span>
          <span>${pt.title}</span>
        </a>
      </li>
    `;
  });

  html += `</ul>`;
  sidebar.innerHTML = html;
}

function initProgressTracker() {
  const completedPhases = JSON.parse(localStorage.getItem('scs2111_completed') || '[]');
  
  const currentPath = window.location.pathname.split('/').pop();
  if (currentPath && currentPath !== 'index.html') {
    if (!completedPhases.includes(currentPath)) {
      completedPhases.push(currentPath);
      localStorage.setItem('scs2111_completed', JSON.stringify(completedPhases));
    }
  }

  const progressBadge = document.getElementById('overall-progress');
  if (progressBadge) {
    const total = modulePhases.length + examDrills.length + ptTutorials.length;
    const count = completedPhases.length;
    const percentage = Math.round((count / total) * 100);
    progressBadge.textContent = `${percentage}% Completed (${count}/${total})`;
  }
}

function initTabControllers() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      const container = btn.closest('.tab-container');
      
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
