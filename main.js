const cards = document.querySelector(".cards");

const themes = {
    midnight: {
        name: "Midnight Neon",
        accentPrimary: "#7C3AED",
        accentSecondary: "#22D3EE",
        cardBg: "rgba(17, 27, 58, 0.4)",
        text: "#E5E7EB",
        textSecondary: "#9CA3AF",
    },
    sunset: {
        name: "Sunset Coral",
        accentPrimary: "#FB7185",
        accentSecondary: "#FBBF24",
        cardBg: "rgba(45, 27, 61, 0.4)",
        text: "#F8FAFC",
        textSecondary: "#CBD5E1",
    },
    emerald: {
        name: "Emerald Tech",
        accentPrimary: "#34D399",
        accentSecondary: "#60A5FA",
        cardBg: "rgba(11, 42, 36, 0.4)",
        text: "#ECFEFF",
        textSecondary: "#A5F3FC",
    },
    ocean: {
        name: "Deep Ocean",
        accentPrimary: "#00BFFF",
        accentSecondary: "#00FFD1",
        cardBg: "rgba(17, 34, 64, 0.4)",
        text: "#E6F1FF",
        textSecondary: "#A8B2D1",
    },
    royal: {
        name: "Royal Purple",
        accentPrimary: "#A855F7",
        accentSecondary: "#F472B6",
        cardBg: "rgba(46, 16, 101, 0.4)",
        text: "#F3E8FF",
        textSecondary: "#D8B4FE",
    },
};

const themeKeys = Object.keys(themes);

function getRandomTheme(exclude) {
    if (themeKeys.length === 1) return themeKeys[0];
    let k;
    do {
        k = themeKeys[Math.floor(Math.random() * themeKeys.length)];
    } while (k === exclude);
    return k;
}

function applyThemeToCard(card, key) {
    const t = themes[key];
    if (!t) return;
    card.dataset.theme = key;
    card.style.setProperty("--c1", t.accentPrimary);
    card.style.setProperty("--c2", t.accentSecondary);
    card.style.setProperty("--cardBg", t.cardBg);
    card.style.setProperty("--text", t.text);
    card.style.setProperty("--muted", t.textSecondary);
    const btn = card.querySelector(".btn-theme");
    if (btn) btn.textContent = `Theme: ${t.name} 🎨`;
}

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("show");
            else entry.target.classList.remove("show");
        });
    },
    { threshold: 0 },
);

const developers = [
    {
        id: 1,
        jobTitle: "Frontend Developer",
        bio: "Currently learning advanced React patterns and improving my frontend architecture skills.",
        skills: ["React", "JavaScript", "HTML", "CSS"],
    },
    {
        id: 2,
        jobTitle: "Backend Developer",
        bio: "Studying backend development with Node.js and building scalable REST APIs.",
        skills: ["Node.js", "Express", "MongoDB", "REST API"],
    },
    {
        id: 3,
        jobTitle: "Software Engineer",
        bio: "Improving my understanding of data structures and algorithms through daily practice.",
        skills: ["JavaScript", "Algorithms", "Problem Solving", "Git"],
    },
    {
        id: 4,
        jobTitle: "Frontend Engineer",
        bio: "Learning TypeScript and focusing on writing cleaner and safer code.",
        skills: ["TypeScript", "React", "Next.js", "ES6"],
    },
    {
        id: 5,
        jobTitle: "Backend Engineer",
        bio: "Exploring system design concepts and scalability best practices.",
        skills: ["System Design", "Node.js", "PostgreSQL", "Docker"],
    },
    {
        id: 6,
        jobTitle: "Full Stack Developer",
        bio: "Working on full-stack projects to strengthen both frontend and backend skills.",
        skills: ["React", "Node.js", "MongoDB", "Tailwind"],
    },
    {
        id: 7,
        jobTitle: "Security Engineer",
        bio: "Learning authentication and security best practices for web applications.",
        skills: ["JWT", "Authentication", "Express", "Security"],
    },
    {
        id: 8,
        jobTitle: "UI/UX Developer",
        bio: "Improving UI/UX skills while building responsive web applications.",
        skills: ["CSS", "Responsive Design", "Figma", "React"],
    },
    {
        id: 9,
        jobTitle: "Database Engineer",
        bio: "Studying database optimization techniques and performance tuning.",
        skills: ["MySQL", "PostgreSQL", "Indexes", "Optimization"],
    },
    {
        id: 10,
        jobTitle: "DevOps Engineer",
        bio: "Learning Docker and CI/CD to understand modern DevOps workflows.",
        skills: ["Docker", "CI/CD", "GitHub Actions", "Linux"],
    },
    {
        id: 11,
        jobTitle: "Mobile Developer",
        bio: "Building cross-platform mobile applications with React Native and Expo.",
        skills: ["React Native", "JavaScript", "Mobile Design", "Redux"],
    },
    {
        id: 12,
        jobTitle: "Cloud Architect",
        bio: "Studying AWS services and serverless architecture to build global-scale apps.",
        skills: ["AWS", "Lambda", "Terraform", "CloudFormation"],
    },
    {
        id: 13,
        jobTitle: "QA Automation Engineer",
        bio: "Focusing on end-to-end testing and automated quality assurance workflows.",
        skills: ["Cypress", "Jest", "Playwright", "Testing"],
    },
    {
        id: 14,
        jobTitle: "Data Scientist",
        bio: "Analyzing large datasets and building predictive models using Python.",
        skills: ["Python", "Pandas", "Scikit-learn", "SQL"],
    },
    {
        id: 15,
        jobTitle: "Machine Learning Engineer",
        bio: "Developing and deploying neural networks and deep learning models.",
        skills: ["TensorFlow", "PyTorch", "NLP", "Neural Networks"],
    },
    {
        id: 16,
        jobTitle: "Site Reliability Engineer",
        bio: "Ensuring high availability and monitoring system health in production environments.",
        skills: ["Kubernetes", "Prometheus", "Grafana", "Go"],
    },
    {
        id: 17,
        jobTitle: "Blockchain Developer",
        bio: "Exploring smart contracts and decentralized applications on Ethereum.",
        skills: ["Solidity", "Web3.js", "Ethereum", "Hardhat"],
    },
    {
        id: 18,
        jobTitle: "Embedded Systems Engineer",
        bio: "Writing low-level code for hardware interfaces and IoT devices.",
        skills: ["C++", "C", "Microcontrollers", "RTOS"],
    },
    {
        id: 19,
        jobTitle: "Technical Writer",
        bio: "Creating clear documentation and tutorials to help developers adopt new tools.",
        skills: ["Markdown", "Docusaurus", "Technical Writing", "API Docs"],
    },
    {
        id: 20,
        jobTitle: "AI Researcher",
        bio: "Investigating the latest advancements in Large Language Models and generative AI.",
        skills: ["LLMs", "Transformers", "Prompt Engineering", "Python"],
    },
];
const generateDeveloperObj = () =>
    developers[Math.floor(Math.random() * developers.length)];

async function getData() {
    try {
        const res = await fetch("https://randomuser.me/api/?results=50");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        displayData(data);
    } catch (err) {
        console.error(err);
    }
}

function displayData(users) {
    let html = "";

    users.results.forEach((user) => {
        const {
            name: { first, last },
            email,
            picture: { large: image },
        } = user;

        const dev = generateDeveloperObj();

        html += `
      <div class="card">
        <img src="${image}" alt="${first} ${last}" />
        <h2 class="title">${first} ${last}</h2>
        <p class="job-title">${dev.jobTitle}</p>
        <p class="bio">${dev.bio}</p>
        <div class="skills-container">
          <p class="skills-title">SKILLS:</p>
          <div class="skills">
            ${dev.skills.map((skill) => `<span class="skill">${skill}</span>`).join("")}
          </div>
        </div>
        <div class="email-container">
          <i class="fa-regular fa-envelope"></i>
          <p class="email">${email}</p>
          <i class="fa-solid fa-copy copy-btn"></i>
        </div>
        <div class="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter"></i></a>
        </div>
        
        <button class="btn-theme">Change Theme 🎨</button>
      </div>
    `;
    });

    cards.innerHTML = html;

    document.querySelectorAll(".card").forEach((card) => {
        observer.observe(card);
        const key = themeKeys[Math.floor(Math.random() * themeKeys.length)];
        applyThemeToCard(card, key);
    });
}

cards.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-theme");
    if (btn) {
        const card = btn.closest(".card");
        const current = card.dataset.theme || "";
        const next = getRandomTheme(current);
        applyThemeToCard(card, next);
        return;
    }

    if (e.target.classList.contains("copy-btn")) {
        const email =
            e.target.parentElement.querySelector(".email").textContent;
        navigator.clipboard.writeText(email).then(() => {
            e.target.classList.remove("fa-copy");
            e.target.classList.add("fa-check-double");
            setTimeout(() => {
                e.target.classList.remove("fa-check-double");
                e.target.classList.add("fa-copy");
            }, 2000);
        });
    }
});

let toastEl = null;
let toastTimer = null;

function showToast(message, card) {
    if (!toastEl) {
        toastEl = document.createElement("div");
        toastEl.className = "toast";
        document.body.appendChild(toastEl);
    }

    const styles = getComputedStyle(card);
    const c1 = styles.getPropertyValue("--c1").trim() || "#7c3aed";
    const c2 = styles.getPropertyValue("--c2").trim() || "#22d3ee";

    toastEl.style.setProperty("--tc1", c1);
    toastEl.style.setProperty("--tc2", c2);

    toastEl.textContent = message;

    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toastEl.classList.remove("show");
    }, 1800);
}

cards.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-theme");
    if (btn) {
        const card = btn.closest(".card");
        const current = card.dataset.theme || "";
        const next = getRandomTheme(current);
        applyThemeToCard(card, next);
        return;
    }

    if (e.target.classList.contains("copy-btn")) {
        const card = e.target.closest(".card");
        const email =
            e.target.parentElement.querySelector(".email").textContent;

        navigator.clipboard.writeText(email).then(() => {
            e.target.classList.remove("fa-copy");
            e.target.classList.add("fa-check-double");

            showToast("Email copied ✅", card);

            setTimeout(() => {
                e.target.classList.remove("fa-check-double");
                e.target.classList.add("fa-copy");
            }, 1200);
        });
    }
});

getData();
