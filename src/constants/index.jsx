// ==============================
// 🔗 Navigation Links
// ==============================
const navLinks = [
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Skills", link: "#skills" },
    { name: "Resume", link: "#resume" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

// ==============================
// 💡 Dynamic Words (Hero Section)
// ==============================
const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Animations", imgPath: "/images/animations.svg" },
    { text: "Projects", imgPath: "/images/projects.svg" },
];

// ==============================
// 🔢 Counter Section (Stats)
// ==============================
const counterItems = [
    { value: 15, suffix: "+", label: "Projects Completed" },
    { value: 10, suffix: "+", label: "Frontend Technologies Mastered" },
    { value: 5, suffix: "+", label: "Team Projects" },
    { value: 3, suffix: "+", label: "Ongoing MERN Projects" },
];

// ==============================
// 🧩 Tech Logos / Partners
// ==============================
const logoIconsList = [
    { imgPath: "/images/logos/react.png" },
    { imgPath: "/images/logos/tailwindcss.svg" },
    { imgPath: "/images/logos/daisyui.svg" },
    { imgPath: "/images/logos/materialui.svg" },
    { imgPath: "/images/logos/nextjs.svg" },
    { imgPath: "/images/logos/nodejs.svg" },
    { imgPath: "/images/logos/expressjs.svg" },
    { imgPath: "/images/logos/mongodb.svg" },
    { imgPath: "/images/logos/firebase.svg" },
    { imgPath: "/images/logos/typescript.svg" },
    { imgPath: "/images/logos/gsap.svg" },
];

// ==============================
// ⚙️ Abilities / Strengths
// ==============================
const abilities = [
    {
        imgPath: "/images/uiux.png",
        title: "UI/UX Precision",
        desc: "Building clean, modern, and responsive interfaces with pixel-perfect accuracy using Tailwind & DaisyUI.",
    },
    {
        imgPath: "/images/comm.png",
        title: "Collaborative Mindset",
        desc: "Working well with teams using Git & GitHub, and maintaining clear communication during development.",
    },
    {
        imgPath: "/images/speed.png",
        title: "Performance Optimization",
        desc: "Ensuring smooth, fast-loading, and optimized applications using React, Axios, and lazy-loading techniques.",
    },
    {
        imgPath: "/images/deploy.png",
        title: "Deployment & Integration",
        desc: "Deploying and maintaining apps on Firebase and Vercel with backend API integration and authentication (JWT).",
    },
];

// ==============================
// 🧠 Tech Stack Images
// ==============================
const techStackImgs = [
    { name: "React.js", imgPath: "/images/logos/react.png" },
    { name: "Next.js", imgPath: "/images/logos/nextjs.svg" },
    { name: "Tailwind CSS", imgPath: "/images/logos/tailwindcss.svg" },
    { name: "DaisyUI", imgPath: "/images/logos/daisyui.svg" },
    { name: "Material UI", imgPath: "/images/logos/materialui.svg" },
    { name: "TypeScript", imgPath: "/images/logos/typescript.svg" },
    { name: "Node.js", imgPath: "/images/logos/nodejs.svg" },
    { name: "Express.js", imgPath: "/images/logos/expressjs.svg" },
    { name: "MongoDB", imgPath: "/images/logos/mongodb.svg" },
    { name: "Firebase", imgPath: "/images/logos/firebase.svg" },
    { name: "Framer Motion", imgPath: "/images/logos/framer.svg" },
    { name: "GSAP", imgPath: "/images/logos/gsap.svg" },
    { name: "Axios", imgPath: "/images/logos/axios.svg" },
    { name: "JWT", imgPath: "/images/logos/jwt.svg" },
    { name: "SSLCommerz", imgPath: "/images/logos/sslcommerz.svg" },
];

// ==============================
// 🧊 3D Tech Stack Icons
// ==============================
const techStackIcons = [
    {
        name: "React.js",
        modelPath: "/models/react_logo.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Node.js",
        modelPath: "/models/node_logo.glb",
        scale: 2,
        rotation: [0, 0, 0],
    },
    {
        name: "MongoDB",
        modelPath: "/models/mongodb_logo.glb",
        scale: 1.5,
        rotation: [0, 0, 0],
    },
    {
        name: "Firebase",
        modelPath: "/models/firebase_logo.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
];

// ==============================
// 💼 Experience Cards
// ==============================
const expCards = [
    {
        review:
            "Amit brought creativity and structure to our frontend team. His clean code and attention to design details consistently elevated our user interfaces.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Frontend Developer (React.js)",
        date: "June 2024 - Present",
        responsibilities: [
            "Developing responsive, interactive UIs using React, Tailwind, and Framer Motion.",
            "Implementing Firebase authentication and JWT-based authorization.",
            "Integrating REST APIs with secure and efficient Axios requests.",
        ],
    },
    {
        review:
            "Amit’s MERN stack development skills helped us deploy modern and efficient applications that users love.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "MERN Stack Developer",
        date: "2025 (Ongoing Projects)",
        responsibilities: [
            "Developing full-stack projects with MongoDB, Express, React, and Node.js.",
            "Using Context API and local storage for state persistence and management.",
            "Implementing secure payment integration using SSLCommerz API.",
        ],
    },
];

// ==============================
// 🧾 Testimonials
// ==============================
const testimonials = [
    {
        name: "Rahim Ahmed",
        mentions: "@rahimdev",
        review:
            "Amit's frontend work is consistently top-tier — smooth animations, clean code, and thoughtful design integration. Highly recommended for modern web projects!",
        imgPath: "/images/client1.png",
    },
    {
        name: "Sara Khan",
        mentions: "@sarakodes",
        review:
            "His React and Firebase integration made our project seamless. Amit’s ability to merge logic with design is impressive.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Jahid Hasan",
        mentions: "@jahidhasan",
        review:
            "Dependable, creative, and detail-oriented — Amit delivers quality results every time, even under tight deadlines.",
        imgPath: "/images/client3.png",
    },
];

// ==============================
// 🧾 Resume Section (New)
// ==============================
const resumeLinks = [
    {
        name: "Download Resume (PDF)",
        link: "https://drive.google.com/your-resume-link", // 🔗 replace with your actual Google Drive / portfolio resume link
    },
    {
        name: "View on LinkedIn",
        link: "https://www.linkedin.com/in/amitkumersarkar/",
    },
];

// ==============================
// 🌐 Social Media Icons
// ==============================
const socialImgs = [
    { name: "github", imgPath: "/images/github.png" },
    { name: "linkedin", imgPath: "/images/linkedin.png" },
    { name: "x", imgPath: "/images/x.png" },
    { name: "facebook", imgPath: "/images/fb.png" },
    { name: "instagram", imgPath: "/images/insta.png" },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    testimonials,
    resumeLinks,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};
