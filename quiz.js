function calculateScore() {
    const correctAnswers = {
        q1: "Charles Babbage",
        q2: "Electronic Mail",
        q3: "World Wide Web",
        q4: "Cybernaut",
        q5: "James T. Russell",
        q6: "MS Excel",
        q7: "Modem",
        q8: "Laptop",
        q9: "Printer",
        q10: "8 bits"
    };

    let score = 0;

    // Loop through each question
    for (const question in correctAnswers) {
        console.log(question);
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        console.log(userAnswer);
        console.log(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === correctAnswers[question]) {
            score++;
        }
    }
     
      document.getElementById("quizForm").innerHTML= score>=4?"<h1>congratulation you passed</h1>":"<h1>Sorry you failed</h1>";
    // Display the result
    document.getElementById("result").innerText = `Your score is: ${score}/10`;
}
