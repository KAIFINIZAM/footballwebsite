/* ===================================================================
   FOOTBALL UNIVERSE — script.js
   Vanilla JS: data rendering, search, tabs, counters, quiz,
   scroll reveal, particle background, theme + nav controls.
=================================================================== */

/* ---------------------- DATA ---------------------- */

const LEAGUES = [
  { id: "premier-league", name: "Premier League", country: "England", teamCount: 6, color: "#3b6ad6", flag: "🏴" },
  { id: "la-liga",        name: "La Liga",         country: "Spain",   teamCount: 6, color: "#e35c3b", flag: "🇪🇸" },
  { id: "bundesliga",     name: "Bundesliga",       country: "Germany", teamCount: 6, color: "#d6242c", flag: "🇩🇪" },
  { id: "serie-a",        name: "Serie A",          country: "Italy",   teamCount: 6, color: "#1f9d5b", flag: "🇮🇹" },
  { id: "ligue-1",        name: "Ligue 1",          country: "France",  teamCount: 6, color: "#1aa3a3", flag: "🇫🇷" },
];

const TEAMS = {
  "premier-league": [
    { name: "Manchester City", stadium: "Etihad Stadium", founded: 1880, country: "England" },
    { name: "Arsenal", stadium: "Emirates Stadium", founded: 1886, country: "England" },
    { name: "Liverpool", stadium: "Anfield", founded: 1892, country: "England" },
    { name: "Chelsea", stadium: "Stamford Bridge", founded: 1905, country: "England" },
    { name: "Manchester United", stadium: "Old Trafford", founded: 1878, country: "England" },
    { name: "Tottenham Hotspur", stadium: "Tottenham Hotspur Stadium", founded: 1882, country: "England" },
  ],
  "la-liga": [
    { name: "Real Madrid", stadium: "Santiago Bernabéu", founded: 1902, country: "Spain" },
    { name: "Barcelona", stadium: "Spotify Camp Nou", founded: 1899, country: "Spain" },
    { name: "Atlético Madrid", stadium: "Cívitas Metropolitano", founded: 1903, country: "Spain" },
    { name: "Sevilla", stadium: "Ramón Sánchez-Pizjuán", founded: 1890, country: "Spain" },
    { name: "Real Sociedad", stadium: "Reale Arena", founded: 1909, country: "Spain" },
    { name: "Villarreal", stadium: "Estadio de la Cerámica", founded: 1923, country: "Spain" },
  ],
  "bundesliga": [
    { name: "Bayern Munich", stadium: "Allianz Arena", founded: 1900, country: "Germany" },
    { name: "Borussia Dortmund", stadium: "Signal Iduna Park", founded: 1909, country: "Germany" },
    { name: "Bayer Leverkusen", stadium: "BayArena", founded: 1904, country: "Germany" },
    { name: "RB Leipzig", stadium: "Red Bull Arena", founded: 2009, country: "Germany" },
    { name: "VfB Stuttgart", stadium: "MHPArena", founded: 1893, country: "Germany" },
    { name: "VfL Wolfsburg", stadium: "Volkswagen Arena", founded: 1945, country: "Germany" },
  ],
  "serie-a": [
    { name: "Inter Milan", stadium: "San Siro", founded: 1908, country: "Italy" },
    { name: "AC Milan", stadium: "San Siro", founded: 1899, country: "Italy" },
    { name: "Juventus", stadium: "Allianz Stadium", founded: 1897, country: "Italy" },
    { name: "Napoli", stadium: "Stadio Diego Armando Maradona", founded: 1926, country: "Italy" },
    { name: "Roma", stadium: "Stadio Olimpico", founded: 1927, country: "Italy" },
    { name: "Lazio", stadium: "Stadio Olimpico", founded: 1900, country: "Italy" },
  ],
  "ligue-1": [
    { name: "Paris Saint-Germain", stadium: "Parc des Princes", founded: 1970, country: "France" },
    { name: "Marseille", stadium: "Orange Vélodrome", founded: 1899, country: "France" },
    { name: "Monaco", stadium: "Stade Louis II", founded: 1924, country: "France" },
    { name: "Lille", stadium: "Stade Pierre-Mauroy", founded: 1944, country: "France" },
    { name: "Lyon", stadium: "Groupama Stadium", founded: 1950, country: "France" },
    { name: "Nice", stadium: "Allianz Riviera", founded: 1904, country: "France" },
  ],
};

const PLAYERS = [
  { name: "Kylian Mbappé", club: "Real Madrid", position: "Forward", nationality: "France", color: "#e35c3b" },
  { name: "Jude Bellingham", club: "Real Madrid", position: "Midfielder", nationality: "England", color: "#3b6ad6" },
  { name: "Erling Haaland", club: "Manchester City", position: "Forward", nationality: "Norway", color: "#3b6ad6" },
  { name: "Vinícius Jr.", club: "Real Madrid", position: "Forward", nationality: "Brazil", color: "#1f9d5b" },
  { name: "Lamine Yamal", club: "Barcelona", position: "Forward", nationality: "Spain", color: "#e35c3b" },
  { name: "Harry Kane", club: "Bayern Munich", position: "Forward", nationality: "England", color: "#d6242c" },
];

const NEWS = [
  {
    headline: "Title race tightens as gap closes at the top",
    desc: "A weekend of dropped points up and down the table has squeezed the standings, with three sides now separated by a handful of points heading into the run-in.",
    tag: "Premier League", color: "#3b6ad6", icon: "fa-table-list",
  },
  {
    headline: "Clásico build-up dominates the week's headlines",
    desc: "Team news, fitness updates and tactical previews ahead of Spanish football's biggest fixture, with both sides chasing momentum before the international break.",
    tag: "La Liga", color: "#e35c3b", icon: "fa-newspaper",
  },
  {
    headline: "Young talents headline this season's breakout stories",
    desc: "A wave of academy graduates and teenage debutants have forced their way into first-team plans across the continent, reshaping squad rotations.",
    tag: "Bundesliga", color: "#d6242c", icon: "fa-star",
  },
  {
    headline: "European nights deliver another round of drama",
    desc: "Late goals, red cards and a handful of upsets defined a midweek of continental fixtures, leaving the road to the final wide open.",
    tag: "Champions League", color: "#e3b341", icon: "fa-trophy",
  },
  {
    headline: "Transfer chatter heats up ahead of the window",
    desc: "Reports continue to link several marquee names with moves across borders, as clubs begin to plan their squads for the season ahead.",
    tag: "Transfers", color: "#1aa3a3", icon: "fa-right-left",
  },
  {
    headline: "Managers under pressure as results stall",
    desc: "A run of indifferent form has turned the spotlight back onto the dugout, with patience reportedly thinning at more than one big club.",
    tag: "Serie A", color: "#1f9d5b", icon: "fa-clipboard-question",
  },
];

const QUIZ = [
  {
    q: "Which club has won the most UEFA Champions League / European Cup titles?",
    options: ["AC Milan", "Real Madrid", "Liverpool", "Bayern Munich"],
    answer: 1,
  },
  {
    q: "Which country won the 2022 FIFA World Cup in Qatar?",
    options: ["France", "Croatia", "Argentina", "Brazil"],
    answer: 2,
  },
  {
    q: "Which player is widely known by the nickname \"CR7\"?",
    options: ["Carlos Ramírez", "Cristiano Ronaldo", "Cesc Rodríguez", "Casemiro"],
    answer: 1,
  },
  {
    q: "Which English club plays its home matches at Anfield?",
    options: ["Everton", "Manchester United", "Liverpool", "Aston Villa"],
    answer: 2,
  },
  {
    q: "Which league is Bayern Munich part of?",
    options: ["Serie A", "Ligue 1", "Bundesliga", "La Liga"],
    answer: 2,
  },
  {
    q: "Which Spanish club is nicknamed \"Los Blancos\"?",
    options: ["Barcelona", "Atlético Madrid", "Sevilla", "Real Madrid"],
    answer: 3,
  },
];

/* ---------------------- HELPERS ---------------------- */

function initials(name){
  return name
    .split(" ")
    .filter(w => !/^(de|del|von|jr\.?|fc|al)$/i.test(w))
    .map(w => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function leagueAbbr(id){
  return { "premier-league": "EPL", "la-liga": "LIGA", "bundesliga": "BUN", "serie-a": "SA", "ligue-1": "L1" }[id] || "";
}

/* ---------------------- LOADER ---------------------- */

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => loader.classList.add("hidden"), 700);
});

/* ---------------------- NAVBAR ---------------------- */

const navbar = document.getElementById("navbar");
const navLinks = document.getElementById("navLinks");
const hamburger = document.getElementById("hamburger");
const allNavLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
  backToTop.classList.toggle("visible", window.scrollY > 600);
}, { passive: true });

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("open");
});

allNavLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
  });
});

// Highlight active section link on scroll
const sections = document.querySelectorAll("main section[id], .hero[id]");
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      allNavLinks.forEach(l => l.classList.remove("active"));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add("active");
    }
  });
}, { rootMargin: "-45% 0px -45% 0px" });
sections.forEach(s => navObserver.observe(s));

/* ---------------------- THEME TOGGLE ---------------------- */

const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

themeToggle.addEventListener("click", () => {
  const isLight = root.getAttribute("data-theme") === "light";
  root.setAttribute("data-theme", isLight ? "dark" : "light");
  themeToggle.innerHTML = isLight
    ? '<i class="fa-solid fa-moon"></i>'
    : '<i class="fa-solid fa-sun"></i>';
});

/* ---------------------- BACK TO TOP ---------------------- */

const backToTop = document.getElementById("backToTop");
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ---------------------- RENDER: LEAGUES ---------------------- */

const leagueGrid = document.getElementById("leagueGrid");
leagueGrid.innerHTML = LEAGUES.map(l => `
  <div class="league-card reveal" style="--league-color:${l.color}" data-league="${l.id}">
    <div class="league-crest">${leagueAbbr(l.id)}</div>
    <h3 class="league-name">${l.name}</h3>
    <p class="league-country"><span>${l.flag}</span> ${l.country}</p>
    <div class="league-meta">
      <div>
        <div class="count">${l.teamCount}</div>
        <div class="count-label">CLUBS LISTED</div>
      </div>
      <i class="fa-solid fa-arrow-right league-arrow"></i>
    </div>
  </div>
`).join("");

leagueGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".league-card");
  if (!card) return;
  selectLeague(card.dataset.league);
  document.getElementById("teams").scrollIntoView({ behavior: "smooth" });
});

/* ---------------------- TEAMS EXPLORER ---------------------- */

const leagueTabs = document.getElementById("leagueTabs");
const teamGrid = document.getElementById("teamGrid");
const teamSearch = document.getElementById("teamSearch");
const clearSearch = document.getElementById("clearSearch");
const noResults = document.getElementById("noResults");

let currentLeague = "premier-league";

leagueTabs.innerHTML = LEAGUES.map(l => `
  <button class="tab-btn ${l.id === currentLeague ? "active" : ""}" style="--tab-color:${l.color}" data-league="${l.id}">
    <span class="dot"></span> ${l.name}
  </button>
`).join("");

function selectLeague(id){
  currentLeague = id;
  teamSearch.value = "";
  clearSearch.hidden = true;
  document.querySelectorAll(".tab-btn").forEach(t => t.classList.toggle("active", t.dataset.league === id));
  renderTeams();
}

leagueTabs.addEventListener("click", (e) => {
  const btn = e.target.closest(".tab-btn");
  if (!btn) return;
  selectLeague(btn.dataset.league);
});

function renderTeams(){
  const league = LEAGUES.find(l => l.id === currentLeague);
  const query = teamSearch.value.trim().toLowerCase();

  let list = TEAMS[currentLeague];
  if (query){
    // search across ALL leagues when there's a query, so users can search any club
    list = Object.values(TEAMS).flat().filter(t => t.name.toLowerCase().includes(query));
  }

  noResults.hidden = list.length !== 0;
  teamGrid.innerHTML = list.map((t, i) => `
    <div class="team-card" style="--team-color:${league.color}; animation-delay:${i * 0.04}s">
      <div class="team-crest">${initials(t.name)}</div>
      <div>
        <h3 class="team-name">${t.name}</h3>
        <p class="team-detail"><i class="fa-solid fa-building-columns"></i> ${t.stadium}</p>
        <p class="team-detail"><i class="fa-regular fa-calendar"></i> Founded ${t.founded}</p>
        <p class="team-detail"><i class="fa-solid fa-flag"></i> ${t.country}</p>
      </div>
    </div>
  `).join("");
}

teamSearch.addEventListener("input", () => {
  clearSearch.hidden = teamSearch.value.length === 0;
  renderTeams();
});
clearSearch.addEventListener("click", () => {
  teamSearch.value = "";
  clearSearch.hidden = true;
  renderTeams();
  teamSearch.focus();
});

// footer quick-jump to a specific league tab
document.querySelectorAll("[data-league]").forEach(el => {
  if (el.classList.contains("tab-btn") || el.classList.contains("league-card")) return;
  el.addEventListener("click", (e) => {
    e.preventDefault();
    selectLeague(el.dataset.league);
    document.getElementById("teams").scrollIntoView({ behavior: "smooth" });
  });
});

renderTeams();

/* ---------------------- RENDER: PLAYERS ---------------------- */

const playerGrid = document.getElementById("playerGrid");
playerGrid.innerHTML = PLAYERS.map(p => `
  <div class="player-card reveal">
    <div class="player-photo" style="--player-color:${p.color}">
      <span class="player-initials">${initials(p.name)}</span>
    </div>
    <div class="player-info">
      <h3 class="player-name">${p.name}</h3>
      <p class="player-detail"><i class="fa-solid fa-shield-halved"></i> ${p.club}</p>
      <p class="player-detail"><i class="fa-solid fa-futbol"></i> ${p.position}</p>
      <p class="player-detail"><i class="fa-solid fa-flag"></i> ${p.nationality}</p>
    </div>
  </div>
`).join("");

/* ---------------------- RENDER: NEWS ---------------------- */

const newsGrid = document.getElementById("newsGrid");
newsGrid.innerHTML = NEWS.map(n => `
  <article class="news-card reveal">
    <div class="news-thumb" style="--news-color:${n.color}">
      <span class="news-tag">${n.tag}</span>
      <i class="fa-solid ${n.icon}"></i>
    </div>
    <div class="news-body">
      <h3 class="news-headline">${n.headline}</h3>
      <p class="news-desc">${n.desc}</p>
      <button class="news-readmore">Read more <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </article>
`).join("");

newsGrid.addEventListener("click", (e) => {
  const btn = e.target.closest(".news-readmore");
  if (!btn) return;
  btn.innerHTML = 'Coming soon <i class="fa-solid fa-clock"></i>';
});

/* ---------------------- SCROLL REVEAL ---------------------- */

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* ---------------------- ANIMATED COUNTERS ---------------------- */

function animateCounter(el, target, duration = 1400){
  const start = performance.now();
  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statNums = document.querySelectorAll(".stat-num");
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      animateCounter(entry.target, Number(entry.target.dataset.target));
      statObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
statNums.forEach(el => statObserver.observe(el));

/* ---------------------- QUIZ ---------------------- */

const quizStart = document.getElementById("quizStart");
const quizQuestion = document.getElementById("quizQuestion");
const quizResult = document.getElementById("quizResult");
const quizStartBtn = document.getElementById("quizStartBtn");
const quizRetryBtn = document.getElementById("quizRetryBtn");
const quizOptions = document.getElementById("quizOptions");
const quizQuestionText = document.getElementById("quizQuestionText");
const quizCurrent = document.getElementById("quizCurrent");
const quizTotal = document.getElementById("quizTotal");
const quizProgressBar = document.getElementById("quizProgressBar");
const quizScoreEl = document.getElementById("quizScore");
const quizFeedback = document.getElementById("quizFeedback");

let quizIndex = 0;
let quizScore = 0;

quizTotal.textContent = QUIZ.length;

function startQuiz(){
  quizIndex = 0;
  quizScore = 0;
  quizStart.hidden = true;
  quizResult.hidden = true;
  quizQuestion.hidden = false;
  renderQuestion();
}

function renderQuestion(){
  const item = QUIZ[quizIndex];
  quizCurrent.textContent = quizIndex + 1;
  quizProgressBar.style.width = `${(quizIndex / QUIZ.length) * 100}%`;
  quizQuestionText.textContent = item.q;
  quizOptions.innerHTML = item.options.map((opt, i) => `
    <button class="quiz-option" data-index="${i}">${opt}</button>
  `).join("");
}

quizOptions.addEventListener("click", (e) => {
  const btn = e.target.closest(".quiz-option");
  if (!btn) return;

  const item = QUIZ[quizIndex];
  const chosen = Number(btn.dataset.index);
  const buttons = quizOptions.querySelectorAll(".quiz-option");
  buttons.forEach(b => b.disabled = true);

  if (chosen === item.answer){
    btn.classList.add("correct");
    quizScore++;
  } else {
    btn.classList.add("incorrect");
    buttons[item.answer].classList.add("correct");
  }

  setTimeout(() => {
    quizIndex++;
    if (quizIndex < QUIZ.length){
      renderQuestion();
    } else {
      finishQuiz();
    }
  }, 900);
});

function finishQuiz(){
  quizQuestion.hidden = true;
  quizResult.hidden = false;
  quizScoreEl.textContent = quizScore;

  let msg;
  if (quizScore === QUIZ.length) msg = "Perfect score. World Cup final commentary box, please.";
  else if (quizScore >= QUIZ.length - 2) msg = "Strong showing — you clearly watch the football.";
  else if (quizScore >= QUIZ.length / 2) msg = "Solid effort. A few transfers worth brushing up on.";
  else msg = "Time to catch a few more highlights this week.";
  quizFeedback.textContent = msg;
}

quizStartBtn.addEventListener("click", startQuiz);
quizRetryBtn.addEventListener("click", startQuiz);

/* ---------------------- NEWSLETTER ---------------------- */

const newsletterForm = document.getElementById("newsletterForm");
const newsletterMsg = document.getElementById("newsletterMsg");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  newsletterForm.hidden = true;
  newsletterMsg.hidden = false;
});

/* ---------------------- FOOTER YEAR ---------------------- */

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------------------- PARTICLE BACKGROUND (hero canvas) ---------------------- */

const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
let canvasW, canvasH;

function resizeCanvas(){
  const hero = document.querySelector(".hero");
  canvasW = canvas.width = window.innerWidth;
  canvasH = canvas.height = hero.offsetHeight;
}

function createParticles(){
  const count = Math.min(50, Math.floor((canvasW * canvasH) / 26000));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvasW,
    y: Math.random() * canvasH,
    r: Math.random() * 1.8 + 0.6,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
  }));
}

function drawParticles(){
  ctx.clearRect(0, 0, canvasW, canvasH);

  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > canvasW) p.vx *= -1;
    if (p.y < 0 || p.y > canvasH) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(54, 209, 124, 0.55)";
    ctx.fill();

    // connect nearby particles with faint lines (pitch-pass network feel)
    for (let j = i + 1; j < particles.length; j++){
      const q = particles[j];
      const dx = p.x - q.x, dy = p.y - q.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 130){
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.strokeStyle = `rgba(54, 209, 124, ${0.12 * (1 - dist / 130)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  });

  requestAnimationFrame(drawParticles);
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion){
  resizeCanvas();
  createParticles();
  drawParticles();
  window.addEventListener("resize", () => {
    resizeCanvas();
    createParticles();
  });
}