async function fetchTriviaQuestions() {
    const response =  await fetch("https://opentdb.com/api.php?amount=10"); 
      if (response.ok === false) {
        throw new Error("Failed to get trivia questions");
      }
      const data = await response.json();
    }
