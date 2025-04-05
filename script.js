let homeScore = 0;
let guestScore = 0;

function updateScore(team) {
  if (team === "home") {
    document.getElementById("home-score").textContent = homeScore
      .toString()
      .padStart(2, "0");
  } else {
    document.getElementById("guest-score").textContent = guestScore
      .toString()
      .padStart(2, "0");
  }
}

function add1(team) {
  if (team === "home") {
    homeScore += 1;
  } else {
    guestScore += 1;
  }
  updateScore(team);
}

function add2(team) {
  if (team === "home") {
    homeScore += 2;
  } else {
    guestScore += 2;
  }
  updateScore(team);
}

function add3(team) {
  if (team === "home") {
    homeScore += 3;
  } else {
    guestScore += 3;
  }
  updateScore(team);
}

function reset() {
  homeScore = 0;
  guestScore = 0;
  updateScore("home");
  updateScore("guest");
}
