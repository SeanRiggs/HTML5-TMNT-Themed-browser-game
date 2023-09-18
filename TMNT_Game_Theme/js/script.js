// JavaScript code

// Function to show instructions pop-up
function showInstructions() {
    // Create a pop-up element
    const popup = document.createElement("div");
    popup.className = "popup";
  
    // Add content to the pop-up
    popup.innerHTML = `
      <div class="popup-content">
        <h3>Instructions</h3>
        <p>Here are the game instructions...</p>
        <button id="closeButton">Close</button>
      </div>
    `;
  
    // Append the pop-up to the body
    document.body.appendChild(popup);
  
    // Add an event listener to the close button
    const closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", () => {
      // Remove the pop-up when the close button is clicked
      document.body.removeChild(popup);
    });

    // Add a window resize event listener to keep the close button visible on resize
    window.addEventListener('resize', adjustCloseButtonPosition);
  }

  // Function to adjust the position of the close button on resize
  function adjustCloseButtonPosition() {
    const closeButton = document.getElementById("closeButton");
    const popup = document.querySelector(".popup");
  
    if (popup && getComputedStyle(popup).display === "block") {
      // If the modal is open, reposition the close button
      closeButton.style.display = "block";
    }
  }
  
  // Function to reset the game
  function resetGame() {
    location.reload(); // Reload the page to reset the game
  }
  
  // Add event listeners to the buttons
  const instructionsButton = document.getElementById("instructionsButton");
  instructionsButton.addEventListener("click", showInstructions);
  
  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener("click", resetGame);

  // Show the instructions modal
  function showInstructions() {
    var instructionsModal = document.getElementById('instructionsModal');
    instructionsModal.style.display = 'block';
  
    // Show the close button
    var closeButton = document.querySelector('.close');
    closeButton.style.display = 'block';
  }
  
  function closeInstructionsModal() {
    var instructionsModal = document.getElementById('instructionsModal');
    instructionsModal.style.display = 'none';
  
    // Hide the close button
    var closeButton = document.querySelector('.close');
    closeButton.style.display = 'none';
  }
