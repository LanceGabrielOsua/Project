document.addEventListener("DOMContentLoaded", function () {
    const quizData = [
        {
            question: "What is one major barrier to gender equality in education?",
            options: ["Lack of interest", "Economic hardships", "Too many schools", "None of the above"],
            answer: 1
        },
        {
            question: "How many girls are out of school globally according to UNICEF?",
            options: ["50 million", "87 million", "122 million", "200 million"],
            answer: 2
        },
        {
            question: "Which region has the lowest proportion of female teachers in secondary education?",
            options: ["Europe", "North America", "Sub-Saharan Africa", "Australia"],
            answer: 2
        },
        {
            question: "How does gender equality in education impact society?",
            options: ["Reduces poverty", "Promotes healthier families", "Improves economic outcomes", "All of the above"],
            answer: 3
        },
        {
            question: "What can help promote gender equality in education?",
            options: ["Improving school infrastructure", "Providing scholarships", "Raising awareness", "All of the above"],
            answer: 3
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next");
    const resultElement = document.getElementById("result");

    function loadQuestion() {
        questionElement.textContent = quizData[currentQuestion].question;
        optionsElement.innerHTML = "";
        quizData[currentQuestion].options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option");
            button.onclick = () => checkAnswer(index);
            optionsElement.appendChild(button);
        });
    }

    function checkAnswer(selected) {
        const correct = quizData[currentQuestion].answer;
        if (selected === correct) {
            score++;
            optionsElement.children[selected].style.backgroundColor = "#4CAF50"; // Green for correct answer
        } else {
            optionsElement.children[selected].style.backgroundColor = "#FF5733"; // Red for incorrect answer
            optionsElement.children[correct].style.backgroundColor = "#4CAF50"; // Show correct answer
        }
        disableOptions();
        nextButton.style.display = "block";
    }

    function disableOptions() {
        Array.from(optionsElement.children).forEach(button => {
            button.disabled = true;
        });
    }

    function nextQuestion() {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
            nextButton.style.display = "none";
        } else {
            showResults();
        }
    }

    function showResults() {
        questionElement.textContent = "Quiz Completed!";
        optionsElement.innerHTML = `You scored ${score} out of ${quizData.length}!`;
        nextButton.style.display = "none";
    }

    nextButton.addEventListener("click", nextQuestion);
    loadQuestion();
});
