function propose() {
    document.getElementById("proposalText").classList.remove("hidden");
    document.getElementById("buttons").classList.remove("hidden");
    document.getElementById("backgroundMusic").play();
  }
  
  function accept() {
    document.getElementById("response").innerText = "Yay! You've made me the happiest person! 💖";
    document.getElementById("buttons").classList.add("hidden");
    document.getElementById("gallery").classList.remove("hidden"); // Show the gallery
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
  
  function reject() {
    document.getElementById("response").innerText = "That's okay, I'll keep trying! 😊";
    document.getElementById("buttons").classList.add("hidden");
    document.getElementById("noImage").classList.remove("hidden");
    document.getElementById("gallery").classList.add("hidden");
  }