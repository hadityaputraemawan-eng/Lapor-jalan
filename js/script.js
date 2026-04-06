const words = ["Jalan", "Jembatan", "Trotoar",];
let index = 0;

function changeText() {
  index = (index + 1) % words.length;
  document.getElementById("text").textContent = words[index];

  let randomTime = Math.floor(Math.random() * 2000) + 3000; // 3-5 detik
  setTimeout(changeText, randomTime);
}

changeText();
// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};