let correctAnswers = 0;

document.addEventListener('DOMContentLoaded', function() {
    generateQuestion();
    updateCatFact(); // Assuming you're calling this on page load
});

document.getElementById('submit-answer').addEventListener('click', function(event) {
    event.preventDefault();
    checkAnswer();
});

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const questionElement = document.getElementById('question-text');
    questionElement.textContent = `What is ${num1} + ${num2}?`;

    // Store the correct answer using a data attribute or another method
    questionElement.setAttribute('data-answer', num1 + num2);
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value, 10);
    const correctAnswer = parseInt(document.getElementById('question-text').getAttribute('data-answer'), 10);

    if (userAnswer === correctAnswer) {
        correctAnswers++;
        document.getElementById('feedback').textContent = "Correct! Great job!";
        // Check if a new badge is earned
        awardBadge(correctAnswers);
        generateQuestion(); // Generate a new question
    } else {
        document.getElementById('feedback').textContent = "Oops, that's not right. Try again!";
    }

    document.getElementById('answer').value = ''; // Clear the answer field
}
