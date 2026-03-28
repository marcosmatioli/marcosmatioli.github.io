const questions = [
  "Qualidade do pastel 🥟",
  "Temperatura do caldo de Cana 🥤",
  "Química entre nós, teve? 😏",
  "Foi engraçado? 😂",
  "Conversa fluiu? 🗣️",
  "O lugar foi bom 🌆",
  "Repetiria esse date? 🔁",
  "Vergonha alheia 😬",
  "Compatibilidade 💘",
  "Chance de segundo encontro 💍"
];

let current = 0;
let answers = [];

const app = document.getElementById("app");
const progressBar = document.getElementById("progress-bar");

function renderQuestion() {
  const q = questions[current];

  app.innerHTML = `
    <div class="card">
      <div class="question">${q}</div>

      <div class="scale">
        ${[...Array(11).keys()].map(n => `
          <label class="rate">
            <span class="number">${n}</span>
            <input type="radio" name="q" value="${n}">
            <span class="ball"></span>
          </label>
        `).join("")}
      </div>

      <button onclick="next()">Próxima ➡️</button>
    </div>
  `;

  updateProgress();

  document.querySelectorAll("input").forEach(input => {
    input.addEventListener("change", (e) => {
      const value = Number(e.target.value);

      startMusic();
      console.log('Função startMusic chamada');
      if (value <= 4 && navigator.vibrate) {
        navigator.vibrate(200);
      }
    });
  });
}

function updateProgress() {
  progressBar.style.width = `${(current / questions.length) * 100}%`;
}

function next() {
  const selected = document.querySelector("input:checked");

  if (!selected) {
    alert("Escolha uma nota 😅");
    return;
  }

  answers[current] = Number(selected.value);

  current++;

  if (current < questions.length) {
    renderQuestion();
  } else {
    finish();
  }
}

function finish() {
  const avg = answers.reduce((a,b)=>a+b,0) / answers.length;

  let message = "";

  if (avg <= 2.5) {
    message = "🚨 Esse date foi mais frio que caldo de cana gelado... difícil defender 😬";
  } else if (avg <= 5) {
    message = "😐 Foi ok... mas talvez faltou tempero nesse pastel";
  } else if (avg <= 7.5) {
    message = "😏 Olha... temos potencial! Vale um segundo round";
  } else {
    message = "🔥 Esse date foi um espetáculo! Já pode marcar o próximo!";
  }

  const payload = {
    respostas: answers,
    media: avg
  };

  fetch("https://formsubmit.co/ajax/matiolimarcos@gmail.com", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: JSON.stringify(payload, null, 2)
    })
  });

  app.innerHTML = `
    <div class="card result">
      <h2>Resultado do Date 💘</h2>
      <div class="score">${avg.toFixed(1)}</div>
      <p>${message}</p>
    </div>
  `;

  progressBar.style.width = "100%";
}

renderQuestion();

let musicStarted = false;
let music;

document.addEventListener("DOMContentLoaded", () => {
  music = document.getElementById("bg-music");
});
function startMusic() {
  if (!musicStarted) {
    music.volume = 0;
    music.play().catch((e) => {
      console.log("Erro ao tocar:", e);
    });

    console.log("Tentando tocar música...");
    console.log(music);

    let vol = 0.01;
    const fade = setInterval(() => {
      if (vol < 0.3) {
        vol += 0.01;
        music.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 200);

    musicStarted = true;
  }
}