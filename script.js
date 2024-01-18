function fetchTrivia() {
  const categoryInput = document.getElementById('category');
  const resultsContainer = document.getElementById('results');
  const category = categoryInput.value;

  resultsContainer.innerHTML = '';

  fetch(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=easy&type=multiple&encode=url3986`)
    .then(response => response.json())
    .then(data => {
      if (data.results.length > 0) {
        data.results.forEach(result => {
          const question = decodeURIComponent(result.question);
          const formattedQuestion = `<p><strong>Question:</strong> ${question}</p>`;
          resultsContainer.innerHTML += formattedQuestion;
        });
      } else {
        resultsContainer.innerHTML = '<p>No trivia questions found for the specified category.</p>';
      }
    })
    .catch(error => {
      console.error('Error fetching trivia questions:', error);
      resultsContainer.innerHTML = '<p>Error fetching trivia questions. Please try again.</p>';
    });
}
