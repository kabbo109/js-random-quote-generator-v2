const quotes = [
  "Stay hungry, stay foolish.",
  "Practice makes perfect.",
  "Small steps every day.",
  "Consistency beats talent.",
  "Believe in yourself."
];

function generate(){
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerText = quotes[random];
}
