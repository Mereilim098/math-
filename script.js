let currentLevel = 1;

const levelsData = {
    1: {
        title: "Level 1: Foundation (Simplified)",
        desc: "A basic introduction to logarithmic form. Reminder: log_a(b) = c means a^c = b.",
        math: "Problem: Evaluate log_2(8).",
        answer: "3",
        hint: "Hint: Ask yourself, 2 raised to what power equals 8? (2^? = 8)"
    },
    2: {
        title: "Level 2: Standard (Curriculum Level)",
        desc: "Standard grade-level problem solving using logarithm properties.",
        math: "Problem: Evaluate log_3(9) + log_2(16).",
        answer: "6",
        hint: "Hint: Calculate each logarithm separately. What is log_3(9) and log_2(16)?"
    },
    3: {
        title: "Level 3: Advanced (Logic Challenge)",
        desc: "Multi-step logarithmic equation solving and properties.",
        math: "Problem: Solve for x: log_2(x) + log_2(x - 2) = 3.",
        answer: "4",
        hint: "Hint: Use the product rule for logarithms: log_2(x(x - 2)) = 3, then convert to exponential form: x(x - 2) = 2^3."
    }
};

function setLevel(level) {
    currentLevel = level;
    document.querySelectorAll('.level-btn').forEach((btn, idx) => {
        if (idx + 1 === level) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    document.getElementById('task-title').innerText = levelsData[level].title;
    document.getElementById('task-description').innerText = levelsData[level].desc;
    document.getElementById('task-math').innerText = levelsData[level].math;
    document.getElementById('user-answer').value = '';
    document.getElementById('feedback').innerText = '';
    document.getElementById('feedback').style.background = 'transparent';
}

function checkAnswer() {
    const userAns = document.getElementById('user-answer').value.replace(/\s+/g, '').toLowerCase();
    const correctAns = levelsData[currentLevel].answer.replace(/\s+/g, '').toLowerCase();
    const feedback = document.getElementById('feedback');

    if (userAns === correctAns) {
        feedback.style.background = '#d4edda';
        feedback.style.color = '#155724';
        feedback.innerText = 'Correct! Great job!';
    } else {
        feedback.style.background = '#f8d7da';
        feedback.style.color = '#721c24';
        feedback.innerText = 'Incorrect. Try using the AI Hint.';
    }
}

function getAIHint() {
    const feedback = document.getElementById('feedback');
    feedback.style.background = '#cce5ff';
    feedback.style.color = '#004085';
    feedback.innerText = `ð¤ AI Hint: ${levelsData[currentLevel].hint}`;
}
