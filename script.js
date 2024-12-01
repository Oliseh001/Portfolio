const contents = [
  {
    id: 1,
    title: "About Me",
    body: `I am a dedicated web developer who thrives on creating responsive and visually engaging web experiences. With a strong focus on being innovative, detail-oriented, and hard-working, I leverage my skills in HTML5, CSS3, JavaScript, Vue.js, and NestJS to build seamless, scalable applications. NestJS, with its powerful TypeScript support and modular architecture, allows me to develop robust backend solutions that integrate perfectly with front-end frameworks.`,
  },
  {
    id: 2,
    title: "Technical Skills",
    body: `
      <ul>
        <li>Semantic HTML, CSS3 / Tailwind CSS, JavaScript, TypeScript</li>
        <li>Git (Version Control), GitHub, GitLab</li>
        <li>VueJs (Quasar Framework), NestJS</li>
      </ul>
    `,
  },
  {
    id: 3,
    title: "Projects",
    body: `
      <div>
        <div class="project">
          <h4>Vue E-commerce Site</h4>
          <p>A functional e-commerce website built with VueJS & Quasar.</p>
          <a href="https://e-commerce-gzu0.onrender.com/#/" target="_blank" class="project-btn">View Project</a>
        </div>
        <div class="project">
          <h4>Random Bible Verse & Quote Generator</h4>
          <p>A full-stack app for generating random verses and quotes, built with VueJS & NestJS.</p>
          <a href="https://bible-verse-front-2.onrender.com" target="_blank" class="project-btn">View Project</a>
        </div>
        <div class="project">
          <h4>Cart Management API</h4>
          <p>A A REST API for managing carts built with NestJS, featuring JWT authentication and route guards for user verification. The API also utilizes bcrypt for password hashing, ensuring secure user authentication and authorization before granting access to protected routes.</p>
          <a href="https://github.com/Oliseh001/ecomm-bkend" target="_blank" class="project-btn">View Github Repo</a>
        </div>
      </div>`
  },
];

Vue.createApp({
  data() {
    return {
      name: "Olisemeka",
      contents,
      darkModeSet: false,
    };
  },
  methods: {
    toggleMode() {
      this.darkModeSet = !this.darkModeSet;
      document.body.classList.toggle("dark", this.darkModeSet);
    },
  },
}).mount("body");
