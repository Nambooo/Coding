// Get the subscribe button and message elements from the HTML
const subscribeBtn = document.getElementById("subscribeBtn");
const message = document.getElementById("message");

// Add an event listener to the subscribe button for 'click' events
subscribeBtn.addEventListener("click", () => {
  // When the button is clicked, show the message
  message.classList.remove("hidden");
  // Change the button text to "Subscribed"
  subscribeBtn.innerText = "Subscribed";

  // After 3 seconds (3000 milliseconds), hide the message again
  setTimeout(() => {
    message.classList.add("hidden");
  }, 3000);
});
