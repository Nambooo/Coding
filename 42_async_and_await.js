// Redefined function 💖
async function fetchTriviaQuestions() {
  const response = await fetch("https://opentdb.com/api.php?amount=10");
  if (!response.ok) {
    throw new Error("Failed to fetch trivia questions");
  }
  const data = await response.json();
  return data.results;
}
