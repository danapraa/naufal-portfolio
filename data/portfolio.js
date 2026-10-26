export const profile = {
  name: "Naufal Wahyu Pradana",
  shortName: "Naufal",
  initials: "NW",
  status: "Fresh Graduate Informatika",
  headline: "Front-End Developer & Web Developer",
  intro:
    "Saya membangun aplikasi web yang fungsional, responsif, dan nyaman digunakan, dengan React.js, Next.js, Laravel, dan MySQL.",
  location: "Surabaya, Indonesia",
  email: "falxuee@gmail.com",
  phone: "0895-1756-1511",
  whatsapp: "https://wa.me/6289517561511",
  linkedin: "https://www.linkedin.com/in/naufalwahyu/",
  github: "https://github.com/danapraa",
  // Taruh file CV kamu di folder public/ dengan nama persis seperti ini
  cv: "/CV-Naufal-Wahyu-Pradana.pdf",
  heroTech: ["Laravel", "Next.js", "React.js", "Node.js", "MySQL", "Figma"],
};

export const about = {
  paragraphs: [
    "Saya merupakan fresh graduate Informatika yang memiliki minat di bidang Web Development dan Software Development. Saya memiliki pengalaman mengembangkan website menggunakan Laravel, Next.js, React, dan Node.js, serta memahami penggunaan MySQL untuk pengelolaan database dan Figma untuk desain antarmuka.",
    "Saya bersemangat untuk terus mengembangkan keterampilan teknis, mempelajari teknologi baru, dan berkontribusi dalam membangun solusi digital yang fungsional dan responsif.",
  ],
  stats: [
    { value: "2", label: "Magang" },
    { value: "2", label: "Proyek Aplikasi Web" },
    { value: "S1", label: "Informatika, Lulus 2026" },
  ],
};

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    items: ["Laravel", "PHP", "Node.js", "REST API"],
  },
  {
    title: "Database",
    items: ["MySQL"],
  },
  {
    title: "Tools & Design",
    items: ["Git", "GitHub", "Figma"],
  },
  {
    title: "Kompetensi",
    wide: true,
    items: [
      "Front-End Development",
      "Back-End Web Development",
      "Full-Stack Development",
      "Responsive Web Design",
      "UI/UX Implementation",
      "Problem Solving",
    ],
  },
];

export const experiences = [
  {
    role: "Frontend Developer (Magang)",
    company: "Bandung Techno Park",
    period: "Februari 2025 – Juni 2025",
    points: [
      "Mengembangkan fitur antarmuka pengguna untuk proyek Jatim Bissa Startup.",
      "Mengimplementasikan desain UI menjadi tampilan web yang responsif.",
      "Berkolaborasi dengan tim backend dan desain untuk meningkatkan pengalaman pengguna.",
      "Menjaga konsistensi desain dan usability pada setiap halaman.",
    ],
  },
  {
    role: "Desainer Grafis (Magang)",
    company: "Universitas Terbuka Surabaya",
    period: "September 2020 – April 2021",
    points: [
      "Mendesain materi visual untuk kebutuhan akademik dan institusional.",
      "Mendukung pembuatan konten visual untuk publikasi dan branding universitas.",
      "Bekerja sama dengan tim internal dalam penyelesaian kebutuhan desain.",
    ],
  },
];

export const projects = [
  {
    title: "NusaGreenMarket",
    type: "Web Application Project",
    period: "November 2025 – Sekarang",
    description:
      "Platform web untuk penjualan sayur dan buah segar langsung dari kebun. Mencakup fitur front-end dan back-end untuk mendukung interaksi pengguna, dengan antarmuka responsif yang fokus pada kemudahan penggunaan dan performa.",
    tech: ["Next.js", "Laravel", "MySQL", "Tailwind CSS"], // SESUAIKAN dengan teknologi aslinya
    demo: "", // isi link demo jika ada, contoh: "https://nusagreenmarket.vercel.app"
    repo: "", // isi link GitHub repo jika boleh dipublikasikan
  },
  {
    title: "JatimBissa",
    type: "Front-End Development Project",
    period: "Februari 2025 – Juni 2025",
    description:
      "Antarmuka pengguna untuk aplikasi startup Jatim Bissa. Mengimplementasikan desain UI menjadi tampilan web yang responsif dan konsisten, serta berkolaborasi dengan tim backend dan desain.",
    tech: ["React.js", "Tailwind CSS", "REST API", "Figma"], // SESUAIKAN dengan teknologi aslinya
    demo: "",
    repo: "",
  },
];

export const education = {
  degree: "Sarjana Informatika (S1)",
  school: "Universitas Telkom Surabaya",
  period: "2022 – 2026",
  detail:
    "Program Studi Informatika, Fakultas Informatika. Menyelesaikan proyek akademik terkait pengembangan aplikasi web dan desain antarmuka pengguna.",
};

// Hapus atau ubah sesuai sertifikat yang kamu miliki. Kosongkan array ([]) untuk menyembunyikan bagian ini.
export const certifications = [
  {
    name: "Dasar-Dasar Node.js", // SESUAIKAN nama persis di sertifikat
    issuer: "Bisa AI Academy", // SESUAIKAN
    year: "", // isi tahun, contoh: "2025"
  },
];