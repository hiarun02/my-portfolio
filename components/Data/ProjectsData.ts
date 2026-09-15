export type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  github: string;
  live: string;
  image: string;
  category: string;
  status?: string;
};

export const personalProjects: Project[] = [
  {
    id: 1,
    title: "Shotzly",
    description:
      "Turn your code and screenshots into stunning, professional visuals with shotzly. already loved by 300+ users in launch week.",
    techStack: ["NextJS", "TypeScript", "Shadcn-ui", "canvas"],
    github: "https://github.com/HiRunOSS/shotzly",
    live: "https://shotzly.com/",
    image: "/snippify.png",
    category: "",
    status: "Live",
  },
  {
    id: 2,
    title: "Feedora",
    description:
      "Feedora is a feedback collection tool that helps you gather insights from your users effortlessly.",
    techStack: ["NextJS", "Typescript", "Shadcn", "Supabase", "Next-Auth"],
    github: "https://github.com/hiarun02/Feedora",
    live: "https://feedora.hiarun.com/",
    image: "/feedora.png",
    category: "fullstack",
    status: "Live",
  },

  {
    id: 3,
    title: "Rapid Report",
    description:
      "A modern platform that lets people quickly report incidents and track their progress, powered by AI for faster and more accurate reporting.",
    techStack: [
      "React",
      "TypeScript",
      "Shadcn-ui",
      "MongoDB",
      "Cloudinary",
      "Express",
      "Jwt-Auth",
    ],
    github: "https://github.com/hiarun02/rapidReport",
    live: "https://rapidreport.hiarun.com/",
    image: "/RapidReport.png",
    category: "full stack",
    status: "Live",
  },
  {
    id: 4,
    title: "Jobify",
    description:
      "Jobify is a job portal where people can find and apply for jobs, and companies can post job openings. It's built with a clean and user-friendly design.",
    techStack: [
      "React",
      "Javascript",
      "Shadcn-ui",
      "redux",
      "MongoDB",
      "Express",
      "Redis",
      "Cloudinary",
      "JwtAuth",
    ],
    github: "https://github.com/hiarun02/Jobify",
    live: "https://jobify.hiarun.com/",
    image: "/Jobify.png",
    category: "fullstack",
    status: "Live",
  },

  {
    id: 5,
    title: "PaletteCraft",
    description:
      "PaletteCraft is an official Adobe Express add-on that helps you create, explore, and apply beautiful, human-inspired color palettes directly in your designs.",
    techStack: ["Javascript", "React", "Gen ai", "Adobe/ccWeb"],
    github: "https://github.com/hiarun02/palettecraft",
    live: "https://new.express.adobe.com/add-ons?addOnId=wim1m902m",
    image: "/PaletteCraft.png",
    category: "plugins",
    status: "Live",
  },
  // {
  //   id: 6,
  //   title: "TwiFake",
  //   description:
  //     "TwiFake is a simple tool that lets you create realistic-looking fake tweets for design mockups, social media content, or fun creative projects.",
  //   techStack: [
  //     "React",
  //     "tailwindcss",
  //     "framer-motion",
  //     "Shadcn-ui",
  //     "html2canvas",
  //   ],
  //   github: "https://github.com/hiarun02/TwiFake",
  //   live: "https://twifake.hiarun.me/",
  //   image: "/Projects-image/twifale.png",
  //   category: "frontend",
  //   status: "Live",
  // },
  // {
  //   id: 7,
  //   title: "Clarify",
  //   description:
  //     "Clarify is a image enhancer web application powered by (PicWish API) that enhances and upscales your images with just one click",
  //   techStack: ["React", "tailwindcss", "PicWish Api"],
  //   github: "https://github.com/hiarun02/Clarify",
  //   live: "https://clarify.hiarun.me/",
  //   image: "/Projects-image/codeSnippet.png",
  //   category: "frontend",
  //   status: "Live",
  // },
];
