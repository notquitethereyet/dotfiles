interface HeaderLink {
  name: string;
  link: string;
  altText: string;
}

export const headerLinks = [
  {
    name: "GitHub",
    link: "https://github.com/notquitethereyet",
    altText: "A link to my GitHub profile, (at) notquitethereyet.",
  },
  {
    name: "Discord",
    link: "https://discord.com/users/708534253809434684",
    altText: "A link to my Discord user profile, (at) quiet.owo.",
  },
  {
    name: "Youtube",
    link: "https://youtube.com/channel/UC1CqG4CxLro2i_H2uBX0DCw",
    altText: "A link to my YouTube.",
  },
  {
    name: "AniList",
    link: "https://anilist.co/user/notquite",
    altText: "A link to my AniList profile, (at) notquite.",
  },
  {
    name: "Email",
    link: "mailto:judy2077@protonmail.org",
    altText: "A mailto link to email me at judy2077 (at) protonmail (dot) org.",
  },
  {
    name: "Download RAM",
    link: "/downloadRAM",
    altText: "A link to download free RAM.",
  },
] satisfies HeaderLink[];
