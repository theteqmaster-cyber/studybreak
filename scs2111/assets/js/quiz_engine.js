/* Kyukei SCS2111 Quiz & Exam Drill Engine */

function renderQuiz(quizContainerId, questions) {
  const container = document.getElementById(quizContainerId);
  if (!container) return;

  let score = 0;
  let answeredCount = 0;

  let html = `<div class="quiz-wrapper">`;

  questions.forEach((q, qIdx) => {
    html += `
      <div class="card quiz-card" id="q-card-${qIdx}">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.8rem;">
          <span class="badge badge-purple">Question ${qIdx + 1} of ${questions.length}</span>
          <span class="badge badge-cyan">${q.category || 'Exam Drill'}</span>
        </div>
        <h4 style="color:var(--text-main); font-size:1.05rem; margin-bottom:1rem;">${q.question}</h4>
        
        <div class="quiz-options" style="display:flex; flex-direction:column; gap:8px;">
          ${q.options.map((opt, oIdx) => `
            <button class="quiz-opt-btn" 
                    data-qidx="${qIdx}" 
                    data-oidx="${oIdx}"
                    style="text-align:left; padding:10px 14px; background:rgba(16,23,42,0.8); border:1px solid var(--border-color); color:var(--text-muted); border-radius:var(--radius-sm); font-size:0.9rem; cursor:pointer; transition:all 0.2s ease;">
              <strong style="color:var(--primary-cyan); font-family:var(--font-code);">${String.fromCharCode(65 + oIdx)}.</strong> ${opt}
            </button>
          `).join('')}
        </div>

        <div class="quiz-explanation" id="exp-${qIdx}" style="display:none; margin-top:1rem; padding:10px 14px; border-radius:var(--radius-sm); font-size:0.88rem;"></div>
      </div>
    `;
  });

  html += `
    <div id="quiz-summary-box" style="display:none; background:rgba(16,23,42,0.9); border:1px solid var(--primary-cyan); padding:1.5rem; border-radius:var(--radius-md); text-align:center; margin-top:1.5rem;">
      <h3 style="color:var(--primary-cyan); margin-bottom:0.5rem;">Exam Drill Complete!</h3>
      <div id="final-score-text" style="font-size:1.4rem; font-weight:700; font-family:var(--font-code); color:var(--accent-green);"></div>
      <p style="color:var(--text-muted); font-size:0.9rem; margin-top:0.5rem;">Review detailed explanations above to master both exam theory and industrial scenarios.</p>
    </div>
  </div>`;

  container.innerHTML = html;

  // Add click listeners
  container.querySelectorAll('.quiz-opt-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const qIdx = parseInt(btn.getAttribute('data-qidx'), 10);
      const oIdx = parseInt(btn.getAttribute('data-oidx'), 10);
      const qData = questions[qIdx];
      const card = document.getElementById(`q-card-${qIdx}`);

      // Disable buttons for this question
      card.querySelectorAll('.quiz-opt-btn').forEach(b => b.disabled = true);

      const expBox = document.getElementById(`exp-${qIdx}`);
      expBox.style.display = 'block';

      if (oIdx === qData.correct) {
        score++;
        btn.style.background = 'rgba(52, 211, 153, 0.2)';
        btn.style.borderColor = 'var(--accent-green)';
        btn.style.color = 'var(--accent-green)';
        expBox.style.background = 'rgba(52, 211, 153, 0.1)';
        expBox.style.border = '1px solid var(--accent-green)';
        expBox.innerHTML = `<strong style="color:var(--accent-green);">✓ Correct!</strong> ${qData.explanation}`;
      } else {
        btn.style.background = 'rgba(244, 63, 94, 0.2)';
        btn.style.borderColor = 'var(--accent-rose)';
        btn.style.color = 'var(--accent-rose)';
        expBox.style.background = 'rgba(244, 63, 94, 0.1)';
        expBox.style.border = '1px solid var(--accent-rose)';
        expBox.innerHTML = `<strong style="color:var(--accent-rose);">✗ Incorrect.</strong> Correct answer is <strong>${String.fromCharCode(65 + qData.correct)}</strong>. <br>${qData.explanation}`;
      }

      answeredCount++;
      if (answeredCount === questions.length) {
        const summary = document.getElementById('quiz-summary-box');
        const scoreText = document.getElementById('final-score-text');
        if (summary && scoreText) {
          const pct = Math.round((score / questions.length) * 100);
          scoreText.textContent = `Score: ${score} / ${questions.length} (${pct}%)`;
          summary.style.display = 'block';
        }
      }
    });
  });
}
