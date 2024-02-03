// Update cat fact display
function updateCatFact() {
    const facts = [
        "Cats can rotate their ears 180 degrees.",
        "The world's oldest cat lived to be 38 years old.",
        "Cats can make over 100 different sounds.",
        "Cats sleep for 70% of their lives."
    ];
    const catFactElement = document.getElementById('cat-fact');
    catFactElement.textContent = facts[Math.floor(Math.random() * facts.length)];
}

// Award badge based on the number of correct answers
function awardBadge(correctAnswers) {
    const badgeLevels = [10, 20, 30, 40]; // Correct answers required for each badge
    const badgeColors = ['#FFD700', '#C0C0C0', '#CD7F32', '#E5E4E2']; // Gold, Silver, Bronze, and Platinum colors
    const badgesElement = document.getElementById('badges');

    badgeLevels.forEach((level, index) => {
        if (correctAnswers === level) {
            const badge = document.createElement('div');
            badge.textContent = `${index + 1} Paws`;
            badge.style.backgroundColor = badgeColors[index];
            badge.className = 'badge';
            badgesElement.appendChild(badge);
        }
    });
}
