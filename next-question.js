        function nextQuestion(nextPage) {
            // Get the selected answer
            const selectedAnswer = document.querySelector('input[name="answer"]:checked');

            // Check if an answer is selected
            if (selectedAnswer) {
                // Update scores based on the selected answer
                updateScores(selectedAnswer.value);

                // Redirect to the next question page (quiz2.html)
                window.location.href = nextPage;
            } else {
                // Display an alert if no answer is selected
                alert("Please select an answer before proceeding to the next question.");
            }
        }