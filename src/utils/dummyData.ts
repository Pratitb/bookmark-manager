import type { BookmarkType } from "./types"

export const sortingOptions = [
    {
        name: 'alpha-asc',
        value: 'alphabetically (asc)'
    },
    {
        name: 'alpha-desc',
        value: 'alphabetically (desc)'
    },
]

export const dummyBookmarks: BookmarkType[] = [
    {
        id: 1,
        title: "Frontend Mentor",
        description:
            "Improve your front-end coding skills by building real projects.",
        url: "https://www.frontendmentor.io",
        domain: "frontendmentor.io",
        favicon: "https://www.google.com/s2/favicons?domain=frontendmentor.io&sz=64",
        tags: ["practice", "learning", "community"],
        archived: false,
        isPinned: false,
        createdAt: "2025-01-15"
    },
    {
        id: 2,
        title: "MDN Web Docs",
        description:
            "Resources for developers, by developers. Learn HTML, CSS, and JavaScript.",
        url: "https://developer.mozilla.org",
        domain: "developer.mozilla.org",
        favicon: "https://www.google.com/s2/favicons?domain=developer.mozilla.org&sz=64",
        tags: ["reference", "html", "css", "javascript"],
        archived: false,
        isPinned: false,

        createdAt: "2025-01-10"
    },
    {
        id: 3,
        title: "React Docs",
        description:
            "The library for web and native user interfaces. Official React documentation.",
        url: "https://react.dev",
        domain: "react.dev",
        favicon: "https://www.google.com/s2/favicons?domain=react.dev&sz=64",
        tags: ["javascript", "framework", "reference"],
        archived: false,
        isPinned: false,

        createdAt: "2025-02-20"
    },
    {
        id: 4,
        title: "freeCodeCamp",
        description:
            "Learn to code for free. Build projects. Earn certifications.",
        url: "https://www.freecodecamp.org",
        domain: "freecodecamp.org",
        favicon: "https://www.google.com/s2/favicons?domain=freecodecamp.org&sz=64",
        tags: ["learning", "community"],
        archived: true,
        isPinned: false,

        createdAt: "2024-12-05"
    },
    {
        id: 5,
        title: "JavaScript Info",
        description:
            "Modern JavaScript tutorial covering basics to advanced concepts.",
        url: "https://javascript.info",
        domain: "javascript.info",
        favicon: "https://www.google.com/s2/favicons?domain=javascript.info&sz=64",
        tags: ["javascript", "learning"],
        archived: false,
        isPinned: false,

        createdAt: "2025-01-28"
    },
    {
        id: 6,
        title: "Dev.to",
        description:
            "A constructive and inclusive social network for software developers.",
        url: "https://dev.to",
        domain: "dev.to",
        favicon: "https://www.google.com/s2/favicons?domain=dev.to&sz=64",
        tags: ["community", "blog"],
        archived: false,
        isPinned: false,

        createdAt: "2025-01-18"
    },
    {
        id: 7,
        title: "CSS Tricks",
        description:
            "Tips, tricks, and techniques on using CSS and modern web design.",
        url: "https://css-tricks.com",
        domain: "css-tricks.com",
        favicon: "https://www.google.com/s2/favicons?domain=css-tricks.com&sz=64",
        tags: ["css", "design", "reference"],
        archived: false,
        isPinned: false,

        createdAt: "2024-11-22"
    },
    {
        id: 8,
        title: "Web.dev",
        description:
            "Guidance and best practices for building modern web experiences.",
        url: "https://web.dev",
        domain: "web.dev",
        favicon: "https://www.google.com/s2/favicons?domain=web.dev&sz=64",
        tags: ["performance", "best-practices"],
        archived: true,
        isPinned: false,

        createdAt: "2024-10-30"
    },
    {
        id: 9,
        title: "Can I use",
        description:
            "Up-to-date browser support tables for modern web technologies.",
        url: "https://caniuse.com",
        domain: "caniuse.com",
        favicon: "https://www.google.com/s2/favicons?domain=caniuse.com&sz=64",
        tags: ["reference", "browser"],
        archived: false,
        isPinned: false,

        createdAt: "2025-02-02"
    },
    {
        id: 10,
        title: "Smashing Magazine",
        description:
            "Articles and resources on web development, UX, and design.",
        url: "https://www.smashingmagazine.com",
        domain: "smashingmagazine.com",
        favicon: "https://www.google.com/s2/favicons?domain=smashingmagazine.com&sz=64",
        tags: ["design", "ux", "articles"],
        archived: false,
        isPinned: false,

        createdAt: "2024-12-18"
    },
    {
        id: 11,
        title: "Vite",
        description:
            "Next generation frontend tooling. Fast dev server and optimized builds.",
        url: "https://vitejs.dev",
        domain: "vitejs.dev",
        favicon: "https://www.google.com/s2/favicons?domain=vitejs.dev&sz=64",
        tags: ["tooling", "javascript"],
        archived: false,
        isPinned: false,

        createdAt: "2025-02-12"
    },
    {
        id: 12,
        title: "Tailwind CSS",
        description:
            "Utility-first CSS framework for rapidly building modern websites.",
        url: "https://tailwindcss.com",
        domain: "tailwindcss.com",
        favicon: "https://www.google.com/s2/favicons?domain=tailwindcss.com&sz=64",
        tags: ["css", "framework"],
        archived: true,
        isPinned: false,

        createdAt: "2024-09-14"
    }
]