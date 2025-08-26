// ------------------ DATASET ------------------
const dataset = [
  { lvl: 0, exp: 0, reward: "-", rank: "Trainee" },
  {
    lvl: 1,
    exp: 3504,
    reward: "1 000 SP, Double UP (3D), Big Boom (1pc)",
    rank: "Private",
  },
  {
    lvl: 2,
    exp: 4056,
    reward: "1 000 SP, Double UP (3D), Big Boom (1pc)",
    rank: "Private First Class",
  },
  {
    lvl: 3,
    exp: 4664,
    reward: "1 000 SP, Double UP (3D), Big Boom (1pc)",
    rank: "Corporal",
  },
  {
    lvl: 4,
    exp: 5336,
    reward: "1 000 SP, Double UP (3D), Big Boom (1pc)",
    rank: "Sergeant",
  },
  {
    lvl: 5,
    exp: 6080,
    reward: "1 000 SP, Double UP (3D), Big Boom (1pc)",
    rank: "Staff Sergeant 1",
  },

  {
    lvl: 6,
    exp: 6888,
    reward: "1 000 SP, Double UP (3D), Big Boom (1pc)",
    rank: "Staff Sergeant 2",
  },
  {
    lvl: 7,
    exp: 7784,
    reward: "1 000 SP, Double UP (3D), Big Boom (1pc)",
    rank: "Staff Sergeant 3",
  },
  {
    lvl: 8,
    exp: 8768,
    reward: "1 000 SP, Double UP (3D), Big Boom (1pc)",
    rank: "Staff Sergeant 4",
  },
  {
    lvl: 9,
    exp: 9856,
    reward: "1 000 SP, Double UP (3D), Big Boom (1pc)",
    rank: "Staff Sergeant 5",
  },

  {
    lvl: 10,
    exp: 11040,
    reward: "1 000 SP, Double UP (3D), Big Boom (1pc)",
    rank: "Sergeant First Class 1",
  },
  {
    lvl: 11,
    exp: 12352,
    reward: "1 000 SP, Double UP (3D), Big Boom (1pc)",
    rank: "Sergeant First Class 2",
  },
  {
    lvl: 12,
    exp: 13792,
    reward: "1 000 SP, Double UP (3D), Big Boom (1pc)",
    rank: "Sergeant First Class 3",
  },
  {
    lvl: 13,
    exp: 15376,
    reward: "1 000 SP, Double UP (3D), Big Boom (1pc)",
    rank: "Sergeant First Class 4",
  },
  {
    lvl: 14,
    exp: 17120,
    reward: "1 000 SP, Double UP (3D), Big Boom (1pc)",
    rank: "Sergeant First Class 5",
  },

  {
    lvl: 15,
    exp: 19040,
    reward: "1 000 SP, Double UP (3D), Big Boom (1pc)",
    rank: "Master Sergeant 1",
  },
  {
    lvl: 16,
    exp: 21152,
    reward: "1 000 SP, Double UP (3D), Big Boom (1pc)",
    rank: "Master Sergeant 2",
  },
  {
    lvl: 17,
    exp: 23472,
    reward: "1 000 SP, Double UP (3D), Big Boom (1pc)",
    rank: "Master Sergeant 3",
  },
  {
    lvl: 18,
    exp: 26024,
    reward: "1 000 SP, Double UP (3D), Big Boom (1pc)",
    rank: "Master Sergeant 4",
  },
  {
    lvl: 19,
    exp: 28832,
    reward: "1 000 SP, Double UP (3D), Big Boom (1pc)",
    rank: "Master Sergeant 5",
  },

  {
    lvl: 20,
    exp: 31920,
    reward: "5 000 SP, EXP x2 (7D), Big Boom (1pc)",
    rank: "Second Liutenant 1",
  },
  {
    lvl: 21,
    exp: 35320,
    reward: "5 000 SP, EXP x2 (7D), Big Boom (1pc)",
    rank: "Second Liutenant 2",
  },
  {
    lvl: 22,
    exp: 39392,
    reward: "5 000 SP, EXP x2 (7D), Big Boom (1pc)",
    rank: "Second Liutenant 3",
  },
  {
    lvl: 23,
    exp: 44288,
    reward: "5 000 SP, EXP x2 (7D), Big Boom (1pc)",
    rank: "Second Liutenant 4",
  },
  {
    lvl: 24,
    exp: 50160,
    reward: "5 000 SP, EXP x2 (7D), Big Boom (1pc)",
    rank: "Second Liutenant 5",
  },

  {
    lvl: 25,
    exp: 57200,
    reward: "5 000 SP, EXP x2 (7D), Big Boom (1pc)",
    rank: "First Liutenant 1",
  },
  {
    lvl: 26,
    exp: 65655,
    reward: "5 000 SP, EXP x2 (7D), Big Boom (1pc)",
    rank: "First Liutenant 2",
  },
  {
    lvl: 27,
    exp: 75798,
    reward: "5 000 SP, EXP x2 (7D), Big Boom (1pc)",
    rank: "First Liutenant 3",
  },
  {
    lvl: 28,
    exp: 87972,
    reward: "5 000 SP, EXP x2 (7D), Big Boom (1pc)",
    rank: "First Liutenant 4",
  },
  {
    lvl: 29,
    exp: 102582,
    reward: "5 000 SP, EXP x2 (7D), Big Boom (1pc)",
    rank: "First Liutenant 5",
  },

  {
    lvl: 30,
    exp: 120111,
    reward: "5 000 SP, EXP x2 (7D), Big Boom (1pc)",
    rank: "Captain 1",
  },
  {
    lvl: 31,
    exp: 141147,
    reward: "5 000 SP, EXP x2 (7D), Big Boom (1pc)",
    rank: "Captain 2",
  },
  {
    lvl: 32,
    exp: 166389,
    reward: "5 000 SP, EXP x2 (7D), Big Boom (1pc)",
    rank: "Captain 3",
  },
  {
    lvl: 33,
    exp: 196680,
    reward: "5 000 SP, EXP x2 (7D), Big Boom (1pc)",
    rank: "Captain 4",
  },
  {
    lvl: 34,
    exp: 233031,
    reward: "5 000 SP, EXP x2 (7D), Big Boom (1pc)",
    rank: "Captain 5",
  },

  {
    lvl: 35,
    exp: 276651,
    reward: "10 000 SP, Fast Switch (7D), Weapon Kit I and II (1pc)",
    rank: "Major 1",
  },
  {
    lvl: 36,
    exp: 328995,
    reward: "10 000 SP, Fast Switch (7D), Weapon Kit I and II (1pc)",
    rank: "Major 2",
  },
  {
    lvl: 37,
    exp: 391806,
    reward: "10 000 SP, Fast Switch (7D), Weapon Kit I and II (1pc)",
    rank: "Major 3",
  },
  {
    lvl: 38,
    exp: 467181,
    reward: "10 000 SP, Fast Switch (7D), Weapon Kit I and II (1pc)",
    rank: "Major 4",
  },
  {
    lvl: 39,
    exp: 557631,
    reward: "10 000 SP, Fast Switch (7D), Weapon Kit I and II (1pc)",
    rank: "Major 5",
  },

  {
    lvl: 40,
    exp: 666171,
    reward: "10 000 SP, Fast Switch (7D), Weapon Kit I and II (1pc)",
    rank: "Liutenant Colonel 1",
  },
  {
    lvl: 41,
    exp: 796419,
    reward: "10 000 SP, Fast Switch (7D), Weapon Kit I and II (1pc)",
    rank: "Liutenant Colonel 2",
  },
  {
    lvl: 42,
    exp: 952716,
    reward: "10 000 SP, Fast Switch (7D), Weapon Kit I and II (1pc)",
    rank: "Liutenant Colonel 3",
  },
  {
    lvl: 43,
    exp: 1140273,
    reward: "10 000 SP, Fast Switch (7D), Weapon Kit I and II (1pc)",
    rank: "Liutenant Colonel 4",
  },
  {
    lvl: 44,
    exp: 1365339,
    reward: "10 000 SP, Fast Switch (7D), Weapon Kit I and II (1pc)",
    rank: "Liutenant Colonel 5",
  },

  {
    lvl: 45,
    exp: 1635420,
    reward: "Engraving Double MK23 Pistol (Permanent)",
    rank: "Colonel 1",
  },
  {
    lvl: 46,
    exp: 1969519,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (1pc)",
    rank: "Colonel 2",
  },
  {
    lvl: 47,
    exp: 2348436,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (1pc)",
    rank: "Colonel 3",
  },
  {
    lvl: 48,
    exp: 2815137,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (1pc)",
    rank: "Colonel 4",
  },
  {
    lvl: 49,
    exp: 3375180,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (1pc)",
    rank: "Colonel 5",
  },

  {
    lvl: 50,
    exp: 4047228,
    reward: "Predator AK74 (Permanent), 20 000 SP",
    rank: "Brigadier General 1",
  },
  {
    lvl: 51,
    exp: 4853690,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "Brigadier General 2",
  },
  {
    lvl: 52,
    exp: 5821440,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "Brigadier General 3",
  },
  {
    lvl: 53,
    exp: 6982740,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "Brigadier General 4",
  },
  {
    lvl: 54,
    exp: 8376300,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "Brigadier General 5",
  },

  {
    lvl: 55,
    exp: 10048575,
    reward: "Predator M4A1 (Permanent), 20 000 SP",
    rank: "Major General 1",
  },
  {
    lvl: 56,
    exp: 12055305,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "Major General 2",
  },
  {
    lvl: 57,
    exp: 14463380,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "Major General 3",
  },
  {
    lvl: 58,
    exp: 17353070,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "Major General 4",
  },
  {
    lvl: 59,
    exp: 20820695,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "Major General 5",
  },

  {
    lvl: 60,
    exp: 24981850,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "Liutenant General 1",
  },
  {
    lvl: 61,
    exp: 29975235,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "Liutenant General 2",
  },
  {
    lvl: 62,
    exp: 35967295,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "Liutenant General 3",
  },
  {
    lvl: 63,
    exp: 43157765,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "Liutenant General 4",
  },
  {
    lvl: 64,
    exp: 51786330,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "Liutenant General 5",
  },

  {
    lvl: 65,
    exp: 62140610,
    reward: "Predator PSG-1 (Permanent), 20 000 SP",
    rank: "General 1",
  },
  {
    lvl: 66,
    exp: 74565750,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "General 2",
  },
  {
    lvl: 67,
    exp: 88233400,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "General 3",
  },
  {
    lvl: 68,
    exp: 103267815,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "General 4",
  },
  {
    lvl: 69,
    exp: 119805670,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "General 5",
  },

  {
    lvl: 70,
    exp: 137997310,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "General of the Army 1",
  },
  {
    lvl: 71,
    exp: 158008115,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "General of the Army 2",
  },
  {
    lvl: 72,
    exp: 180020005,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "General of the Army 3",
  },
  {
    lvl: 73,
    exp: 204233080,
    reward:
      "20 000 SP, Fast Switch (7D), Double Up (7D) Weapon Kit I and II (5pcs)",
    rank: "General of the Army 4",
  },
  {
    lvl: 74,
    exp: 230867460,
    reward: "Weapon Kit I and II (20pcs)",
    rank: "General of the Army 5",
  },
];

// ------------------ RENDERING ------------------
function renderTable(data) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";
  data.forEach((row) => {
    const tr = document.createElement("tr");

    const imgName = row.rank.toLowerCase().replace(/\s+/g, "_") + ".png";

    tr.innerHTML = `
      <td data-label="LVL">${row.lvl}</td>
      <td data-label="Rank">
        <span class="rank-cell">
          <img src="img/ranks/${imgName}" alt="${
      row.rank
    } icon" loading="lazy" onerror="this.style.display='none'">
          <span>${row.rank}</span>
        </span>
      </td>
      <td data-label="EXP">${row.exp.toLocaleString()}</td>
      <td data-label="Rewards">${row.reward}</td>
    `;
    tableBody.appendChild(tr);
  });
}

// ------------------ FILTERS + SEARCH ------------------
const searchInput = document.getElementById("searchInput");
const rankFilter = document.getElementById("rankFilter");
const rewardFilter = document.getElementById("rewardFilter");
const clearFiltersBtn = document.getElementById("clearFilters");

function getBaseRank(rank) {
  return rank.replace(/\s+\d+$/, "");
}

(function populateFilters() {
  const baseRanks = [
    ...new Set(dataset.map((d) => getBaseRank(d.rank))),
  ].sort();
  const rewards = [...new Set(dataset.map((d) => d.reward))].sort();

  baseRanks.forEach((r) => {
    const opt = document.createElement("option");
    opt.value = r;
    opt.textContent = r;
    rankFilter.appendChild(opt);
  });

  rewards.forEach((rw) => {
    const opt = document.createElement("option");
    opt.value = rw;
    opt.textContent = rw;
    rewardFilter.appendChild(opt);
  });
})();

function applyFilters() {
  const q = (searchInput.value || "").toLowerCase();
  const rankVal = rankFilter.value;
  const rewardVal = rewardFilter.value;

  const filtered = dataset.filter((row) => {
    const matchesSearch =
      row.lvl.toString().includes(q) ||
      row.rank.toLowerCase().includes(q) ||
      row.exp.toString().includes(q) ||
      row.reward.toLowerCase().includes(q);

    const matchesRank = rankVal ? getBaseRank(row.rank) === rankVal : true;
    const matchesReward = rewardVal
      ? row.reward.toLowerCase().includes(rewardVal.toLowerCase())
      : true;

    return matchesSearch && matchesRank && matchesReward;
  });

  renderTable(filtered);
}

searchInput.addEventListener("input", applyFilters);
rankFilter.addEventListener("change", applyFilters);
rewardFilter.addEventListener("change", applyFilters);
clearFiltersBtn.addEventListener("click", () => {
  searchInput.value = "";
  rankFilter.value = "";
  rewardFilter.value = "";
  applyFilters();
});

// ------------------ CALCULATOR ------------------
const calcToggle = document.getElementById("calcToggle");
const calcPanel = document.getElementById("calcPanel");
const calcClose = document.getElementById("calcClose");
const calcRun = document.getElementById("calcRun");
const calcResult = document.getElementById("calcResult");
const currentExpInput = document.getElementById("currentExp");
const targetLevelInput = document.getElementById("targetLevel");

calcToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  const isOpen = calcPanel.classList.toggle("open");
  calcToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  if (isOpen) {
    calcResult.textContent = "";
    currentExpInput.focus();
  }
});

document.addEventListener("click", (e) => {
  if (!calcPanel.contains(e.target) && e.target !== calcToggle) {
    calcPanel.classList.remove("open");
    calcToggle.setAttribute("aria-expanded", "false");
  }
});
calcClose.addEventListener("click", () => {
  calcPanel.classList.remove("open");
  calcToggle.setAttribute("aria-expanded", "false");
});

[currentExpInput, targetLevelInput].forEach((inp) => {
  inp.addEventListener("input", () => {
    const digits = inp.value.replace(/\D+/g, "");
    if (inp.value !== digits) inp.value = digits;
  });
});

function calculateExp() {
  const currentExp = parseInt(currentExpInput.value || "0", 10) || 0;
  const targetLevel = parseInt(targetLevelInput.value || "-1", 10);

  const target = dataset.find((row) => row.lvl === targetLevel);

  if (targetLevel < 0 || targetLevel > 74) {
    calcResult.textContent = "Target level must be between 0 and 74.";
    return;
  }

  const needed = target.exp - currentExp;
  calcResult.textContent =
    needed > 0
      ? `You need ${needed.toLocaleString()} EXP more.`
      : "You already passed this level!";
}

calcRun.addEventListener("click", calculateExp);
[currentExpInput, targetLevelInput].forEach((inp) => {
  inp.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      calculateExp();
    }
  });
});

// ------------------ FPS CLICK EFFECT ------------------
const fxLayer = document.getElementById("fx-layer");

function spawnShot(x, y) {
  const dot = document.createElement("div");
  dot.className = "shot";
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  dot.addEventListener("animationend", () => dot.remove());
  fxLayer.appendChild(dot);
  setTimeout(() => dot.remove(), 550);
}

document.addEventListener("click", (e) => {
  const tag = (e.target.tagName || "").toLowerCase();
  const isFormControl =
    ["input", "select", "button", "svg", "path"].includes(tag) ||
    e.target.closest(".calc-panel");
  if (isFormControl) return;

  spawnShot(e.clientX, e.clientY);
});

// ------------------ INIT ------------------
renderTable(dataset);
applyFilters();
