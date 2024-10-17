interface Project {
  name: string;
  link: string;
  description: string;
  technologies: string;
  contributor?: boolean;
}

export const projects = [
  {
    name: "Intrusion Detection using Machine Learning",
    link: "https://github.com/notquitethereyet/ML-IDS",
    description: "Feature selection on UNSW-NB14 and NSL-KDD dataset to improve accuracy while maintaining lightweight performance!",
    technologies: "Python",
  },
  {
    name: "Face Anonymizer using Neural Networks",
    link: "https://github.com/notquitethereyet/face_anonymizer",
    description: "Make sure your cute face is anonymous online!",
    technologies: "Python",
  },
  {
    name: "Arch Install Guide",
    link: "https://github.com/notquitethereyet/Arch-Linux-install-guide",
    description: "A simple to follow Arch Linux install guide.",
    technologies: "Linux, Shell",
  },
  {
    name: "Astro Site",
    link: "https://github.com/notquitethereyet/notquitethereyet.github.io",
    description: "You are looking at it right now!",
    technologies: "Astro, Typescript",
  },
  {
    name: "BCI Wheelchair",
    link: "https://github.com/notquitethereyet/BCI-Controlled-wheelchair-with-text-to-speech",
    description: "A text to speech python GUI keyboard desgned for a project based on Brain Computing Interfaces on the raspberry pi.",
    technologies: "Python",
    contributor: true,
  },
  {
    name: "Empress Discord Self-Bot",
    link: "https://github.com/notquitethereyet/Empress-Discord-Self-Bot",
    description: "Automate your discord account with token!",
    technologies: "JavaScript",
  },
] satisfies Project[];
